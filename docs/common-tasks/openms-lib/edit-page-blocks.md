# Change the blocks of the OpenMS-lib page

The page **https://openms.de/openms-lib/** (top menu → **Projects** → **OpenMS-lib**) is made of blocks, one under the other. Most of its words are in `config.yaml`.

**You will change:** a few lines in `config.yaml`  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

**On the website**

![The first Highlights box of the page, numbered](../../common-tasks-screenshot-images/openms-lib/1-highlights-on-site.png)

**In `config.yaml`**

![The highlights lines in config.yaml, the first box numbered](../../common-tasks-screenshot-images/openms-lib/2-highlights-config.png)

The numbers match: the part marked **1** on the website is the line marked **1** in the file.

## What you will change

| Block on the page | Search for | Lines you can change |
|---|---|---|
| Highlights (the boxes under the title) | `openmsLibHighlights` | `items`: each box has `title` and `text` |
| TOPP tools | `openmsLibTopp` | `title`, `lead`, the `features` list (every item shows, two per row; add `linkText` and `linkUrl` to an item for a link under its text), the button `ctaText` / `ctaUrl` |
| Explore OpenMS-lib (getting started) | `openmsLibGettingStarted` | `title`, `lead`, and the cards under `items` (`title`, `text`, `url`, `icon`). The whole card is the link. The current design does **not** show `tag`, `linkText` or `featured: true` on these cards, so changing them has no visible effect. The last item, **Need help?**, has `links` instead of `url`: each one is a blue button. |
| For developers / Contribute, and the citation | `openmsLibDevelopers` | `title`, `lead`, `citeText`, the paper under `citation`, and the cards under `boxes` (see below) |

The **big title at the top** is part of the design (`layouts/partials/openms-lib-hero.html`). To change it, ask the web team ([Who to ask](../../workflow/who-to-ask.md)).

In each block, change the words after `title:`, `lead:`, `text:` and similar lines. Leave lines like `layout:` and `accent:` as they are: they set how the block looks. `featured:`, `group:` and `type:` are explained under [The Contribute boxes](#the-contribute-boxes-boxes).

To **add a card**, copy a whole card (from its `- title:` line to the line before the next `- title:`), paste it under the last one and change the words. To **remove a card**, delete all its lines.

### The Contribute boxes (`boxes`)

There are three kinds of box. To add one, copy a box of the same kind.

| Kind | How to recognise it in `config.yaml` | On the page |
|------|--------------------------------------|-------------|
| Plain box | `url:` and `linkText:` | White box with one link at the bottom. |
| Highlighted box | `featured: true` | Dark blue box, wider, with a white button. |
| Box with several links | `type: links` and a `platforms:` list | White box with a row of links, each with its own `name`, `icon` and `url`. The row wraps onto more lines if needed. |

`group:` starts a new set of boxes with its own small heading (for example **Get involved**, **Learn and build**). Put it on the **first** box of the set only; the boxes after it join that set until the next `group:`. A long `subtitle` is cut with "…" after three lines: keep it short.

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `openmsLibHighlights`.
3. Change **only the words after the colon**. Keep the quotes and the spaces at the start of each line. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml).
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/openms-lib/**.

## Related guides

- [Which files are behind this page](../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all tasks](../README.md)
