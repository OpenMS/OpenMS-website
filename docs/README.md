# OpenMS website — maintainer documentation

This guide is for **non–front-end contributors** who update [openms.de](https://openms.de) content: news, text pages, homepage copy, and configuration. You do not need to know React, Vue, or JavaScript for most tasks.

> **New here, and not a developer?** Start with **[How to make a change](getting-started/edit-via-github.md)**. It explains, with pictures, how to edit the website using only your web browser. Then find the page you want to change in the list below. Every guide shows **where** on the site and **in which file** the change happens. Not sure what *hero*, *eyebrow* or *banner* mean? See **[Words we use](getting-started/words-we-use.md)**, with labelled pictures.

## How the site works (30 seconds)

- The site is built with **[Hugo](https://gohugo.io/)** — a static site generator.
- **Pages** live as Markdown files under `content/en/`.
- **Homepage sections** (hero, banner, webapps list, footer links, etc.) live mainly in **`config.yaml`** under `params`.
- **Layout and styling** live in `layouts/` and `assets/css/` — only change these if you are doing design or structure work (ask the web team first).
- Changes are merged on GitHub; **Netlify** builds and deploys the live site.

## What can I change, page by page?

The guides are in **[`common-tasks/`](common-tasks/README.md)**, with **one folder per page** of the website. Find the page, then pick the task.

| Page | Tasks |
|------|-------|
| **Home page** ([all its blocks](common-tasks/home-page/README.md)) | [Top banner](common-tasks/home-page/edit-top-banner.md) · [Adopted-by logos](common-tasks/home-page/update-adopted-by-logos.md) · [Three big numbers](common-tasks/home-page/update-big-numbers.md) · ["What is OpenMS?"](common-tasks/home-page/edit-what-is-openms.md) · [Ecosystem](common-tasks/home-page/edit-ecosystem.md) · ["Everyone is welcome"](common-tasks/home-page/edit-everyone-is-welcome.md) · [News and events blocks](common-tasks/home-page/edit-news-and-events-blocks.md) |
| **Top menu** (every page) | [Announcement bar](common-tasks/navbar/update-announcement-bar.md) · [Menu items](common-tasks/navbar/edit-menu-items.md) |
| **Footer** (every page) | [Footer links](common-tasks/footer/edit-footer-links.md) · [Social media icons](common-tasks/footer/edit-social-icons.md) |
| **OpenMS-lib, pyOpenMS, pyOpenMS Viz, OpenMS Web Apps** | [OpenMS-lib](common-tasks/openms-lib/edit-page-blocks.md) · [pyOpenMS](common-tasks/pyopenms/edit-page-blocks.md) · [pyOpenMS Viz](common-tasks/pyopenms-viz/edit-page-blocks.md) · [Web Apps](common-tasks/openms-web-apps/edit-page-blocks.md) |
| **Featured Apps** | [Add, change or remove an app](common-tasks/featured-apps/update-featured-apps.md) |
| **Affiliated Apps** | [Add, change or remove a project](common-tasks/affiliated-apps/update-affiliated-apps.md) |
| **Archived Apps** | [Add, change or remove a project](common-tasks/archived-apps/update-archived-apps.md) |
| **Learn** (menu links to other websites) | [Change the Learn links](common-tasks/learn/edit-learn-links.md) |
| **Calendar** | [Add or change an event](common-tasks/calendar/add-or-change-event.md) |
| **News** | [Add a news article](common-tasks/news/add-news-post.md) |
| **Getting Involved** | [Intro and links](common-tasks/getting-involved/edit-intro-and-links.md) · [Cards](common-tasks/getting-involved/edit-cards.md) |
| **OpenMS Fellowship** | [Text and labels](common-tasks/fellowship/update-fellowship.md) |
| **Annual Developer Retreat** | [Update the page (once a year)](common-tasks/developer-retreat/update-retreat.md) |
| **Code of Conduct** | [Change the text](common-tasks/code-of-conduct/edit-text.md) · [Report Handling Manual](common-tasks/code-of-conduct-enforcement-procedures/edit-text.md) |
| **Scientific and Technical Support** | [Intro text](common-tasks/scientific-and-technical-support/edit-intro-text.md) |
| **Governance** | [Intro text](common-tasks/governance/edit-intro-text.md) · [Cards](common-tasks/governance/edit-cards.md) |
| **Our Sponsors** | [Add, change or remove a sponsor logo](common-tasks/our-sponsors/update-sponsors.md) |
| **Our Sponsorship Program** | [Levels](common-tasks/sponsorship-program/update-levels.md) · [Benefits](common-tasks/sponsorship-program/update-benefits.md) · [FAQ](common-tasks/sponsorship-program/update-faq.md) |
| **Research Partnerships** | [Intro text](common-tasks/research-partnerships/edit-partners.md) · [Partner logos](common-tasks/research-partnerships/update-partner-logos.md) |
| **Publications** | [Add or remove a paper](common-tasks/publications/add-or-remove-paper.md) · [Google Scholar link](common-tasks/publications/edit-google-scholar-link.md) |
| **Leadership** | [Board of directors](common-tasks/leadership/update-board-of-directors.md) · [Executive Committee](common-tasks/leadership/update-executive-committee.md) |
| **Contact** | [Intro text](common-tasks/contact/edit-intro-text.md) · [Cards](common-tasks/contact/edit-cards.md) |
| **Donate** | [Connect to Zeffy](common-tasks/donate/connect-zeffy.md) · [Intro text](common-tasks/donate/edit-intro-text.md) |
| **Executive Committee Charter** | [Change the text](common-tasks/executive-committee-charter/edit-text.md) |
| **Code of Conduct Enforcement Procedures** (Report Handling Manual) | [Change the text](common-tasks/code-of-conduct-enforcement-procedures/edit-text.md) |
| **Privacy** | [Change the text](common-tasks/privacy/edit-text.md) |
| **Press kit** | [Replace a download](common-tasks/press-kit/replace-a-download.md) |
| **Impressum** | [Change the text](common-tasks/impressum/edit-text.md) |
| **Help for any page** | [Find and change the text of a page](common-tasks/any-page/edit-page-text.md) · [Add a picture or logo](common-tasks/any-page/add-images.md) |

## Working on the site

| Task | Guide |
|------|--------|
| **Start here:** edit without installing anything | [How to make a change](getting-started/edit-via-github.md) |
| What do *hero*, *eyebrow*, *banner*, *card*… mean? | [Words we use](getting-started/words-we-use.md) |
| **Find out where things are** (pages, styling, pictures) in the website's files | [Map of the repository](getting-started/repo-map.md) |
| Preview the site on my computer | [Preview locally](getting-started/preview-locally.md) |
| Open a pull request | [Pull requests](workflow/pull-requests.md) |
| Understand what happens when we merge | [Deployment](workflow/deployment.md) |
| Find who can approve or help | [Who to ask](workflow/who-to-ask.md) |
| Which folders and pictures are **not used** by the site (archive) | [Archive folders](reference/archive-folders.md) |

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
│   ├── words-we-use.md       ← hero, eyebrow, banner… explained with pictures
│   └── preview-locally.md
├── common-tasks/             ← one folder per page of the website
│   ├── README.md             ← list of all tasks, in menu order
│   ├── home-page/  navbar/  footer/
│   ├── openms-lib/  pyopenms/  pyopenms-viz/  openms-web-apps/
│   ├── featured-apps/  affiliated-apps/  archived-apps/  learn/
│   ├── calendar/  news/  getting-involved/  fellowship/  developer-retreat/  code-of-conduct/
│   ├── scientific-and-technical-support/
│   ├── governance/  our-sponsors/  sponsorship-program/  research-partnerships/
│   ├── publications/  leadership/  contact/
│   ├── donate/  executive-committee-charter/  code-of-conduct-enforcement-procedures/
│   ├── privacy/  press-kit/  impressum/
│   └── any-page/             ← help for any page: find text, add images
├── common-tasks-screenshot-images/ ← the screenshots used in the guides
├── reference/
│   ├── content-front-matter.md
│   ├── config-yaml-guide.md
│   ├── shortcodes.md
│   ├── file-locations.md
│   └── archive-folders.md    ← folders and pictures the site does not use
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
