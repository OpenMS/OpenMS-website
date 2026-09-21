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

import html
import os
import re
import sys
from datetime import datetime, timedelta, timezone

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

_TAG_RE = re.compile(r"<[^>]+>")


def guess_category(title):
    lowered = title.lower()
    for category, keywords in CATEGORY_KEYWORDS.items():
        if any(keyword in lowered for keyword in keywords):
            return category
    return "event"


_ANCHOR_RE = re.compile(
    r"""(?is)<a\b[^>]*?href\s*=\s*["']([^"']+)["'][^>]*>(.*?)</a>"""
)


def strip_html(text):
    # Google Calendar descriptions are often rich text (HTML). The event
    # card template renders `summary` as plain text, so raw tags would show
    # up verbatim — strip them down to plain text instead.
    text = re.sub(r"(?i)<br\s*/?>", " ", text or "")
    text = _TAG_RE.sub("", text)
    return html.unescape(text)


def extract_links(text):
    # Pull hyperlinks out of the HTML before it's flattened to plain text
    # (which would drop the href). Returns the text with the anchors
    # removed, plus "Label: URL" strings — the shape the event card turns
    # back into a real link. Labels are reduced to letters and spaces to
    # match what the card's link pattern accepts.
    links = []

    def _collect(match):
        url = html.unescape(match.group(1)).strip()
        if not url.lower().startswith(("http://", "https://")):
            return match.group(2)
        label = re.sub(r"[^A-Za-z ]+", " ", strip_html(match.group(2)))
        label = " ".join(label.split()) or "Link"
        entry = f"{label}: {url}"
        if entry not in links:
            links.append(entry)
        return " "

    return _ANCHOR_RE.sub(_collect, text or ""), links


def truncate_summary(text):
    # Links are set aside first so a long description can't push them past
    # the length limit and cut them off; only the prose is truncated.
    text, links = extract_links(text)
    text = " ".join(strip_html(text).split())
    if len(text) > SUMMARY_MAX_LEN:
        text = text[:SUMMARY_MAX_LEN].rsplit(" ", 1)[0] + "…"
    return " ".join([text, *links]).strip()


def to_value(value):
    # vDate -> date (all-day event); vDatetime -> datetime (has a real
    # time-of-day). Keep whichever it is — datetimes keep their time and
    # timezone offset so the site can show event times, not just dates.
    return value.dt


def parse_events(ics_bytes):
    calendar = Calendar.from_ical(ics_bytes)
    today = datetime.now(timezone.utc).date()
    events = []

    for component in calendar.walk("VEVENT"):
        title = str(component.get("SUMMARY", "")).strip()
        dtstart = component.get("DTSTART")
        if not title or not dtstart:
            continue

        start = to_value(dtstart)
        dtend = component.get("DTEND")
        if dtend:
            end = to_value(dtend)
            # All-day multi-day events store DTEND as the day *after* the
            # last day (iCal's exclusive-end convention — this is what
            # Google Calendar sends for e.g. a Mon-Fri event). This site's
            # `end` field is inclusive (the actual last day), so shift back
            # one day. Timed events (DTEND is a datetime, not a date) don't
            # use this convention and are left as-is.
            if not isinstance(end, datetime) and end != start:
                end -= timedelta(days=1)
        else:
            end = start

        # Only keep events that haven't already finished. Compare by date
        # only, since a datetime and a date can't be compared directly.
        end_date = end.date() if isinstance(end, datetime) else end
        if end_date < today:
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
