# OpenMS website — maintainer documentation

This guide is for **non–front-end contributors** who update [openms.de](https://openms.de) content: news, text pages, homepage copy, and configuration. You do not need to know React, Vue, or JavaScript for most tasks.

## How the site works (30 seconds)

- The site is built with **[Hugo](https://gohugo.io/)** — a static site generator.
- **Pages** live as Markdown files under `content/en/`.
- **Homepage sections** (hero, banner, webapps list, footer links, etc.) live mainly in **`config.yaml`** under `params`.
- **Layout and styling** live in `layouts/` and `assets/css/` — only change these if you are doing design or structure work (ask the web team first).
- Changes are merged on GitHub; **Netlify** builds and deploys the live site.

## I want to…

| Task | Guide |
|------|--------|
| Add or edit a news article | [Add a news post](common-tasks/add-news-post.md) |
| Add or update community calendar events | [Update the community calendar](common-tasks/update-community-calendar.md) |
| Change the yellow announcement bar on the homepage | [Update the news banner](common-tasks/update-news-banner.md) |
| Change homepage headline, stats, or “What is OpenMS?” | [Edit the homepage hero & key features](common-tasks/edit-homepage-hero.md) |
| Add or reorder a project on the homepage carousel | [Add a webapp to the homepage](common-tasks/add-webapp-to-homepage.md) |
| Change footer links, navbar, or social links | [Edit footer or navbar](common-tasks/edit-footer-or-navbar.md) |
| Set up Zeffy on the donate page | [Configure the donate page (Zeffy)](common-tasks/configure-donate-zeffy.md) |
| Edit About, Contribute, Governance, etc. | [Edit a page](common-tasks/edit-a-page.md) |
| Add or replace an image | [Add images](common-tasks/add-images.md) |
| Preview the site on my computer | [Preview locally](getting-started/preview-locally.md) |
| Edit without installing anything | [Edit via GitHub](getting-started/edit-via-github.md) |
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
│   ├── preview-locally.md
│   └── edit-via-github.md
├── common-tasks/
│   ├── add-news-post.md
│   ├── update-news-banner.md
│   ├── edit-homepage-hero.md
│   ├── add-webapp-to-homepage.md
│   ├── edit-footer-or-navbar.md
│   ├── edit-a-page.md
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
