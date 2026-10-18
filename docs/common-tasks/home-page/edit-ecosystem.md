# Edit the Ecosystem block on the home page

The block **Ecosystem** shows cards for OpenMS-lib, pyOpenMS and the other tools, each with a link.

**You will change:** a few lines in `config.yaml` (search for `ecosystemSection`)  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

| Line | What it is |
|------|-----------|
| `eyebrow:` | Small label above the title. |
| `title:` | The title of the block. |
| `description:` | The sentence under the title. |
| `items:` | The cards. Each card has `name`, `tag`, `description` and `url` (where it goes when clicked). |

Leave the lines `accent:`, `size:` and `icon:` of each card as they are: they set the card's colour, width and logo. Ask the web team to change them.

## Step by step

Follow [How to change any block](README.md#how-to-change-any-block), searching for `ecosystemSection`.

- **Change a card:** change the words after `name:`, `tag:`, `description:` or `url:`.
- **Add a card:** copy one card (from its `- name:` line to the line before the next `- name:`), paste it under the last one and change the words. Keep the spaces at the start of the lines the same.
- **Remove a card:** delete all its lines.

## Related guides

- [All the blocks of the home page](README.md)
- Back to the [list of all tasks](../README.md)
