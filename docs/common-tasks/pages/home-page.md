# Home page

**Address:** **https://openms.de/**  ·  **Linked from:** the OpenMS logo in the top menu

The home page is a stack of blocks, one under the other. Almost all of its words are in `config.yaml`.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Top banner ("Open science. Clear results for mass spectrometry.") | Headline, short text, the two buttons and where they go, the small line under the buttons | `config.yaml` → `hero` | [Edit the text on the home page](../edit-homepage-text.md) |
| "Adopted by labs and institutions worldwide" (moving logos) | Add, change or remove a logo | `config.yaml` → `universityPartners` | [Adopted-by logos](../update-adopted-by-logos.md) |
| Featured Apps | Add, change or remove an app, the heading text | `config.yaml` → `webapps`, `webappsSection` | [Featured Apps](../update-featured-apps.md) |
| The three big numbers | The numbers, labels and short texts | `config.yaml` → `homeMetrics` | [Home page numbers](../update-homepage-numbers.md) |
| "What is OpenMS?" (four boxes) | Title, text, the four boxes | `config.yaml` → `keyfeatures` | [Edit the text on the home page](../edit-homepage-text.md) |
| Ecosystem | Title, text, the cards and their links | `config.yaml` → `ecosystemSection` | [Edit the text on the home page](../edit-homepage-text.md) |
| "Everyone is welcome" | Title, text, photo, button | `config.yaml` → `communitySection` | [Edit the text on the home page](../edit-homepage-text.md) |
| Latest news | The heading and how many articles show. The articles themselves come from the News page. | `config.yaml` → `newsSection` (the lines starting with `home`) | [Add a news article](../add-news-post.md) |
| Upcoming events | The heading and how many events show. The events come from the Calendar. | `config.yaml` → `eventsSection` | [Add or change an event](../update-community-calendar.md) |
| "Take control of your mass spec workflows" (contact) | The words | `layouts/partials/contact-area.html` | Ask the web team ([who?](../../workflow/who-to-ask.md)) |

The announcement bar, the top menu and the footer are on every page: see [Top menu](navbar.md) and [Footer](footer.md).

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `hero`), change only the words after the colon. Steps: [edit `config.yaml`](../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../workflow/who-to-ask.md)).

## Leave these to the web team

- The order of the blocks and how they look (`layouts/index.html`, `assets/css/`).

## Related

- [All pages, one guide each](README.md)
- [Which files are behind each page](../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../README.md)
