# Content front matter reference

Front matter is the YAML block between `---` at the top of a Markdown file. Hugo uses it for titles, dates, and layout options.

## News posts (`content/en/news/*.md`)

```yaml
---
title: Article headline
authors: ["Name One", "Name Two"]
date: 2025-05-20
summary: One or two sentences for the news listing card.
type: news
draft: false
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Article title |
| `date` | Yes | `YYYY-MM-DD`; sorting and year filter on `/news` |
| `summary` | Yes | Teaser on news index |
| `authors` | No | YAML list of strings |
| `type` | Yes | Use `news` |
| `draft` | No | `true` = hidden in production build |

## Standard pages (`content/en/*.md`)

```yaml
---
title: Page title
sidebar: false
---
```

| Field | Description |
|-------|-------------|
| `title` | Page title |
| `sidebar` | `false` hides sidebar on many templates |
| `subtitle` | Optional; used on some section pages |

## News section index (`content/en/news/_index.md`)

```yaml
---
title: News
subtitle: Announcements, releases, workshops...
---
```

Listing UI labels (filter, “Read more”) come from **`config.yaml`** → `newsSection`, not from this file.

## Application pages (`content/en/applications/*.md`)

```yaml
---
title: NuXL
subtitle: Protein-RNA and DNA cross-linking
sidebar: false
---
```

## Section index (`content/en/applications/_index.md`)

Controls the applications listing page; same general fields as other section `_index.md` files.

## Dates

- Always use ISO format: `2026-04-30`
- News without a valid `date` may not appear correctly in the year filter

## Body content

After the closing `---`, the rest of the file is **Markdown** (and optional shortcodes). See [Shortcodes](shortcodes.md).
