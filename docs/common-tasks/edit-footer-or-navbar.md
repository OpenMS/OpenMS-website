# Edit footer or navbar

Navigation and footer content are defined in **`config.yaml`** under `languages.en.params`.

## Navbar (top menu)

```yaml
navbar:
  - title: Infrastructure
    url: /openms-lib/
  - title: Projects
    url: /applications
    sublinks:
      - title: Featured Projects
        url: /applications
  - title: Partner with OpenMS
    shortTitle: Partner
    url: /research-partnerships/
    button: true
    buttonVariant: sponsor
```

| Field | Meaning |
|-------|---------|
| `title` | Menu label |
| `url` | Link for top-level item (if no dropdown) |
| `sublinks` | Dropdown items |
| `is_external: true` | Opens external docs in new tab (theme behavior) |
| `is_emphasized: true` | Highlighted style |
| `button: true` | Renders as a button (e.g. Donate) |

**Logo** (top left):

```yaml
navbarlogo:
  image: OpenMS_transparent_blackFont.png
  link: /
  altText: OpenMS
```

Logo file lives under `static/images/` (theme resolves the filename).

## Footer

```yaml
footer:
  title: OpenMS
  tagline: The open-source framework for mass spectrometry.
  logo:
    image: OpenMS_transparent_blackFont.png
    link: /
    altText: OpenMS
  socialmedia:
    - link: https://discord.com/invite/v9tv5BxPch
      icon: discord
    - link: https://github.com/openMS
      icon: github
  quicklinks:
    column1:
      heading: SUPPORT
      links:
        - text: Donate
          link: /donate/
        - text: Sponsor Us
          link: /sponsor-us/
    column2:
      heading: COMMUNITY
      links: ...
```

- **Four columns** under `quicklinks`: `column1` … `column4`.
- **Social icons**: `discord`, `linkedin`, `github` (theme-supported names).
- **Sponsor logos** are no longer shown in the footer — they live on the [Our Sponsors page](update-sponsors.md) (`/our-sponsors/`).

## Preview

Check every page — navbar and footer are global. Use homepage + one inner page on the PR preview.

## Hardcoded navigation (web team only)

Some blocks are **not** in `config.yaml`:

- **University partners** marquee: `layouts/partials/university-partners.html`
- **Sponsors** on About page shortcode: `layouts/shortcodes/sponsors.html`

To change those without editing HTML, ask the web team to move them into `config.yaml` or a data file.
