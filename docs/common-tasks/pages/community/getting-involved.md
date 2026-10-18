# Getting Involved

**Address:** **https://openms.de/contribute/**  ·  **Linked from:** top menu → Community → Getting Involved; footer → COMMUNITY

How people can help OpenMS. Note: the address is `/contribute/`, not `/getting-involved/`.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Small word above the title, and the intro | The words | `config.yaml` → `contributePage` → `eyebrow`, `subtitle` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Links (Discord, GitHub, Governance, website repository…) | Where they go | `config.yaml` → `contributePage` → `links`, `social` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Community e-mail address | The address | `config.yaml` → `contributePage` → `communityEmail` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| "Ways to contribute" and all other headings and texts | The words | `layouts/partials/contribute-main.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `contributePage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the page looks: `assets/css/overrides/contribute.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
