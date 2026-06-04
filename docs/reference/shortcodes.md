# Shortcodes

Shortcodes are special `{{< ... >}}` blocks in Markdown. They render HTML via templates in `layouts/shortcodes/`.

## notice

Callout boxes for notes, warnings, tips.

```markdown
{{< notice note >}}
This is a note.
{{< /notice >}}

{{< notice info >}}
Information.
{{< /notice >}}

{{< notice warning >}}
Warning text.
{{< /notice >}}

{{< notice tip >}}
Helpful tip.
{{< /notice >}}
```

Types: `note`, `info`, `warning`, `tip`.

## button

Icon button linking externally.

```markdown
{{< button normal https://example.com >}}
Normal Button
{{< /button >}}

{{< button download https://example.com/file.zip >}}
Download
{{< /button >}}

{{< button github https://github.com/OpenMS/OpenMS >}}
GitHub
{{< /button >}}

{{< button rocket https://example.com >}}
Rocket
{{< /button >}}
```

First argument: `normal`, `download`, `github`, or `rocket`. Second argument: URL.

## sponsors

On **About** page — renders sponsor logos.

```markdown
{{< sponsors >}}
```

Implementation: `layouts/shortcodes/sponsors.html` (hardcoded logos/links). To add a sponsor here, ask web team or edit that file.

### `keyfeatures`

Renders the “What is OpenMS?” section from `config.yaml` → `keyfeatures` (used on [OpenMS-lib](/openms-lib/)).

```markdown
{{< keyfeatures >}}
```

### `heroitems`

Renders capability cards from `config.yaml` → `heroGroup` (used on [OpenMS-lib](/openms-lib/)).

```markdown
{{< heroitems >}}
```

Optional: `{{< heroitems variant="users" >}}` or `variant="developers"` to show one block only.

## partners

Institutional partners block.

```markdown
{{< partners >}}
```

Renders `layouts/partials/university-partners.html` without the section header. Partner list is currently **hardcoded in the partial** — not in `config.yaml`.

## figure (theme shortcode)

Used heavily in application guides:

```markdown
{{< figure src="/images/content_images/applications/NuXL.png" >}}
```

Optional: wrap in `<center>...</center>` for centered images (existing pages use this pattern).

## Theme shortcodes

The scientific-python Hugo theme may provide additional shortcodes under `themes/scientific-python-hugo-theme/layouts/shortcodes/`. Prefer OpenMS copies in `layouts/shortcodes/` when both exist.

## Adding a new shortcode

Requires a new `.html` file in `layouts/shortcodes/` — **web team task**, not typical for content editors.
