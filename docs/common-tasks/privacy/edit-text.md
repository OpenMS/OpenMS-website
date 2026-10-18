# Change the text of the Privacy page

The page **https://openms.de/privacy/** (footer → **LEGAL**) has **all its words in one page file**: `content/en/privacy.md`.

**You will change:** a few words in one file  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

**On the website**

![The Privacy page with a section and a topic numbered](../../common-tasks-screenshot-images/privacy/1-page.png)

**In the page file**

![The beginning of privacy.md: a ### section and a #### topic with matching numbers](../../common-tasks-screenshot-images/privacy/2-page-file.png)

The numbers match: the part marked **1** on the website is the line marked **1** in the file.

## What you will change

| In the file | On the page |
|---|---|
| `title:` between the two `---` lines | The big title. |
| A line starting with `## ` | A section heading. |
| A normal line | A paragraph of text. |

> **Important:** the page is built from the heading lines. Keep every line that starts with `###` (a section) or `####` (a topic inside a section) exactly as it is, unless you mean to add or rename a section. The short summary shown for each section is part of the design: ask the web team to change it.

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/content/en/privacy.md** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Find your sentence (**Ctrl + F** on Windows or **Cmd + F** on Mac, after clicking inside the text box).
3. Change the words, like in a Word document.
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/privacy/**.

## Do not touch

- The top block between the two lines of `---` (except the `title:` if you want a new title).
- Lines that start with `{{<`. They are special building blocks. Ask the web team.

## Related guides

- [Change the text of a page](../any-page/edit-page-text.md): a picture of a page next to its file, and the writing symbols you can use (bold, links, lists…)
- Back to the [list of all tasks](../README.md)
