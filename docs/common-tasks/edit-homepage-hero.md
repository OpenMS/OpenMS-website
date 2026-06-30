# Edit the homepage hero and key sections

Most homepage content is in **`config.yaml`**, not in `content/en/`. Search for the section name below.

**File:** `config.yaml` → `languages` → `en` → `params`

## Hero (top of page)

```yaml
hero:
  titleBefore: "The "
  titleHighlight: "open-source framework"
  titleAfter: " for Mass Spectrometry"
  description: >-
    Build sophisticated LC/MS data analysis tools...
  buttontext: Get Started Now
  buttonlink: https://openms.readthedocs.io/en/latest/about/installation.html
  stats:
    - value: 10
      suffix: "+"
      label: Years Active
    - value: 1000
      suffix: "+"
      label: Researchers
    - value: 3.5
      decimals: 1
      label: Latest Version
```

| Field | What it controls |
|-------|------------------|
| `titleBefore` / `titleHighlight` / `titleAfter` | Main headline (highlight is styled) |
| `description` | Paragraph under the headline (`>-` allows a folded multi-line string) |
| `buttontext` / `buttonlink` | Primary CTA button |
| `stats` | Three stat blocks; use `suffix` for `+`, `decimals` for version numbers |

## Hero sponsors (“Supported by”)

```yaml
homeSponsors:
  enabled: true
  label: Supported by
  description: OpenMS receives direct funding...
  cta:
    text: Our sponsors
    url: /sponsor-us/
  sponsors:
    - name: deNBI
      url: https://www.denbi.de
      logo: /images/logos/denbi-logo-white.svg
      alt: deNBI — German Network for Bioinformatics Infrastructure
```

Set `enabled: false` to hide the block.

## “What is OpenMS?”

This block lives on the **[OpenMS-lib](/openms-lib/)** page (not the homepage). Edit `keyfeatures` in `config.yaml`; it is rendered via `{{< keyfeatures >}}` in `content/en/openms-lib.md`.

## “OpenMS allows users to” / developer sections

These blocks live on the **[OpenMS-lib](/openms-lib/)** page (not the homepage). They are defined under `heroGroup` in `config.yaml` and rendered via the `{{< heroitems >}}` shortcode in `content/en/openms-lib.md`.

Two blocks — each has `title`, `variant` (`users` or `developers`), `heroItems` (cards with image, subtitle, buttons).

```yaml
heroGroup:
  - title: "OpenMS allows users to:"
    variant: users
    heroItems:
      - title: Run existing workflows
        subtitle: ...
        image: knime-analytics.png
        buttonText: Get Started
        buttonLink: "https://..."
```

Images here are **filenames** resolved from the theme/static image paths (same as existing entries).

## “What is OpenMS?” (key features)

```yaml
keyfeatures:
  eyebrow: Overview
  title: What is OpenMS?
  description: >-
    OpenMS is an open-source C++ library...
  features:
    - title: Open source
      text: BSD-licensed core library...
  note: >-
    Our community is committed...
```

The `note` field supports Markdown links, e.g. `[Code of Conduct](/code-of-conduct)`.

## Trusted by section

```yaml
trustedBySection:
  eyebrow: Trusted by
  title: As used by leading teams
  titleHighlight: leading teams
  subtitle: Researchers and organizations worldwide...
  linkLabel: Visit website

trustedBy:
  - name: Immatics
    abbr: I
    url: https://immatics.com/
  - name: University of Toronto
    abbr: UofT
    logo: /images/logos/toronto.jpeg
```

- Use `logo` for an image, or `abbr` for a letter avatar when no logo is set.
- `url` is optional.

## YAML tips

- Keep indentation consistent (2 spaces).
- URLs with special characters: wrap in quotes.
- Multi-line text: `>-` after the key folds newlines into a single line.

## What not to change without web team

- `layouts/index.html` — order of homepage sections
- `layouts/partials/hero.html`, `heroitems.html`, `keyfeatures.html` — structure and markup
- `assets/css/*` — colors and spacing

## Preview

`make serve` → http://localhost:1313/ or Netlify PR preview.
