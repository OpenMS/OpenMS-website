# News

**Address:** **https://openms.de/news/**  ·  **Linked from:** top menu → Community → News; footer → COMMUNITY

Announcements, releases and workshops. Each article is one file.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| The articles | Add a new article, or change one | one file per article in `content/en/news/` | [Add a news article](../../add-news-post.md) |
| Title, short text, "Filter news", "Read article" | The words | `config.yaml` → `newsSection` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Show an article in the announcement bar | The message and link | `config.yaml` → `newsBanner` | [Change the announcement bar](../../update-announcement-bar.md) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `newsSection`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).

## Leave these to the web team

- How the list and the articles look: `layouts/news/section.html`, `layouts/partials/news-single-main.html`, `assets/css/overrides/news.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
