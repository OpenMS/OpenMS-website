# Edit a page

Most site pages are Markdown files in **`content/en/`**. The filename (without `.md`) becomes the URL path.

## Examples

| Page | File | URL |
|------|------|-----|
| About | `content/en/about.md` | `/about/` |
| Contribute | `content/en/contribute.md` | `/contribute/` |
| Governance | `content/en/governance.md` | `/governance/` |
| Application guide | `content/en/applications/nuxl.md` | `/applications/nuxl/` |
| News index | `content/en/news/_index.md` | `/news/` |

## Basic structure

```markdown
---
title: Contributing to OpenMS
sidebar: false
---

# Contributing to OpenMS

Your content here...
```

| Front matter | Typical use |
|--------------|-------------|
| `title` | Page title (browser tab, headings) |
| `sidebar: false` | Hides sidebar on many pages |
| `subtitle` | Optional subtitle (some layouts) |

## Headings and links

```markdown
## Section title

Link to another page on this site: [Governance](/governance/)

External link: [Read the docs](https://openms.readthedocs.io/)

Anchor on same page: [Sponsors](#sponsors)
```

Define anchors with `{#id}` in a heading:

```markdown
## Sponsors {#sponsors}
```

## Shortcodes (special blocks)

Used on several pages:

```markdown
{{< sponsors >}}
{{< partners >}}
{{< button normal https://example.com >}}
Click me
{{< /button >}}
```

Full list: [Shortcodes](../reference/shortcodes.md).

## Pages that use shortcodes instead of plain text

- **`about.md`**: `{{< sponsors >}}` and `{{< partners >}}` pull in sponsor/partner blocks (partners partial is shared with homepage; sponsors are defined in a layout shortcode).

## Draft pages

Add to front matter to hide until ready:

```yaml
draft: true
```

Local preview with drafts: `make serve` (includes `-D`).

## Preview

- `/about/`, `/contribute/`, etc. on localhost or Netlify preview.

## Do not edit for text-only changes

- `layouts/_default/single.html` — page wrapper
- Theme files under `themes/scientific-python-hugo-theme/`
