# Update the OpenMS Fellowship page

The page **https://openms.de/fellowship/** presents the fellowship, lists the projects fellows can work on, and shows the application form.

**You will change:** a few lines in `config.yaml` (search for `fellowshipPage:`)  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

## What you will change

| Part of the page | Lines in `fellowshipPage` |
|------------------|----------------------------|
| The small word above the title | `eyebrow` |
| The headline and the text under it | `headline`, `blurb` |
| The three small labels ("Fully remote & unpaid"…) | `chips`: each has `icon` and `text`. Change only `text`. |
| "Projects you can contribute to" | `projectsTitle`, `projectsLead` |
| One project card | `projects`: each has `title`, `description`, `url` (the project page) and `contributeUrl` (where to start contributing) |
| The application form | `tallyFormId`. Ask the web team before changing it ([Who to ask](../../workflow/who-to-ask.md)). |

## Add or remove a project

```yaml
          - title: pyOpenMS
            description: Python bindings for scripting, notebooks, and workflow integration.
            url: /pyopenms/
            contributeUrl: "/pyopenms/#for-developers"
```

- **Add:** copy a whole project (four lines), paste it under the last one, change the words. For a project on another website, add the line `external: true`.
- **Remove:** delete its lines.

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `fellowshipPage:`.
3. Change **only the words after the colon**. Keep the quotes and the spaces at the start of each line. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml).
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
5. Open the **Deploy Preview** and check **/fellowship/**.

## Related guides

- [Change the text of a page](../any-page/edit-page-text.md)
- Back to the [list of all tasks](../README.md)
