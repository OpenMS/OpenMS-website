# OpenMS website — maintainer documentation

This guide is for **non–front-end contributors** who update [openms.de](https://openms.de) content: news, text pages, homepage copy, and configuration. You do not need to know React, Vue, or JavaScript for most tasks.

> **New here, and not a developer?** Start with **[How to make a change](getting-started/edit-via-github.md)**. It explains, with pictures, how to edit the website using only your web browser. Then pick the task you need from the table below. Every guide shows **where** on the site and **in which file** the change happens.

## How the site works (30 seconds)

- The site is built with **[Hugo](https://gohugo.io/)** — a static site generator.
- **Pages** live as Markdown files under `content/en/`.
- **Homepage sections** (hero, banner, webapps list, footer links, etc.) live mainly in **`config.yaml`** under `params`.
- **Layout and styling** live in `layouts/` and `assets/css/` — only change these if you are doing design or structure work (ask the web team first).
- Changes are merged on GitHub; **Netlify** builds and deploys the live site.

## I want to…

| Task | Guide |
|------|--------|
| Add a news article | [Add a news article](common-tasks/add-news-post.md) |
| Add or change an event on the calendar | [Add or change an event](common-tasks/update-community-calendar.md) |
| Change the announcement bar at the very top of every page | [Change the announcement bar](common-tasks/update-announcement-bar.md) |
| Change the text on the home page (headline, numbers, “What is OpenMS?”…) | [Edit the text on the home page](common-tasks/edit-homepage-text.md) |
| Update the Annual Developer Retreat page | [Update the Developer Retreat page](common-tasks/update-developer-retreat.md) |
| Add or remove a paper on the Publications page | [Publications](common-tasks/update-publications.md) |
| Add, change or remove a Featured App | [Featured Apps](common-tasks/update-featured-apps.md) |
| Add, change or remove an Affiliated App | [Affiliated Apps](common-tasks/update-affiliated-apps.md) |
| Change the top menu, footer links or social icons | [Menu and footer](common-tasks/edit-menu-or-footer.md) |
| Add, change or remove a logo in “Adopted by labs and institutions” | [Adopted-by logos](common-tasks/update-adopted-by-logos.md) |
| Change the three big numbers on the home page | [Home page numbers](common-tasks/update-homepage-numbers.md) |
| Add or remove a sponsor logo | [Sponsors](common-tasks/update-sponsors.md) |
| Connect the Donate page to Zeffy | [Donate page (Zeffy)](common-tasks/configure-donate-zeffy.md) |
| Change the words on any other page (Code of Conduct, Impressum, …) | [Change the text of a page](common-tasks/edit-page-text.md) |
| Add a picture or logo | [Add images](common-tasks/add-images.md) |
| Preview the site on my computer | [Preview locally](getting-started/preview-locally.md) |
| **Find out where things are** (pages, styling, pictures) in the website's files | [Map of the repository](getting-started/repo-map.md) |
| **Start here:** edit without installing anything | [How to make a change](getting-started/edit-via-github.md) |
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
