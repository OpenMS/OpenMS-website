# Publications

**Address:** **https://openms.de/publications/**  ·  **Linked from:** top menu → About → Publications; footer → ABOUT

The papers about OpenMS. The list is built automatically from a list of PubMed numbers.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| The list of papers | Add or remove a paper | `pmids.txt` (not the page file: it is generated) | [Publications](../../update-publications.md) |
| "Key publications" (the two papers at the top) | Which papers | `layouts/partials/publications-key.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |
| "Follow us on Google Scholar" link | The words and the link | `config.yaml` → `publicationsPage` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |

**Do not edit `content/en/publications.md`.** It is rebuilt automatically and your change would be lost.

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `publicationsPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in the **page file** (`content/en/…`): [edit the page file](../../edit-page-text.md#how-to-do-it).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the page looks: `layouts/partials/publications-main.html`, `assets/css/overrides/publications.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
