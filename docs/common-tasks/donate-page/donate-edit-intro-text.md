# Donate page: Change the intro text

The page **https://openms.de/donate/** (footer → **SUPPORT** → **Donate**) starts with a small word above the title and an intro sentence. These are in `config.yaml`.

**You will change:** one or two lines in `config.yaml`  ·  **Time:** about 5 minutes  ·  **Skills needed:** none

**On the website**

![The top of the Donate page with the small word and the intro numbered](../../common-tasks-screenshot-images/donate/1-intro-on-site.png)

![The tax note under the donation block, numbered 3](../../common-tasks-screenshot-images/donate/3-tax-note-on-site.png)

**In `config.yaml`**

![The donatePage lines in config.yaml with matching numbers](../../common-tasks-screenshot-images/donate/2-config.png)

The numbers match: the part marked **1** on the website is the line marked **1** in the file.

## What you will change

| Part of the page | Line in `donatePage` |
|---|---|
| The small word above the title | `eyebrow` |
| The intro sentence | `subtitle` |
| The tax note | `taxNote` |
| The campaign text above the donation form ("Free to use. Not free to make." and its paragraphs) | `story` → `title` and `paragraphs` |

The other words (the big title and "Where your gift goes" with its three boxes) are part of the design (`layouts/partials/donate-main.html`). To change them, ask the web team ([Who to ask](../../workflow/who-to-ask.md)).

**Campaign text (`story`):** `title` is the bold title. The page shows the title and the **first** paragraph; a **More details** link opens a pop-up with all the paragraphs (its words can be changed with a `moreLabel:` line under `story:`). Under `paragraphs`, each paragraph starts with `- >-` and its words go on the indented lines below it. To add a paragraph, copy one whole block (from its `- >-` line to the line before the next `- >-`) and change the words; to remove one, delete its block. A link is written `[words](/address/)`, for example `[sponsorship program](/sponsor-us/)`. It is a good idea to keep this text the same as on the Zeffy campaign page.

For the donation form itself, see [Connect the Donate page to Zeffy](donate-connect-zeffy.md).

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `donatePage:`.
3. Change **only the words after the colon**. Keep the quotes and the spaces at the start of each line. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml).
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/donate/**.

## Related guides

- [Which files are behind this page](../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all tasks](../README.md)
