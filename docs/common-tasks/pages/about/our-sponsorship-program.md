# Our Sponsorship Program

**Address:** **https://openms.de/sponsor-us/**  ·  **Linked from:** top menu → About → Our Sponsorship Program; the "Sponsor Us" button; footer → SUPPORT and ABOUT

How companies can sponsor OpenMS, with the sponsorship levels.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Small word above the title, and the intro | The words | `config.yaml` → `sponsorUsPage` → `eyebrow`, `subtitle` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Sponsorship levels (Bronze, Silver, Gold, Platinum) | Name, price, motto, short text of each level | `config.yaml` → `sponsorTiers` → `levels` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| "Benefit comparison" table | The rows and the ticks | `config.yaml` → `sponsorTiers` → `benefitsMatrix` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Heading and notes of the levels block | The words | `config.yaml` → `sponsorTiers` → `title`, `intro`, `note` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| "Why sponsor OpenMS", "Your sponsorship enables", "How sponsorship works", FAQ | The words | `layouts/partials/sponsor-us-main.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `sponsorUsPage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the page looks: `layouts/partials/sponsor-tiers.html`, `assets/css/overrides/sponsor-us.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
