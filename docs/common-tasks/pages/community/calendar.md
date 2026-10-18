# Calendar

**Address:** **https://openms.de/calendar/**  ·  **Linked from:** top menu → Community → Calendar; footer → COMMUNITY

Upcoming and past events.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| The events | Add, change or remove an event | `data/community_events.yaml`, or the shared Google Calendar | [Add or change an event](../../update-community-calendar.md) |
| Title, short text, headings "Upcoming events" and "Past events" | The words | `config.yaml` → `calendarSection` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Developer Retreat link | The words and the link | `config.yaml` → `calendarSection` → `developerRetreat` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `calendarSection`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).

## Leave these to the web team

- How the page looks: `layouts/partials/community-calendar-main.html`, `assets/css/overrides/calendar.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
