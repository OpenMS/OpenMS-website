# Research Partnerships

**Address:** **https://openms.de/research-partnerships/**  ·  **Linked from:** top menu → About → Research Partnerships; the "Partner with OpenMS" button; footer → ABOUT

How research groups can work with OpenMS.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Small word above the title, and the intro | The words | `config.yaml` → `researchPartnershipsPage` → `eyebrow`, `subtitle` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Partner logos ("Adopted by labs and institutions worldwide") | Add, change or remove a logo. The same logos show on the home page. | `config.yaml` → `universityPartners` | [Adopted-by logos](../../update-adopted-by-logos.md) |
| "Partnerships include" and all other texts | The words | `layouts/partials/research-partnerships-main.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `researchPartnershipsPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the page looks: `assets/css/overrides/research-partnerships.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
