# Our Sponsors

**Address:** **https://openms.de/our-sponsors/**  ·  **Linked from:** top menu → About → Our Sponsors; footer → ABOUT

The organisations that fund OpenMS.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| The sponsor logos | Add, change or remove a sponsor | `config.yaml` → `aboutPage` → `sponsors` | [Sponsors](../../update-sponsors.md) |
| Intro, "Sponsors include:", "Email Us" button | The words and the e-mail address | `config.yaml` → `aboutPage` → `sponsorsSection` | [Sponsors](../../update-sponsors.md) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `aboutPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).

## Leave these to the web team

- How the page looks: `layouts/partials/our-sponsors-main.html`, `assets/css/openms-overrides.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
