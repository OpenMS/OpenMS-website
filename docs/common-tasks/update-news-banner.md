# Update the news banner

The **news banner** is the announcement strip at the top of the homepage (when enabled). It is controlled entirely in configuration — no Markdown file.

## File to edit

`config.yaml` → under `languages` → `en` → `params` → `newsBanner`

Current structure (example):

```yaml
newsBanner:
  enabled: true
  label: News
  text: Workshop at University of Helsinki on April 30th 2026.
```

## Fields

| Field | Purpose |
|-------|---------|
| `enabled` | `true` to show the banner, `false` to hide it |
| `label` | Small eyebrow text (e.g. `News`) |
| `text` | Main announcement message |

## Examples

**Turn off the banner**

```yaml
newsBanner:
  enabled: false
  label: News
  text: ""
```

**New announcement**

```yaml
newsBanner:
  enabled: true
  label: News
  text: OpenMS 3.5 released — see the release notes on our news page.
```

## Preview

1. Save `config.yaml`.
2. Local: `make serve` → homepage.
3. Or: open PR and use Netlify preview on the homepage.

## Related

- Full news article: [Add a news post](add-news-post.md)
- News listing labels (`yearFilterLabel`, etc.): `config.yaml` → `newsSection` — see [Config YAML guide](../reference/config-yaml-guide.md)

## Implementation note (for web team)

Rendering is in `layouts/partials/news-banner.html`. Only edit that file if you need to change layout or styling, not the text.
