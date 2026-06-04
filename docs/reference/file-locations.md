# File locations — quick lookup

“I want to change X” → edit Y.

## Content (Markdown)

| What | Where |
|------|--------|
| News article | `content/en/news/<slug>.md` |
| News listing intro | `content/en/news/_index.md` |
| About, governance, legal, etc. | `content/en/<name>.md` |
| Application documentation | `content/en/applications/<name>.md` |
| Key features detail pages | `content/en/keyfeatures/*.md` |

## Configuration

| What | Where |
|------|--------|
| Homepage hero, stats, CTA | `config.yaml` → `params.hero` |
| News banner (top strip) | `config.yaml` → `params.newsBanner` |
| News page labels / filter | `config.yaml` → `params.newsSection` |
| Key features (“What is OpenMS?”) | `config.yaml` → `params.keyfeatures` |
| Homepage webapps carousel | `config.yaml` → `params.webapps` |
| Trusted by section | `config.yaml` → `params.trustedBy` |
| Community calendar events | `data/community_events.yaml` |
| Community calendar page | `content/en/calendar.md`, `layouts/partials/community-calendar-main.html` |
| Navbar & footer | `config.yaml` → `params.navbar`, `params.footer` |
| Site URL, theme, analytics | `config.yaml` (top) |

## Images & static files

| What | Where |
|------|--------|
| Any static asset | `static/` → URL `/...` |
| Logos | `static/images/logos/` |
| Webapp logos | `static/images/webapp/logo/` |
| App screenshots | `static/images/content_images/applications/` |

## Layout & style (web team)

| What | Where |
|------|--------|
| Homepage section order | `layouts/index.html` |
| News list / article layout | `layouts/news/` |
| Homepage partials | `layouts/partials/` (hero, webapps, news-banner, …) |
| Site CSS overrides | `assets/css/*.css` |
| Custom shortcodes | `layouts/shortcodes/` |
| Base theme | `themes/scientific-python-hugo-theme/` (avoid editing) |

## Build & deploy

| What | Where |
|------|--------|
| Local build commands | `Makefile` |
| Hugo version for Netlify | `netlify.toml` |
| Maintainer docs | `docs/` (this folder) |

## Hardcoded content (needs code change today)

| What | Where |
|------|--------|
| University partners marquee | `layouts/partials/university-partners.html` |
| Sponsor logos on About (`{{< sponsors >}}`) | `layouts/shortcodes/sponsors.html` |

Consider moving these to `config.yaml` or `data/` in a future improvement.
