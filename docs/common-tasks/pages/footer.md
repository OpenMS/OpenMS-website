# Footer

**Address:** on every page  ·  **Linked from:** every page, at the bottom

The footer is on every page. Its logo, short text, link columns and social icons are all in `config.yaml` → `footer`.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Logo and short text ("The open-source framework for mass spectrometry.") | The picture, its description, the text | `config.yaml` → `footer` → `logo`, `tagline` | [Menu and footer](../edit-menu-or-footer.md) |
| Social icons (Discord, LinkedIn, GitHub, Google Scholar) | Add, change or remove an icon and its link | `config.yaml` → `footer` → `socialmedia` | [Menu and footer](../edit-menu-or-footer.md) |
| Columns SUPPORT, COMMUNITY, ABOUT, LEGAL | A column heading, the links in it, where each link goes | `config.yaml` → `footer` → `quicklinks` → `column1` to `column4` | [Menu and footer](../edit-menu-or-footer.md) |
| "Deployed by Netlify" badge | The picture | `config.yaml` → `footer` → `deployedBy` | Ask the web team ([who?](../../workflow/who-to-ask.md)) |
| Copyright line | The words. The year changes by itself. | `layouts/partials/footer.html` | Ask the web team ([who?](../../workflow/who-to-ask.md)) |

Each page in the footer has its own guide: see the [list of pages](README.md).

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `footer`), change only the words after the colon. Steps: [edit `config.yaml`](../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the footer looks: `layouts/partials/footer.html`, `assets/css/overrides/navbar-footer.css`.

## Related

- [All pages, one guide each](README.md)
- [Which files are behind each page](../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../README.md)
