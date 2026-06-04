# config.yaml guide

Site-wide settings and most homepage content live in **`config.yaml`** at the repository root.

**Path to editable content:** `languages` → `en` → `params`

> Technical site settings (`baseURL`, `theme`, `markup`) are at the top of the file. Change those only with web-team approval.

## Top-level (usually leave unchanged)

| Key | Purpose |
|-----|---------|
| `baseURL` | Production URL (`https://openms.de/`) |
| `theme` | `scientific-python-hugo-theme` |
| `disableKinds` | Disables taxonomy pages |
| `markup.goldmark.renderer.unsafe` | Allows HTML in Markdown |

## params — homepage & global UI

### newsBanner

Homepage announcement strip. See [Update the news banner](../common-tasks/update-news-banner.md).

### newsSection

Labels for `/news` listing:

| Key | Default purpose |
|-----|-----------------|
| `eyebrow` | Small label above title |
| `title` / `subtitle` | Page heading (can override `_index.md`) |
| `yearFilterLabel` | “Filter by year” |
| `allYearsLabel` | “All” button |
| `readMoreLabel` | Card link text |
| `backToNewsLabel` | Single article back link |
| `defaultYear` | Pre-select a year (string, e.g. `"2026"`) |
| `defaultToLatestYear` | If true and no `defaultYear`, select newest year |
| `emptyMessage` | Shown when filter has no posts |

### trustedBySection + trustedBy

“Trusted by” block on homepage. List of organizations (`name`, `abbr`, optional `logo`, optional `url`).

### navbarlogo

Site logo in header (`image`, `link`, `altText`).

### hero

Main homepage hero: titles, description, CTA button, `stats` array.

### homeSponsors

“Supported by” logos under hero (`enabled`, `sponsors` list with `name`, `url`, `logo`, `alt`).

### heroGroup

Two large sections (users / developers) with `heroItems` cards.

### keyfeatures

“What is OpenMS?” four feature boxes + `note` (Markdown allowed).

### webappsSection + webapps

Homepage projects carousel. See [Add a webapp](../common-tasks/add-webapp-to-homepage.md).

### footer

Tagline, quick link columns, social links, sponsor footer logos.

### navbar

Top navigation menu and dropdowns. See [Edit footer or navbar](../common-tasks/edit-footer-or-navbar.md).

## Analytics (do not remove without discussion)

```yaml
plausible:
  dataDomain: openms.de
matomo:
  url: "https://openms.matomo.cloud/"
  siteId: "1"
```

## Fonts

```yaml
font:        # headings — Montserrat
bodyFont:    # body — Raleway
monoFont:    # monospace — JetBrains Mono
```

Changing fonts affects the whole site; coordinate with web team.

## YAML rules

1. **Spaces only** for indentation (2 spaces per level).
2. **Quotes** for strings containing `:`, `#`, or leading special characters.
3. **Multi-line strings**: `>-` folds lines; `|` preserves line breaks.
4. **Lists**: each item starts with `-` aligned under the parent key.

## Validate before merging

- Open PR and confirm Netlify build succeeds.
- Optionally run locally: `make serve` and scan homepage + `/news`.

## Splitting config in the future

`config.yaml` is large. The web team may later move lists (partners, webapps) to `data/*.yaml`. This guide will be updated when that happens.
