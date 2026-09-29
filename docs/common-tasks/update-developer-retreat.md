# Update the Annual Developer Retreat page

The retreat page (**/developer-retreat/**) is driven by `developerRetreatPage` in `config.yaml` — no layout changes needed for a routine yearly update.

## What to change each year

Once a retreat finishes and the next one is scheduled:

```yaml
developerRetreatPage:
  # ...
  pastPhoto:
    src: /images/dev_retreat_2027.jpeg
    alt: OpenMS contributors at the 2027 developer retreat in Portugal
    caption: 2027 Developer retreat at Resort Natura in the Algarve, Portugal
  upcoming:
    title: Upcoming retreat
    facts:
      - icon: far fa-calendar
        text: March 2028 (dates to be confirmed)
      - icon: fas fa-map-marker-alt
        text: Location to be announced
      - icon: far fa-clock
        text: Registration opens in early 2028
    poster:
      src: /images/dev_retreat_2028_poster.png
      alt: OpenMS Developer Retreat 2028 poster
  registration:
    open: false
    url: ""
    label: Register here
    closedHint: Registration will open early 2028
```

| Block | Field | Notes |
|-------|-------|--------|
| `pastPhoto` | `src` | Photo from the retreat that just finished |
| | `alt` | Describes the photo for screen readers |
| | `caption` | Shown under the photo |
| `upcoming.facts` | — | A short list of icon + text lines — usually dates, location, and a registration note. Add, remove, or edit lines as needed. |
| `upcoming.poster` | `src` / `alt` | The announcement poster image, if there is one |
| `registration` | `open` | Set to `true` once sign-up opens |
| | `url` | The registration link, once you have one |
| | `label` | Text on the registration button |
| | `closedHint` | Shown instead of the button while `open: false` |

## Upload a new photo or poster

1. In the repository, go to `static/images/`.
2. **Add file → Upload files**, and drop in the image.
3. Reference it above as `/images/<the file name>`.

See [Add images](add-images.md).

## Text that rarely changes

`eyebrow`, `pageTitle`, `headline` (the big styled title), `about`, and `highlights` describe the retreat in general rather than a specific year — these normally don't need yearly edits. The `headline` field contains nested HTML for the styled title text; ask the web team before changing it.

## Preview

```bash
make serve
```

Visit [http://localhost:1313/developer-retreat/](http://localhost:1313/developer-retreat/).
