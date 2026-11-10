# AI Policy page: Change the text

The **AI Policy** is the rule book for using AI tools when contributing to OpenMS. On the website it is **https://openms.de/ai-policy/** (footer → **COMMUNITY** → **AI Contribution Policy**, and a note on the Getting Involved page). It has **all its words in one page file**: `content/en/ai-policy.md`.

**You will change:** a few words in one file  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

> The policy was approved by the OpenMS Executive Board. Ask the board before changing its meaning. Fixing a typo is fine.

## What you will change

| In the file | On the page |
|---|---|
| `title:` between the two `---` lines | The big title. |
| `subtitle:` between the two `---` lines | The sentence under the title. |
| A line starting with `## ` or `### ` | A section heading. |
| A line starting with `- ` | A bullet point (indent by 4 spaces for a bullet inside a bullet). |
| A normal line | A paragraph of text. |

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/content/en/ai-policy.md** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Find your sentence (**Ctrl + F** on Windows or **Cmd + F** on Mac, after clicking inside the text box).
3. Change the words, like in a Word document.
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/ai-policy/**.

## Where the links to the policy are

- Footer (**COMMUNITY**): `config.yaml` → `footer` (look for `/ai-policy/`).
- Getting Involved page: the note in the **Contribute to development** card. It is the `note:` line of that card in `config.yaml` → `contributePage` → `ways`.

## Do not touch

- The top block between the two lines of `---` (except `title:` and `subtitle:`).

## Related guides

- [Change the text of a page](../any-page/edit-page-text.md)
- Back to the [list of all tasks](../README.md)
