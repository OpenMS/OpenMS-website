# Update sponsors

Sponsors appear on **/our-sponsors/**, in a `sponsors:` list in `config.yaml`.

## Add a sponsor

1. Upload the sponsor's logo under `static/images/logos/` (see [Add images](add-images.md)).
2. In `config.yaml`, find `sponsors:` (under `aboutPage` → `sponsorsSection`) and add a new item:

```yaml
sponsors:
  - name: Example Institute
    url: https://example.org/
    logo: /images/logos/example-institute.svg
    alt: Example Institute logo
    description: Supporting open-source proteomics research
    # tier: gold
```

| Field | Required | Notes |
|-------|----------|--------|
| `name` | Yes | Sponsor name |
| `url` | Yes | Link when the logo is clicked |
| `logo` | Yes | Path starting with `/images/...` (file must exist under `static/`) |
| `alt` | Yes | Describes the logo for screen readers |
| `description` | Yes | Short line shown under the logo |
| `tier` | No | One of the ids in `sponsorTiers.levels` (`bronze`, `silver`, `gold`, `platinum`) — see below |

3. Preview and open a pull request (see [Edit via GitHub](../getting-started/edit-via-github.md) or [Preview locally](../getting-started/preview-locally.md)).

## Remove a sponsor

Delete their block from the `sponsors:` list.

## Sponsorship tiers (optional)

Sponsors show as a plain logo list until there are enough of them to group by level. To turn on grouping:

1. Set `tier:` on each sponsor's entry in `sponsors:` (must match an `id` under `sponsorTiers.levels`, e.g. `gold`).
2. Set `groupByTier: true` under `sponsorsSection` in `config.yaml`.

Only tiers that actually have a sponsor are shown. The tiers themselves (name, price, description) are configured separately under `sponsorTiers.levels` and the **Sponsorship levels** section on `/sponsor-us/` — editing a sponsor's `tier` does not change the tier's own price or description, only which group their logo appears under.

## Section text

Eyebrow, intro paragraph, and the "Interested in sponsoring us?" call to action are under `sponsorsSection` in `config.yaml`, right above the `sponsors:` list.

## Preview

```bash
make serve
```

Visit [http://localhost:1313/our-sponsors/](http://localhost:1313/our-sponsors/).
