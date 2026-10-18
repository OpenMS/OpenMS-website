# Change the Google Scholar link on the Publications page

The page **https://openms.de/publications/** has a link "Follow us on Google Scholar". Its words and address are in `config.yaml`.

**You will change:** one or two lines in `config.yaml`  ·  **Time:** about 5 minutes  ·  **Skills needed:** none

| Part of the page | Line in `publicationsPage` |
|---|---|
| The words of the link | `googleScholarText` |
| Where it goes | `googleScholarUrl` |

For the papers themselves, see [Add or remove a paper](add-or-remove-paper.md).

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `publicationsPage:`.
3. Change **only the words after the colon**. Keep the quotes and the spaces at the start of each line. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml).
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/publications/**.

## Related guides

- Back to the [list of all tasks](../README.md)
