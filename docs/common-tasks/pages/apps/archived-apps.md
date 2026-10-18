# Archived Apps

**Address:** **https://openms.de/archived-apps/**  ·  **Linked from:** top menu → Apps → Archived Apps

Old projects that still work but are no longer updated.

## What you can change

| Part of the page | What you can change | Where it is | How |
|------------------|---------------------|-------------|-----|
| Big title, short text and the two buttons at the top | The words and links | the page file `content/en/archived-apps.md` | [Edit the page file](../../edit-page-text.md#how-to-do-it) |
| "Good to know" notice | The words | `config.yaml` → `archivedSection` → `notice` | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |
| The list of projects | Add, change or remove a project | `config.yaml` → `archivedProjects` | Copy an existing block, like in [Affiliated Apps](../../update-affiliated-apps.md) |
| "Interested in reviving one of these projects?" | The words and the two buttons | `config.yaml` → `archivedSection` (`revivalPrompt`, `revivalNote`, `contactText`, `sponsorText`…) | Search for the key word, then [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block) |

## How to make the change

- Words in **`config.yaml`**: open the file, search for the key word from the table (for example `archivedSection`), change only the words after the colon. Steps: [edit `config.yaml`](../../edit-homepage-text.md#how-to-change-any-block).
- Words in the **page file** (`content/en/…`): [edit the page file](../../edit-page-text.md#how-to-do-it).

## Leave these to the web team

- How the page looks: `assets/css/overrides/archived-apps.css`.

## Related

- [All pages, one guide each](../README.md)
- [Which files are behind each page](../../../reference/file-locations.md#everything-in-the-navbar-and-the-footer-where-is-each-page)
- Back to the [list of all guides](../../../README.md)
