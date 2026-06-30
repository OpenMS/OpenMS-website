# Update community events

Community events on **/calendar/** come from a single data file—no layout or JavaScript changes needed for routine updates.

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
