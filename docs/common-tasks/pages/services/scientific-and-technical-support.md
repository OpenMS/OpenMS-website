# Scientific and Technical Support

**Address:** **https://openms.de/scientific-and-technical-support/**  ·  **Linked from:** top menu → Services

Paid support from the OpenMS team, with a request form.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Small word above the title, and the intro | The words | `config.yaml` → `servicesSupportPage` → `eyebrow`, `subtitle` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Form heading ("Get in touch with us for a quote.") | The words | `config.yaml` → `servicesSupportPage` → `formTitle` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Big title and all other texts | The words | `layouts/partials/scientific-and-technical-support-main.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `servicesSupportPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the page looks: `assets/css/overrides/scientific-and-technical-support.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
