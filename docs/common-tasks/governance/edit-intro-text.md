# Change the intro text of the Governance page

The page **https://openms.de/governance/** (top menu → **About** → **Governance**) starts with a small word above the title and an intro sentence. These are in `config.yaml`.

**You will change:** one or two lines in `config.yaml`  ·  **Time:** about 5 minutes  ·  **Skills needed:** none

## What you will change

| Part of the page | Line in `governancePage` |
|---|---|
| The small word above the title | `eyebrow` |
| The intro sentence | `subtitle` |

The other words ("Two layers of governance", the Executive Committee, the Core Developers and all other texts) are part of the design (`layouts/partials/governance-main.html`). To change them, ask the web team ([Who to ask](../../workflow/who-to-ask.md)).

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `governancePage:`.
3. Change **only the words after the colon**. Keep the quotes and the spaces at the start of each line. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml).
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/governance/**.

## Related guides

- [Which files are behind this page](../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all tasks](../README.md)
