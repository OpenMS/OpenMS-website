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

Homepage announcement strip. See [Change the announcement bar](../common-tasks/navbar/update-announcement-bar.md).

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

### donatePage

**`/donate/`** — Zeffy embed. See [Configure the donate page (Zeffy)](../common-tasks/donate/connect-zeffy.md).

| Key | Purpose |
|-----|---------|
| `zeffyEmbedUrl` | iframe `src` from Zeffy Share → Embed (preferred) |
| `zeffyFormUrl` | Full Zeffy form URL if not using embed |
| `taxNote` | 501(c)(3) disclaimer text |

### sponsorTiers

Tiered foundation sponsorship copy on **/sponsor-us/** (Platinum, Gold, Silver, Bronze). Edit `levels` under `params.sponsorTiers` in `config.yaml`—benefits list per tier, intro, and footnote.

### homeSponsors

“Supported by” logos under hero (`enabled`, `sponsors` list with `name`, `url`, `logo`, `alt`).

### heroGroup

Two large sections (users / developers) with `heroItems` cards.

### keyfeatures

“What is OpenMS?” four feature boxes + `note` (Markdown allowed).

### webappsSection + webapps

Homepage projects carousel. See [Add an app to the home page](../common-tasks/featured-apps/update-featured-apps.md).

### footer

Tagline, quick link columns, social links, sponsor footer logos. See [Change the footer links](../common-tasks/footer/edit-footer-links.md) and [Change the social media icons](../common-tasks/footer/edit-social-icons.md).

### navbar

Top navigation menu and dropdowns. See [Change the top menu](../common-tasks/navbar/edit-menu-items.md).

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
