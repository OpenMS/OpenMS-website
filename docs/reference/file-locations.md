# File locations — quick lookup

“I want to change X” → edit Y.

## Everything in the navbar and the footer: where is each page?

Every link in the **top menu** and the **footer** is listed here, with the files behind it. Paths are shortened:

- **Page file** = `content/en/…` (the page's own file and title; also its words when the page says "page file" under *Words*).
- **Design** = `layouts/partials/…` (the template that arranges the page). Ask the web team before changing these.
- **Words** = where the visible text is written: the page file, a key in `config.yaml`, or the layout.
- **Styling** = `assets/css/…` (colours, spacing). Page adjustments are in `assets/css/overrides/`.

The routing rule: `layouts/_default/single.html` looks at the page's file name and picks its `…-main.html` design.

### The navbar (top menu)

The menu itself (labels, order, links) is **`config.yaml` → `navbar`**. Its design is `layouts/partials/navbar*.html`, its behaviour is `assets/js/navbar.js`, and its styling is `assets/css/navbar-*.css` and `overrides/navbar-footer.css`. The logo is `config.yaml` → `navbarlogo`. The search box is `config.yaml` → `navbarSearch`, `layouts/partials/navbar-search.html` and `assets/js/navbar-search.js`.

| Menu item | Address | Page file | Design | Words | Styling |
|-----------|---------|-----------|--------|-------|---------|
| **Projects** → OpenMS-lib | `/openms-lib/` | `content/en/openms-lib.md` | `openms-lib-main.html` and the `openms-lib-*` blocks in `layouts/shortcodes/`. The big title: `openms-lib-hero.html` | `config.yaml` → `openmsLibHighlights`, `openmsLibTopp`, `openmsLibGettingStarted`, `openmsLibDevelopers` | `overrides/product-pages.css` |
| Projects → pyOpenMS | `/pyopenms/` | `content/en/pyopenms.md` | `openms-lib-main.html` and the `pyopenms-*` blocks in `layouts/shortcodes/`. The big title: `pyopenms-hero.html` | `config.yaml` → `pyopenmsPage` | `overrides/product-pages.css` |
| Projects → pyOpenMS Viz | `/pyopenms-viz/` | `content/en/pyopenms-viz.md` | `openms-lib-main.html` and the `pyopenms-viz-*` blocks in `layouts/shortcodes/`. The big title: `pyopenms-viz-hero.html` | `config.yaml` → `pyopenmsVizPage` | `overrides/product-pages.css` |
| Projects → OpenMS Web Apps | `/webapps/` | `content/en/webapps.md` | `openms-lib-main.html` and the `webapps-*` blocks in `layouts/shortcodes/`. The big title: `webapps-hero.html` | `config.yaml` → `webappsPage` | `overrides/product-pages.css` |
| **Apps** → Featured Apps | `/featured-apps/` | `content/en/featured-apps.md` | `openms-lib-main.html`; the list comes from the `webapps-featured-catalog` block, which uses `webapps.html` | the big title: the page file; the list: `config.yaml` → `webapps` and `webappsSection` | `overrides/featured-apps.css` |
| Apps → Affiliated Apps | `/affiliated-apps/` | `content/en/affiliated-apps.md` | `openms-lib-main.html`; the list comes from the `webapps-affiliate-catalog` block, which uses `webapps-affiliates.html` | the big title: the page file; the list: `config.yaml` → `affiliateProjects` and `affiliateSection` | `overrides/affiliated-apps.css` |
| Apps → Archived Apps | `/archived-apps/` | `content/en/archived-apps.md` | `openms-lib-main.html`; the blocks `webapps-archived-notice`, `webapps-archived-catalog` and `webapps-archived-revival` use the `webapps-archived*.html` designs | the big title and the "Available references" heading: the page file; the list: `config.yaml` → `archivedProjects` and `archivedSection` | `overrides/archived-apps.css` |
| **Learn** → six links (Liquid Chromatography, Mass Spectrometry, Identification and Quantification, Background, Glossary, Dave Tabb's Tutorials) | external websites | *no page on this site* | – | `config.yaml` → `navbar` (only the label and address) | – |
| **Community** → Calendar | `/calendar/` | `content/en/calendar.md` | `community-calendar-main.html` | `data/community_events.yaml` (events), `config.yaml` → `calendarSection` | `overrides/calendar.css` |
| Community → News | `/news/` | `content/en/news/_index.md` (the list) and one file per article in `content/en/news/` | `layouts/news/section.html` and `news-single-main.html` | each article's file; `config.yaml` → `newsSection` | `overrides/news.css` |
| Community → **Getting Involved** | `/contribute/` | `content/en/contribute.md` | `contribute-main.html` | `config.yaml` → `contributePage` (intro and links); the rest is written in the design file | `overrides/contribute.css` |
| Community → OpenMS Fellowship | `/fellowship/` | `content/en/fellowship.md` | `fellowship-main.html` (form: `fellowship-form-embed.html`) | `config.yaml` → `fellowshipPage` | `overrides/fellowship.css` |
| Community → Annual Developer Retreat | `/developer-retreat/` | `content/en/developer-retreat.md` | `developer-retreat-main.html` | `config.yaml` → `developerRetreatPage` | `overrides/developer-retreat.css` |
| Community → Code of Conduct | `/code-of-conduct/` | `content/en/code-of-conduct.md` | `code-of-conduct-main.html` | the page file | `overrides/code-of-conduct.css` and `coc-charter.css` |
| **Services** → Scientific and Technical Support | `/scientific-and-technical-support/` | `content/en/scientific-and-technical-support.md` | `scientific-and-technical-support-main.html` | `config.yaml` → `servicesSupportPage` (intro); the rest in the design file | `overrides/scientific-and-technical-support.css` |
| **About** → Governance | `/governance/` | `content/en/governance.md` | `governance-main.html` | `config.yaml` → `governancePage` (intro only); almost all text is written in the design file | `overrides/governance.css` |
| About → Our Sponsors | `/our-sponsors/` | `content/en/our-sponsors.md` | `our-sponsors-main.html` | `config.yaml` → `aboutPage` (`sponsorsSection` and `sponsors`) | `openms-overrides.css` |
| About → Our Sponsorship Program | `/sponsor-us/` | `content/en/sponsor-us.md` | `sponsor-us-main.html` and `sponsor-tiers.html` | `config.yaml` → `sponsorUsPage`, `sponsorTiers`, `sponsorshipProgram` | `overrides/sponsor-us.css` |
| About → Research Partnerships | `/research-partnerships/` | `content/en/research-partnerships.md` | `research-partnerships-main.html` | `config.yaml` → `researchPartnershipsPage` (and `universityPartners` for the logos) | `overrides/research-partnerships.css` |
| About → Publications | `/publications/` | `content/en/publications.md` (**generated, don't edit**) | `publications-main.html` | the list: `pmids.txt`; the two "Key publications": `publications-key.html`; `config.yaml` → `publicationsPage` | `overrides/publications.css` |
| About → **Leadership** | `/contributors/` | `content/en/contributors.md` | `contributors-main.html`, `contributors-leadership.html`, `contributors-exec.html` | names and bios are written in those design files; photos in `static/images/leadership_photos/` | `overrides/contributors.css` |
| About → Contact | `/contact/` | `content/en/contact.md` | `contact-main.html`, `contact-email-aside.html`, `contact-alternatives.html` | `config.yaml` → `contactPage` (intro); the rest in the design files | `overrides/contact.css` |
| **Sponsor Us** (button) | `/sponsor-us/` | see *Our Sponsorship Program* | | | |
| **Partner with OpenMS** (button) | `/research-partnerships/` | see *Research Partnerships* | | | |

### The footer

The footer's columns, links and social icons are **`config.yaml` → `footer`** (see [Menu and footer](../common-tasks/edit-menu-or-footer.md)). Its design is `layouts/partials/footer.html`, and its styling is `overrides/navbar-footer.css`. The copyright line is written in `footer.html`; the year updates itself when the site is rebuilt.

| Column | Link | Address | Page file | Design | Words | Styling |
|--------|------|---------|-----------|--------|-------|---------|
| **Support** | Donate | `/donate/` | `content/en/donate.md` | `donate-main.html` | `config.yaml` → `donatePage` | `overrides/donate.css` |
| Support | Sponsor Us | `/sponsor-us/` | `content/en/sponsor-us.md` | `sponsor-us-main.html` | see the navbar table | `overrides/sponsor-us.css` |
| **Community** | Calendar, News, **Getting Involved**, OpenMS Fellowship, Annual Developer Retreat, Code of Conduct | see the navbar table | | | | |
| Community | Executive Committee Charter | `/exec_committee/` | `content/en/exec_committee.md` | `exec-committee-main.html` | the page file | `exec-charter.css` |
| Community | Code of Conduct Enforcement Procedures | `/report-handling-manual/` | `content/en/report-handling-manual.md` | `report-handling-main.html` | the page file | `rhm-charter.css` |
| **About** | Governance, Our Sponsors, Our Sponsorship Program, Research Partnerships, Publications, Leadership, Contact | see the navbar table | | | | |
| **Legal** | Privacy | `/privacy/` | `content/en/privacy.md` | `privacy-main.html` (the page is built from the `###` headings of the page file) | the page file; the short summaries are in the design file | `overrides/privacy.css` |
| Legal | Press kit | `/press-kit/` | `content/en/press-kit.md` (title only) | `press-kit-main.html` | all text is written in the design file; downloads in `static/press-kit/` | `overrides/press-kit.css` |
| Legal | Impressum | `/impressum/` | `content/en/impressum.md` | `impressum-main.html` | the page file | `impressum.css` |

**Example: where is the "Getting Involved" page?**

- Its address is `/contribute/` (the menu label and the address differ).
- The page file is `content/en/contribute.md` (only the title and a few settings).
- The design is `layouts/partials/contribute-main.html`.
- The intro text and links are in `config.yaml` under `contributePage`.
- The look is in `assets/css/overrides/contribute.css`.

Pages **not** in the menu or footer: `/404` (the error page), `/core_developers/` (linked from Governance), `/help/` (linked from Contact), `/help-request/` (an embedded Google form, not linked from the site) and `/getting-started/develop-your-own-openms-tools/` (not linked from the site). `content/en/jobs.md` is a draft and is not published. `content/en/keyfeatures/` holds blocks for the home page, not pages of their own. The home page is `layouts/index.html` with its text in `config.yaml` (see [Edit the home page](../common-tasks/edit-homepage-text.md)).

## Content (Markdown)

| What | Where |
|------|--------|
| News article | `content/en/news/<slug>.md` |
| News listing intro | `content/en/news/_index.md` |
| About, governance, legal, etc. | `content/en/<name>.md` |
| Key features detail pages | `content/en/keyfeatures/*.md` |

## Configuration

| What | Where |
|------|--------|
| Homepage hero | `config.yaml` → `params.hero` |
| Homepage big numbers | `config.yaml` → `params.homeMetrics` |
| News banner (top strip) | `config.yaml` → `params.newsBanner` |
| News page labels / filter | `config.yaml` → `params.newsSection` |
| Key features (“What is OpenMS?”) | `config.yaml` → `params.keyfeatures` |
| Featured Apps (home page and `/featured-apps/`) | `config.yaml` → `params.webapps` |
| Affiliated Apps | `config.yaml` → `params.affiliateProjects` |
| “Adopted by labs and institutions” logos | `config.yaml` → `params.universityPartners` |
| Sponsors (`/our-sponsors/`) | `config.yaml` → `params.aboutPage.sponsors` |
| Developer Retreat page | `config.yaml` → `params.developerRetreatPage` |
| Publications list | `pmids.txt` |
| Community calendar events | `data/community_events.yaml` |
| Community calendar page | `content/en/calendar.md`, `layouts/partials/community-calendar-main.html` |
| Donate page (Zeffy) | `content/en/donate.md`, `layouts/partials/donate-main.html`, `config.yaml` → `params.donatePage` |
| Navbar & footer | `config.yaml` → `params.navbar`, `params.footer` |
| Site URL, theme, analytics | `config.yaml` (top) |

## Images & static files

| What | Where |
|------|--------|
| Any static asset | `static/` → URL `/...` |
| Logos | `static/images/logos/` |
| Webapp logos | `static/images/webapp/logo/` |
| Affiliated App logos | `static/images/webapp/logo/affiliate/` |
| News pictures | `static/images/news_images/` |

## Layout & style (web team)

| What | Where |
|------|--------|
| Homepage section order | `layouts/index.html` |
| News list / article layout | `layouts/news/` |
| Homepage partials | `layouts/partials/` (hero, webapps, news-banner, …) |
| Site CSS (base) | `assets/css/*.css` |
| Page-specific CSS (loads last) | `assets/css/overrides/<page>.css` |
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
| Sponsor logos on About (`{{< sponsors >}}`) | `layouts/shortcodes/sponsors.html` |
| The Contact block at the bottom of the home page | `layouts/partials/contact-area.html` |
| Most governance / press-kit page wording | `layouts/partials/governance-main.html`, `press-kit-main.html` |

For a plain-language tour, see the [map of the repository](../getting-started/repo-map.md).
