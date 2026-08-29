# Add a webapp to the homepage

The homepage **“Our Open Source Projects”** carousel is driven by the `webapps` list in `config.yaml`. Full application documentation pages live separately under `content/en/applications/`.

## Files

| Purpose | Location |
|---------|----------|
| Homepage carousel entry | `config.yaml` → `params.webapps` |
| Section headings | `config.yaml` → `params.webappsSection` |
| Dedicated app page (optional) | `content/en/applications/<name>.md` |
| Project logo | `static/images/webapp/logo/` or `static/images/` |

## Add an entry to the carousel

In `config.yaml`, under `webapps`, add a list item:

```yaml
webapps:
  - name: My New Tool
    url: https://example.com/my-tool/
    logo: /images/webapp/logo/my-tool.png
    description: Short one-line description for the card.
```

| Field | Required | Notes |
|-------|----------|--------|
| `name` | Yes | Title on the card |
| `url` | Yes | Link when user clicks “View project” |
| `logo` | Yes | Path starting with `/images/...` (file must exist under `static/`) |
| `description` | Yes | Shown on the card |

**Order:** List order = display order in the carousel.

## Section title and “Show all” link

```yaml
webappsSection:
  eyebrow: Community tools
  title: Our Open Source Projects
  titleHighlight: Open Source
  description: >-
    Featured projects actively maintained...
  ctaText: View project
  showAll:
    text: Show all projects
    url: /applications
```

## Add a full applications page (optional)

1. Copy an existing file, e.g. `content/en/applications/nuxl.md`.
2. Update front matter and body.
3. The page URL will be `/applications/<filename-without-md>/`.

See [Edit a page](edit-a-page.md) and [Shortcodes](../reference/shortcodes.md) for figures and notices.

## Add a logo image

1. Place file in `static/images/webapp/logo/my-tool.png`.
2. Reference as `logo: /images/webapp/logo/my-tool.png` in `config.yaml`.

See [Add images](add-images.md).

## Preview

Homepage carousel: http://localhost:1313/ (or Netlify preview).

Applications index: http://localhost:1313/applications/

## What not to change

- `layouts/partials/webapps.html` and `webapps-project-card.html` unless changing card layout (web team).
