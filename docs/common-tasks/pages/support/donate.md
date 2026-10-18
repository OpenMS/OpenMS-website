# Donate

**Address:** **https://openms.de/donate/**  ·  **Linked from:** footer → SUPPORT

Gifts to OpenMS, through the Zeffy donation form.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Donation form | Connect it to Zeffy (one address) | `config.yaml` → `donatePage` → `zeffyEmbedUrl`, `zeffyFormUrl` | [Donate page (Zeffy)](../../configure-donate-zeffy.md) |
| Small word above the title, the intro, the tax note | The words | `config.yaml` → `donatePage` → `eyebrow`, `subtitle`, `taxNote` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| Big title, "Where your gift goes" and its three boxes | The words | `layouts/partials/donate-main.html` | Ask the web team ([who?](../../../workflow/who-to-ask.md)) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `donatePage`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in **`layouts/`**: these are part of the design. Ask the web team ([who to ask](../../../workflow/who-to-ask.md)).

## Leave these to the web team

- How the page looks: `assets/css/overrides/donate.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
