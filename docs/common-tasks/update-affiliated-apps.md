# Update Affiliated Apps

Affiliated Apps are community and partner projects that depend on OpenMS but aren't maintained by the core team, listed under `affiliateProjects:` in `config.yaml`, shown on **/affiliated-apps/**.

This is a separate list from [Featured Apps](update-featured-apps.md) (`webapps:`) — Featured Apps are OpenMS-maintained; Affiliated Apps are not.

## Add a project

```yaml
affiliateProjects:
  - name: ExampleTool
    logo: /images/webapp/logo/affiliate/exampletool.svg
    logoSize: large
    description: >-
      One-line description of what the project does.
    maintainers: Jane Doe, John Smith
    links:
      - type: github
        url: https://github.com/example-org/exampletool
      - type: homepage
        url: https://exampletool.org/
```

| Field | Required | Notes |
|-------|----------|--------|
| `name` | Yes | Project name |
| `logo` | Yes | Path starting with `/images/...` — upload under `static/images/webapp/logo/affiliate/` |
| `logoSize` | No | `standard` (default), `large`, `wide`, or `xlarge` |
| `description` | Yes | Short summary of what the project does |
| `maintainers` | No | Names, comma-separated |
| `links` | No | A list of buttons — common `type`s are `github`, `homepage`, and `pypi` |

**Order:** list order is display order.

## Remove a project

Delete its block from the `affiliateProjects:` list.

## Section text

Eyebrow, title, and description are under `affiliateSection` in `config.yaml`, right above `affiliateProjects:`.

## Upload a logo

1. Go to `static/images/webapp/logo/affiliate/` in the repository.
2. **Add file → Upload files**.
3. Reference it above as `/images/webapp/logo/affiliate/<the file name>`.

See [Add images](add-images.md).

## Preview

```bash
make serve
```

Visit [http://localhost:1313/affiliated-apps/](http://localhost:1313/affiliated-apps/).
