"""Sync upcoming events from a public Google Calendar into
data/community_events.yaml.

Reads the calendar's ICS feed from the GOOGLE_CALENDAR_ICS_URL environment
variable, converts each event into this repo's event schema, and merges the
result into data/community_events.yaml — replacing only the entries this
script previously added (marked `synced: true`), so hand-written events are
left untouched.

If GOOGLE_CALENDAR_ICS_URL isn't set yet, this exits without changing
anything, so the scheduled workflow can run safely before the calendar URL
is configured.
"""

import os
import sys
from datetime import datetime, timezone

import requests
import yaml
from icalendar import Calendar

DATA_FILE = "data/community_events.yaml"
SUMMARY_MAX_LEN = 160

CATEGORY_KEYWORDS = {
    "developer-meeting": ["developer meeting", "dev meeting", "devmeeting"],
    "workshop": ["workshop"],
    "outreach": ["outreach", "code clinic", "open house", "summer of code"],
}


def guess_category(title):
    lowered = title.lower()
    for category, keywords in CATEGORY_KEYWORDS.items():
        if any(keyword in lowered for keyword in keywords):
            return category
    return "event"


def truncate_summary(text):
    text = " ".join((text or "").split())
    if len(text) <= SUMMARY_MAX_LEN:
        return text
    return text[:SUMMARY_MAX_LEN].rsplit(" ", 1)[0] + "…"


def to_date(value):
    # vDate -> date; vDatetime -> datetime. Normalize both to a plain date
    # since this site's calendar only ever shows day-level dates.
    return value.dt.date() if hasattr(value.dt, "date") and callable(value.dt.date) else value.dt


def parse_events(ics_bytes):
    calendar = Calendar.from_ical(ics_bytes)
    today = datetime.now(timezone.utc).date()
    events = []

    for component in calendar.walk("VEVENT"):
        title = str(component.get("SUMMARY", "")).strip()
        dtstart = component.get("DTSTART")
        if not title or not dtstart:
            continue

        start = to_date(dtstart)
        dtend = component.get("DTEND")
        end = to_date(dtend) if dtend else start

        # Only keep events that haven't already finished.
        if end < today:
            continue

        event = {
            "title": title,
            "start": start.isoformat(),
            "category": guess_category(title),
            "synced": True,
        }
        if end != start:
            event["end"] = end.isoformat()
        location = str(component.get("LOCATION", "")).strip()
        if location:
            event["location"] = location
        description = str(component.get("DESCRIPTION", "")).strip()
        if description:
            event["summary"] = truncate_summary(description)
        url = component.get("URL")
        if url:
            event["url"] = str(url)

        events.append(event)

    return events


def load_data():
    if not os.path.exists(DATA_FILE):
        return {"events": []}
    with open(DATA_FILE, "r") as f:
        return yaml.safe_load(f) or {"events": []}


def main():
    ics_url = os.environ.get("GOOGLE_CALENDAR_ICS_URL", "").strip()
    if not ics_url:
        print("GOOGLE_CALENDAR_ICS_URL is not set — skipping calendar sync.")
        return

    response = requests.get(ics_url, timeout=30)
    response.raise_for_status()
    synced_events = parse_events(response.content)
    print(f"Fetched {len(synced_events)} upcoming event(s) from Google Calendar.")

    data = load_data()
    hand_written = [e for e in data.get("events", []) if not e.get("synced")]
    data["events"] = hand_written + synced_events
    data["last_synced"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    with open(DATA_FILE, "w") as f:
        f.write(
            "# Community calendar — edit this file to add or update events "
            "(see docs/common-tasks/update-community-calendar.md).\n"
            "# Entries marked `synced: true` are managed automatically by "
            "sync_google_calendar.py — edit the source calendar event "
            "instead of this file for those.\n"
        )
        yaml.safe_dump(data, f, sort_keys=False, allow_unicode=True)


if __name__ == "__main__":
    try:
        main()
    except requests.RequestException as e:
        print(f"Error fetching Google Calendar feed: {e}", file=sys.stderr)
        sys.exit(1)
