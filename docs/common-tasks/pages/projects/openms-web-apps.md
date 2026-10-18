# OpenMS Web Apps

**Address:** **https://openms.de/webapps/**  ·  **Linked from:** top menu → Projects → OpenMS Web Apps

Most words on this page are in `config.yaml`, in the blocks listed below. The big title at the top is part of the design.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Big title at the top | The words and buttons | `layouts/partials/webapps-hero.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |
| Highlights | Titles and texts | `config.yaml` → `webappsPage` → `highlights` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Using the template | Title, text, the cards and their links | `config.yaml` → `webappsPage` → `usingTemplate` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Examples | The example apps shown | `config.yaml` → `webappsPage` → `examples` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| For developers, and the citation | Title, text, the boxes, the paper to cite | `config.yaml` → `webappsPage` → `developers` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `webappsPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- The order of the blocks: `content/en/webapps.md` (lines starting with `{{<`).
- How the page looks: `assets/css/overrides/product-pages.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
