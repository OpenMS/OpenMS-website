# Configure the donate page (Zeffy)

The **Donate** button and footer link go to **`/donate/`**. Donations are collected through [Zeffy](https://www.zeffy.com/) (embedded on the page when configured), with Open Collective as an optional alternative.

## 1. Create or open your Zeffy form

In the [Zeffy dashboard](https://www.zeffy.com/), go to **Donations → My forms** and use the form for OpenMS Inc.

## 2. Get the embed URL (recommended)

1. Click **Share** next to your donation form.
2. Open **Embed your form on your site** and choose your language.
3. Copy the **iframe** link (URL only, or the full `<iframe>` tag).

## 3. Add URLs to config.yaml

Under `languages` → `en` → `params` → `donatePage`:

```yaml
donatePage:
  zeffyEmbedUrl: "https://www.zeffy.com/embed/..."   # paste iframe src here
  zeffyFormUrl: ""                                    # optional: full form URL for a button
  openCollectiveUrl: https://opencollective.com/openms
  showOpenCollective: true
```

- **`zeffyEmbedUrl`** — iframe `src` from Zeffy (form stays on openms.de).
- **`zeffyFormUrl`** — full Zeffy page URL; used only if `zeffyEmbedUrl` is empty (opens Zeffy in a new tab).

Only `https://www.zeffy.com/` URLs are accepted for security.

## 4. Preview

```bash
hugo server -D
```

Open [http://localhost:1313/donate/](http://localhost:1313/donate/) and confirm the form loads.

## Files

| What | Path |
|------|------|
| Page content (front matter only) | `content/en/donate.md` |
| Layout | `layouts/partials/donate-main.html` |
| Styles | `assets/css/donate-page.css` |
| Settings | `config.yaml` → `donatePage` |
