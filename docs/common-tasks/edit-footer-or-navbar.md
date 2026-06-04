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
    url: /research-partnerships/
    is_emphasized: true
  - title: Donate
    url: /about#donate
    button: true
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
  sponsor:
    text: Sponsor us
    link: /sponsor-us/
  donate:
    text: Donate
    link: /about#donate
  socialmedia:
    - link: https://discord.com/invite/v9tv5BxPch
      icon: discord
    - link: https://github.com/openMS
      icon: github
  quicklinks:
    column1:
      heading: RESOURCES
      links:
        - text: Install
          link: https://openms.readthedocs.io/...
    column2:
      heading: COMMUNITY
      links: ...
```

- **Four columns** under `quicklinks`: `column1` … `column4`.
- **Social icons**: `discord`, `linkedin`, `github` (theme-supported names).
- **Sponsor logos** in footer: `sponsorLogo1`, `sponsorLogo2`, `sponsorLogo3` — paths under `/images/...`.

## Preview

Check every page — navbar and footer are global. Use homepage + one inner page on the PR preview.

## Hardcoded navigation (web team only)

Some blocks are **not** in `config.yaml`:

- **University partners** marquee: `layouts/partials/university-partners.html`
- **Sponsors** on About page shortcode: `layouts/shortcodes/sponsors.html`

To change those without editing HTML, ask the web team to move them into `config.yaml` or a data file.
