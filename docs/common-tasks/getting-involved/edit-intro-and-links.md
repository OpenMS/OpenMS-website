# Change the intro and links of the Getting Involved page

The page **Getting Involved** has the address **https://openms.de/contribute/** (the address and the menu label are different).

**You will change:** a few lines in `config.yaml` (search for `contributePage:`)  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

## What you will change

| Part of the page | Lines in `contributePage` |
|------------------|----------------------------|
| The small word above the title | `eyebrow` |
| The intro sentence | `subtitle` |
| The links used on the page (Discord, GitHub Discussions, GitHub Issues, Governance, the website repository…) | `links`: change the address after each name |
| The social links (Discord, LinkedIn, X, Bluesky) | `social` |
| The community e-mail address | `communityEmail` |

The **headings and texts** of the page ("Ways to contribute", "Contribute to development", "Stay in touch"…) are part of the design. To change them, ask the web team ([Who to ask](../../workflow/who-to-ask.md)).

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `contributePage:`.
3. Change **only the words after the colon**. Keep the quotes and the spaces at the start of each line. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml).
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/contribute/**. Click the links you changed.

## Related guides

- Back to the [list of all tasks](../README.md)
