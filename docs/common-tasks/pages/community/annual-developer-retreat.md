# Annual Developer Retreat

**Address:** **https://openms.de/developer-retreat/**  ·  **Linked from:** top menu → Community → Annual Developer Retreat; footer → COMMUNITY

The next retreat and a photo of the last one. Update it once a year.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Title and text at the top | The words | `config.yaml` → `developerRetreatPage` → `headline`, `about` | [Update the Developer Retreat page](../../update-developer-retreat.md) |
| Upcoming retreat (date, place, poster) | The facts and the poster | `config.yaml` → `developerRetreatPage` → `upcoming` | [Update the Developer Retreat page](../../update-developer-retreat.md) |
| "Register here" button | Open or closed, the link, the hint | `config.yaml` → `developerRetreatPage` → `registration` | [Update the Developer Retreat page](../../update-developer-retreat.md) |
| "About the retreat" (three boxes) | Titles and texts | `config.yaml` → `developerRetreatPage` → `highlights` | [Update the Developer Retreat page](../../update-developer-retreat.md) |
| Photo of the last retreat | The photo and its caption | `config.yaml` → `developerRetreatPage` → `pastPhoto` | [Update the Developer Retreat page](../../update-developer-retreat.md) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `developerRetreatPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).

## Leave these to the web team

- How the page looks: `assets/css/overrides/developer-retreat.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
