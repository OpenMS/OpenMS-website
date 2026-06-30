# Add images

Static files are served from the **`static/`** folder. A file at `static/images/foo.png` is available on the site as **`/images/foo.png`**.

## Where to put images

| Use case | Suggested path |
|----------|----------------|
| Logos, general | `static/images/logos/` |
| Webapp / project logos | `static/images/webapp/logo/` |
| Application guide screenshots | `static/images/content_images/applications/` |
| Homepage / hero (referenced by filename in config) | Often `static/images/` or theme assets — match existing entries in `config.yaml` |
| Favicon | `static/images/favicon.png` |

## Reference in Markdown (content pages)

Use the theme **figure** shortcode:

```markdown
<center>{{< figure src="/images/content_images/applications/NuXL.png" >}}</center>
```

Path always starts with `/images/...` (not `static/`).

## Reference in config.yaml

```yaml
logo: /images/webapp/logo/nuxl.png
```

```yaml
navbarlogo:
  image: OpenMS_transparent_blackFont.png
```

Some hero images use **filename only** (e.g. `knime-analytics.png`) — copy the pattern from neighboring entries in the same config block.

## Reference in HTML partials (web team)

```html
<img src="/images/logos/logo-uni-tuebingen.png" alt="University of Tübingen" />
```

## Tips

- Prefer **PNG** or **SVG** for logos; **JPEG** for photos.
- Keep file sizes reasonable (compress large screenshots).
- Use descriptive **alt text** in Markdown/HTML for accessibility.
- Use lowercase filenames to avoid case-sensitivity issues on Linux (production builds).

## Adding via GitHub

1. In your branch, go to the target folder under `static/images/`.
2. **Add file** → upload image.
3. Reference `/images/...` in the same PR.

## Preview

Open the image URL directly: `http://localhost:1313/images/webapp/logo/my-tool.png`
