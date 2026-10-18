# Top menu (navbar)

**Address:** on every page  ·  **Linked from:** every page, at the top

The top menu is on every page. Its labels, order and links are all in `config.yaml` → `navbar`.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Announcement bar (the dark strip above the menu) | The message, its link, show or hide it | `config.yaml` → `newsBanner` | [Change the announcement bar](../update-announcement-bar.md) |
| Logo (top left) | The picture and where it links | `config.yaml` → `navbarlogo` | [Add images](../add-images.md) |
| Menus: Projects, Apps, Learn, Community, Services, About | The label of a menu, the lines in its drop-down list, where each line goes | `config.yaml` → `navbar` | [Menu and footer](../edit-menu-or-footer.md) |
| Learn → the six links | The label and the address. These go to other websites, so there is no page here to edit. | `config.yaml` → `navbar` | [Menu and footer](../edit-menu-or-footer.md) |
| Buttons "Sponsor Us" and "Partner with OpenMS" | The label and where it goes | `config.yaml` → `navbar` (the last two items) | [Menu and footer](../edit-menu-or-footer.md) |
| Search box | The grey hint text, turn it on or off | `config.yaml` → `navbarSearch` | Search for the key word, then [edit `config.yaml`](../edit-homepage-text.md#how-to-change-any-block) |
| Social icons (in the mobile menu) | The links and icons. They are the same as in the footer. | `config.yaml` → `footer` → `socialmedia` | [Menu and footer](../edit-menu-or-footer.md) |

Each page in the menu has its own guide: see the [list of pages](README.md).

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `newsBanner`), change only the words after the colon. Steps: [edit `config.yaml`](../edit-homepage-text.md#how-to-change-any-block).

## Leave these to the web team

- How the menu looks and behaves: `layouts/partials/navbar*.html`, `assets/js/navbar.js`, `assets/css/navbar-*.css`.

## Related

- [All pages, one guide each](README.md)
- [Which files are behind each page](../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../README.md)
