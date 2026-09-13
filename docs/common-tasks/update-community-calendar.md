# Update community events

Community events on **/calendar/** come from a single data file—no layout or JavaScript changes needed for routine updates.

## Google Calendar sync

`sync_google_calendar.py`, run daily by `.github/workflows/update_calendar.yml`, can pull events from a public Google Calendar into this file automatically. It only touches entries it previously added (marked `synced: true` in the yaml) — anything you add by hand is left alone on every run.

To turn it on:

1. In Google Calendar, make the calendar public (or use its "Secret address in iCal format") and copy the ICS feed URL — Settings → select the calendar → **Integrate calendar**.
2. Add it as the `GOOGLE_CALENDAR_ICS_URL` repository secret.
3. Optionally set `googleCalendarSubscribeUrl` under `params.calendarSection` in `config.yaml` to show an "Add to Google Calendar" button in the hero — see the comment above that key for the URL format. This is separate from the ICS feed secret and is safe to be public.

Until the secret is set, the workflow runs as a no-op and the page shows no sync badge or button.

## Edit the event list

1. Open **`data/community_events.yaml`** in the repository ([on GitHub](https://github.com/OpenMS/OpenMS-website/blob/main/data/community_events.yaml)).
2. Add a new item under `events:` or edit an existing one.
3. Open a pull request (or commit on your branch) and merge after review.

## Event fields

| Field | Required | Example |
|-------|----------|---------|
| `title` | Yes | `OpenMS Developer Meeting 2026` |
| `start` | Yes | `2026-03-23` (YYYY-MM-DD) |
| `end` | No | `2026-03-27` (multi-day events) |
| `location` | No | `University of Helsinki, Finland` |
| `summary` | No | Short description shown in past event listings |
| `url` | No | Registration or external link |
| `news_url` | No | `/news/devmeeting2026/` — link to a news post on this site |
| `category` | No | `developer-meeting`, `workshop`, or `outreach` (for styling) |
| `synced` | No | Set by the Google Calendar sync script — don't add this by hand |

Example:

```yaml
  - title: My workshop
    start: 2026-06-15
    end: 2026-06-16
    location: Berlin, Germany
    category: workshop
    summary: Hands-on OpenMS training.
    url: https://example.org/register
    news_url: /news/my-workshop/
```

Events with an `end` date (or `start` when `end` is omitted) in the past appear under **Past events** on `/calendar/`, grouped by year with a year filter. Upcoming events appear at the top of the page.

## Preview locally

```bash
make serve
```

Visit [http://localhost:1313/calendar/](http://localhost:1313/calendar/).

## Page copy and layout

- Hero and section text: `config.yaml` → `params.calendarSection`
- Events page: `layouts/partials/community-calendar-main.html`, `assets/css/community-calendar.css`
- Year filter: `assets/js/events-year-filter.js` (same pattern as the news page)
- Google Calendar sync UI (badge, "Add to calendar" links): `assets/css/calendar-gcal-sync.css`, `layouts/partials/gcal-icon.html`, `layouts/partials/relative-time.html`
