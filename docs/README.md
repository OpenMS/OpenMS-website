# OpenMS website — maintainer documentation

This guide is for **non–front-end contributors** who update [openms.de](https://openms.de) content: news, text pages, homepage copy, and configuration. You do not need to know React, Vue, or JavaScript for most tasks.

> **New here, and not a developer?** Start with **[How to make a change](getting-started/edit-via-github.md)**. It explains, with pictures, how to edit the website using only your web browser. Then find the page you want to change in the list below. Every guide shows **where** on the site and **in which file** the change happens.

## How the site works (30 seconds)

- The site is built with **[Hugo](https://gohugo.io/)** — a static site generator.
- **Pages** live as Markdown files under `content/en/`.
- **Homepage sections** (hero, banner, webapps list, footer links, etc.) live mainly in **`config.yaml`** under `params`.
- **Layout and styling** live in `layouts/` and `assets/css/` — only change these if you are doing design or structure work (ask the web team first).
- Changes are merged on GitHub; **Netlify** builds and deploys the live site.

## What can I change, page by page?

Find the page you want to change, then pick the guide.

> **Every page has its own guide** listing each part of the page, what you can change there and in which file: see [Change a page: one guide per page](common-tasks/pages/README.md). It covers the home page, the top menu, the footer and every page they link to.

### Home page ([openms.de](https://openms.de/))

- The top banner (headline, short text, buttons), "What is OpenMS?" (the four boxes), "Everyone is welcome", ecosystem, news and events: [Edit the text on the home page](common-tasks/edit-homepage-text.md)
- The moving logos "Adopted by labs and institutions worldwide": [Adopted-by logos](common-tasks/update-adopted-by-logos.md)
- The three big numbers (years, citations, contributors): [Home page numbers](common-tasks/update-homepage-numbers.md)
- The "Featured Apps" block: it shows the same list as the Featured Apps page, see [Featured Apps](common-tasks/update-featured-apps.md)

### On every page

- The announcement bar at the very top: [Change the announcement bar](common-tasks/update-announcement-bar.md)
- The top menu (Projects, Apps, Learn, Community…): [Menu and footer](common-tasks/edit-menu-or-footer.md#the-top-menu-navbar)
- The footer links and social media icons: [Menu and footer](common-tasks/edit-menu-or-footer.md#the-footer)

### News ([/news/](https://openms.de/news/))

- Add a news article: [Add a news article](common-tasks/add-news-post.md)
- Show an article in the announcement bar: [Change the announcement bar](common-tasks/update-announcement-bar.md)

### Community calendar ([/calendar/](https://openms.de/calendar/))

- Add or change an event: [Add or change an event](common-tasks/update-community-calendar.md)

### Annual Developer Retreat ([/developer-retreat/](https://openms.de/developer-retreat/))

- The next retreat, last year's retreat, photos and the "Register here" link (once a year): [Update the Developer Retreat page](common-tasks/update-developer-retreat.md)

### Featured Apps ([/featured-apps/](https://openms.de/featured-apps/))

- Add, change or remove an app, or the heading text (this also changes the home page block): [Featured Apps](common-tasks/update-featured-apps.md)

### Affiliated Apps ([/affiliated-apps/](https://openms.de/affiliated-apps/))

- Add, change or remove a project, or the heading and introduction: [Affiliated Apps](common-tasks/update-affiliated-apps.md)

### Publications ([/publications/](https://openms.de/publications/))

- Add or remove a paper: [Publications](common-tasks/update-publications.md)

### Our Sponsors ([/our-sponsors/](https://openms.de/our-sponsors/))

- Add, change or remove a sponsor logo, or the text on the page: [Sponsors](common-tasks/update-sponsors.md)

### Donate ([/donate/](https://openms.de/donate/))

- Connect the donation form to Zeffy: [Donate page (Zeffy)](common-tasks/configure-donate-zeffy.md)

### Any other page (Code of Conduct, Impressum, Governance, Contact…)

- Change the words: [Change the text of a page](common-tasks/edit-page-text.md)
- Not sure which files are behind a page? See [Everything in the navbar and the footer](reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)

### Pictures, on any page

- Add or replace a picture or logo: [Add images](common-tasks/add-images.md)

## Working on the site

| Task | Guide |
|------|--------|
| **Start here:** edit without installing anything | [How to make a change](getting-started/edit-via-github.md) |
| **Find out where things are** (pages, styling, pictures) in the website's files | [Map of the repository](getting-started/repo-map.md) |
| Preview the site on my computer | [Preview locally](getting-started/preview-locally.md) |
| Open a pull request | [Pull requests](workflow/pull-requests.md) |
| Understand what happens when we merge | [Deployment](workflow/deployment.md) |
| Find who can approve or help | [Who to ask](workflow/who-to-ask.md) |

## What you can change safely

| Level | Folders / files | Typical edits |
|-------|-----------------|---------------|
| **Safe** | `content/en/**/*.md` | News, about text, application guides |
| **Config** | `config.yaml` (`languages.en.params`) | Hero, banner, webapps, footer, trusted-by list |
| **Ask first** | `layouts/`, `assets/css/`, `static/js/` | Layout, colors, partner marquee HTML |
| **Do not edit** | `themes/scientific-python-hugo-theme/` | Upstream theme (use overrides in `layouts/` instead) |

## Documentation map

```
docs/
├── README.md                 ← you are here
├── getting-started/
│   ├── edit-via-github.md
│   ├── repo-map.md
│   └── preview-locally.md
├── common-tasks/
│   ├── pages/                ← one guide per page (home, menu, footer, every page)
│   ├── add-news-post.md
│   ├── update-community-calendar.md
│   ├── update-adopted-by-logos.md
│   ├── update-homepage-numbers.md
│   ├── update-announcement-bar.md
│   ├── edit-homepage-text.md
│   ├── update-developer-retreat.md
│   ├── update-publications.md
│   ├── update-featured-apps.md
│   ├── update-affiliated-apps.md
│   ├── add-app-to-homepage.md
│   ├── edit-menu-or-footer.md
│   ├── update-sponsors.md
│   ├── edit-page-text.md
│   └── add-images.md
├── reference/
│   ├── content-front-matter.md
│   ├── config-yaml-guide.md
│   ├── shortcodes.md
│   └── file-locations.md
├── workflow/
│   ├── pull-requests.md
│   ├── deployment.md
│   └── who-to-ask.md
└── troubleshooting/
    └── common-errors.md
```

## Quick start (no local install)

1. Open the file you need on GitHub (e.g. `content/en/news/my-post.md` or `config.yaml`).
2. Click **Edit** (pencil) or create a new file on a branch.
3. Save and open a **pull request**.
4. Wait for the **Netlify deploy preview** on the PR (see [Pull requests](workflow/pull-requests.md)).
5. Ask a web-team reviewer to merge.

For local preview, see [Preview locally](getting-started/preview-locally.md).

## Related links

- Developer setup (short): [README.md](../README.md) in the repo root
- OpenMS software docs: [openms.readthedocs.io](https://openms.readthedocs.io/)
- Hugo docs (advanced): [gohugo.io/documentation](https://gohugo.io/documentation/)
