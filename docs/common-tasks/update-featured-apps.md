# Update Featured Apps

Featured Apps are OpenMS-maintained applications, listed under `webapps:` in `config.yaml`. This one list feeds **two** places:

- The homepage's "Featured Apps" section (a subset, via `layouts/index.html`)
- The full catalog on **/featured-apps/**

## Add an app

```yaml
webapps:
  - name: MyNewApp
    url: https://mynewapp.webapps.openms.org/
    logo: /images/webapp/logo/mynewapp.png
    logoSize: large
    description: One-line description of what the app does.
    maintainers: Your Name
    links:
      - type: demo
        url: https://mynewapp.webapps.openms.org/
      - type: install
        label: Install (Windows)
        url: https://github.com/OpenMS/mynewapp/releases/latest
      - type: github
        url: https://github.com/OpenMS/mynewapp
```

| Field | Required | Notes |
|-------|----------|--------|
| `name` | Yes | Title on the card |
| `url` | Yes | Main link for the app (its demo/homepage) |
| `logo` | Yes | Path starting with `/images/...` — upload under `static/images/webapp/logo/` |
| `logoSize` | No | `standard` (default), `large`, or `xlarge` — use a bigger size if the logo looks small next to the others |
| `description` | Yes | One-line summary shown on the card |
| `maintainers` | No | Names shown on the card |
| `links` | No | A list of buttons — common `type`s are `demo`, `install` (add a `label` to override the button text), and `github` |

**Order:** list order is display order.

## Remove an app

Delete its block from the `webapps:` list.

## Section text

Eyebrow, title, and description for both the homepage section and the `/featured-apps/` page are under `webappsSection` in `config.yaml`, right above `webapps:`.

## Upload a logo

1. Go to `static/images/webapp/logo/` in the repository.
2. **Add file → Upload files**.
3. Reference it above as `/images/webapp/logo/<the file name>`.

See [Add images](add-images.md).

## Preview

```bash
make serve
```

Visit [http://localhost:1313/featured-apps/](http://localhost:1313/featured-apps/) and the homepage.
