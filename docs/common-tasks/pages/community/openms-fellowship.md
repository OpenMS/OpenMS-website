# OpenMS Fellowship

**Address:** **https://openms.de/fellowship/**  ·  **Linked from:** top menu → Community → OpenMS Fellowship; footer → COMMUNITY

The fellowship programme and its application form.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Title, text and the three small labels ("Fully remote & unpaid"…) | The words and icons | `config.yaml` → `fellowshipPage` → `headline`, `blurb`, `chips` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| "Projects you can contribute to" | The heading, the text, add or remove a project | `config.yaml` → `fellowshipPage` → `projectsTitle`, `projectsLead`, `projects` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Application form | Which Tally form is shown | `config.yaml` → `fellowshipPage` → `tallyFormId` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `fellowshipPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).

## Leave these to the web team

- How the page looks: `layouts/partials/fellowship-main.html`, `assets/css/overrides/fellowship.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
