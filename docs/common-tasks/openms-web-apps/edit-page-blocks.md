# Change the blocks of the OpenMS Web Apps page

The page **https://openms.de/webapps/** (top menu → **Projects** → **OpenMS Web Apps**) is made of blocks, one under the other. Most of its words are in `config.yaml`.

**You will change:** a few lines in `config.yaml`  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

**On the website**

![The first Highlights box of the page, numbered](../../common-tasks-screenshot-images/openms-web-apps/1-highlights-on-site.png)

**In `config.yaml`**

![The highlights lines in config.yaml, the first box numbered](../../common-tasks-screenshot-images/openms-web-apps/2-highlights-config.png)

The numbers match: the part marked **1** on the website is the line marked **1** in the file.

## What you will change

| Block on the page | Search for | Lines you can change |
|---|---|---|
| Highlights | `webappsPage` → `highlights` | `items`: each box has `title` and `text` |
| Using the template | `webappsPage` → `usingTemplate` | `title`, `lead`, and the cards under `items` |
| Examples | `webappsPage` → `examples` | the example apps shown |
| For developers, and the citation | `webappsPage` → `developers` | `title`, `lead`, `citeText`, the paper under `citation`, and the cards under `boxes` |

The **big title at the top** is part of the design (`layouts/partials/webapps-hero.html`). To change it, ask the web team ([Who to ask](../../workflow/who-to-ask.md)).

In each block, change the words after `title:`, `lead:`, `text:` and similar lines. Leave lines like `layout:`, `icon:`, `accent:`, `featured:` or `group:` as they are: they set how the block looks.

To **add a card**, copy a whole card (from its `- title:` line to the line before the next `- title:`), paste it under the last one and change the words. To **remove a card**, delete all its lines.

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `webappsPage`.
3. Change **only the words after the colon**. Keep the quotes and the spaces at the start of each line. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml).
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/webapps/**.

## Related guides

- [Which files are behind this page](../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all tasks](../README.md)
