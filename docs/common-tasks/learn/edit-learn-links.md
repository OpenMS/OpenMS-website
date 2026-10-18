# Change the links of the Learn menu

The **Learn** menu in the top menu has six links (Liquid Chromatography, Mass Spectrometry, Identification and Quantification, Background, Glossary, Dave Tabb's Tutorials). They all go to **other websites**, so there is no page on this website to edit: only the **label** and the **address** of each link.

**You will change:** a few lines in `config.yaml`  ·  **Time:** about 5 minutes  ·  **Skills needed:** none

## Step by step

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for `title: Learn`.
3. Under it, each link is two lines: `title:` (what people read) and `url:` (the address). Change the words after the colon.
4. **Add a link:** copy two lines and add `is_external: true` under them. **Remove a link:** delete its lines. The details are in [Change the top menu](../navbar/edit-menu-items.md#add-a-line-to-a-drop-down-list).
5. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).
6. Open the **Deploy Preview**, open the Learn menu and click the links you changed.

## Related guides

- [Change the top menu](../navbar/edit-menu-items.md)
- Back to the [list of all tasks](../README.md)
