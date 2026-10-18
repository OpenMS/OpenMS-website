# Edit "What is OpenMS?" on the home page

The block with a title, a short text and **four boxes** (Open source, C++ & Python, Cross-platform, TOPP pipeline).

**You will change:** a few lines in `config.yaml` (search for `keyfeatures`)  ·  **Time:** about 10 minutes  ·  **Skills needed:** none

![The block with the parts numbered](../../common-tasks-screenshot-images/edit-homepage-text/8-key-features-on-site.png)

![The matching lines in config.yaml](../../common-tasks-screenshot-images/edit-homepage-text/9-key-features-config.png)

| Number | Line | What it is |
|:--:|------|-----------|
| 1 | `eyebrow:` | Small label above the title. |
| 2 | `title:` and `titleHighlight:` | The title. The highlighted words must also appear in the title. |
| 3 | `description:` | The paragraph under the title. |
| 4 | `title:` and `text:` inside `features:` | The title and text of **one box**. |
| 5 | `tag:` | The little badge inside the box. |
| 6 | `note:` (at the end of the block) | The grey bar at the bottom. A link is written `[words](/page/)`. |

## Step by step

Follow [How to change any block](README.md#how-to-change-any-block), searching for `keyfeatures`.

## Related guides

- [All the blocks of the home page](README.md)
- Back to the [list of all tasks](../README.md)
