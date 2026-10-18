# Contact

**Address:** **https://openms.de/contact/**  ·  **Linked from:** top menu → About → Contact; footer → ABOUT

Ways to reach the OpenMS team.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Small word above the title, and the intro | The words | `config.yaml` → `contactPage` → `eyebrow`, `subtitle` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| "Ways to reach us", e-mail box, Discord & GitHub, Consulting, Sponsorship, Research Partnerships | The words and links | `layouts/partials/contact-main.html`, `contact-email-aside.html`, `contact-alternatives.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `contactPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the page looks: `assets/css/overrides/contact.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
