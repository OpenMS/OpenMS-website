# Add a news post

News articles appear on **https://openms.de/news/** and in the news listing. Each post is one Markdown file.

## Files to edit

| Action | Location |
|--------|----------|
| New post | `content/en/news/<slug>.md` |
| Listing page title (optional) | `content/en/news/_index.md` |
| Section labels (filter, “Read more”, etc.) | `config.yaml` → `newsSection` |
| Homepage announcement bar (optional) | `config.yaml` → `newsBanner` |

## Step-by-step

### 1. Create the file

Filename rules:

- Lowercase letters, numbers, hyphens only: `helsinki-workshop-2026.md`
- The URL will be `/news/helsinki-workshop-2026/` (from the filename without `.md`)

You can copy an existing post, e.g. `content/en/news/gsoc2025.md`.

### 2. Add front matter

At the top of the file, between `---` lines:

```yaml
---
title: GSoC 2025 – Two Projects Accepted!
authors: ["Matteo Pilz", "Timo Sachsenberg"]
date: 2025-05-20
summary: We're thrilled to announce that two OpenMS projects have been accepted for Google Summer of Code 2025!
type: news
---
```

| Field | Required | Notes |
|-------|----------|--------|
| `title` | Yes | Headline on the news page and article |
| `date` | Yes | `YYYY-MM-DD` — used for sorting and year filter |
| `summary` | Yes | Short text on the news index card |
| `authors` | Recommended | List of names in quotes |
| `type` | Yes | Use `news` for news posts |
| `draft` | Optional | `draft: true` hides the post until you remove it or publish with drafts enabled locally |

### 3. Write the body

Below the closing `---`, use normal **Markdown**:

```markdown
We're thrilled to announce...

More info: [GSoC program page](https://summerofcode.withgoogle.com/...)
```

- Headings: `## Section title`
- Line breaks in HTML: `<br>` (some older posts use this)
- Links: `[text](https://...)`

### 4. Preview

- **Local**: `make serve` → open http://localhost:1313/news/your-slug/
- **GitHub PR**: use the Netlify deploy preview

### 5. Open a pull request

See [Pull requests](../workflow/pull-requests.md).

Checklist:

- [ ] `date` and `summary` are set
- [ ] `type: news` is present
- [ ] Article looks correct on `/news` and on the article page
- [ ] Optional: update `newsBanner` in `config.yaml` to promote the post on the homepage

## Optional: promote on the homepage banner

Edit `config.yaml`:

```yaml
newsBanner:
  enabled: true
  label: News
  text: Workshop at University of Helsinki on April 30th 2026.
```

See [Update the news banner](update-news-banner.md).

## Optional: use the news archetype (local Hugo)

If you have Hugo installed locally:

```bash
hugo new news/my-slug.md
```

This uses `archetypes/news.md` in the repo for default front matter.

## What not to change

- `layouts/news/` — layout for news pages; ask web team for structural changes
- Do not add two files with the same slug (case may differ on macOS vs Linux — use lowercase consistently)

## Duplicate filenames on case-insensitive systems

Avoid pairs like `GSoC2025.md` and `gsoc2025.md` — they can conflict on some systems. Prefer one lowercase slug.
