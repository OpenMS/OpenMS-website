# Featured Apps page: Add, change or remove an app

**Featured Apps** are the web apps that the OpenMS team looks after (FLASH App, OpenDIAKiosk, NuXL…). They appear in **two places**, both from one list in `config.yaml`:

- the **home page**, block "Featured Apps";
- the page **https://openms.de/featured-apps/**, with more details.

**You will change:** one block in `config.yaml`  ·  **Time:** about 15 minutes  ·  **Skills needed:** none

> Apps that the OpenMS team does **not** maintain go in [Affiliated Apps](../affiliated-apps-page/affiliated-apps-update-affiliated-apps.md).

## What you will change

One app is one **card**:

![An app card on the Featured Apps page, with each part numbered](../../common-tasks-screenshot-images/update-featured-apps/1-app-card.png)

And one card is one **block of lines** in `config.yaml`:

![The same app in config.yaml, with matching numbers](../../common-tasks-screenshot-images/update-featured-apps/2-app-config.png)

| Number | Line | What it is |
|:--:|------|-----------|
| 1 | `logo:` | The picture. `logo` is its place in the website (always starts with `/images/…`). The website sizes every logo by itself, so they all look the same size (a long logo gets more width than a square one). `logoSize:` lines have no effect on these cards: you can leave them or delete them. |
| 2 | `name:` | The app's name. |
| 3 | `description:` | One sentence about the app. |
| 4 | `maintainers:` | Who looks after the app. Optional. |
| – | `citation:` | The paper to cite for the app. Optional. It shows as a **Cite** line above the buttons. Write three indented lines under it: `text:` (what people see, for example `Kontou et al., J Cheminform 2023`), `url:` (the paper's DOI link, `https://doi.org/…`) and `title:` (the paper's title, shown when the mouse is on the link; optional). Example: the umetaflow, FLASH App and NuXL entries. For **two or more papers**, list them under `citation:`, each starting with `- text:` (see the example below the table). |
| 5 | `links:` | The buttons: **Demo**, **Install**, **GitHub**. Each button is two or three lines. How many: [see below](#how-many-buttons-links-can-an-app-have). |

The `url:` line (just under `name:`) is the app's main web address.

## Change an existing app

1. Open **https://github.com/OpenMS/OpenMS-website/blob/main/config.yaml** and click the **pencil icon**. ([Need help?](../../getting-started/edit-via-github.md#step-1--open-the-file))
2. Click inside the text box, press **Ctrl + F** (Windows) or **Cmd + F** (Mac) and search for the **app's name**, for example `NuXL`.
3. Change the words after the colon. Keep the spaces at the start of each line.
4. Save and send for review: [How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).

## Add a new app

### Step 1 – Upload the logo

Upload the picture first (a square-ish `.png` or `.svg` works best). Put it in the folder **`static/images/webapp/logo/`**. The how-to is in [Add images](../any-page/add-images.md). Remember the file name, for example `mynewapp.png`.

### Step 2 – Copy a block

1. Open `config.yaml` in the editor (as above) and search for `webapps:`.
2. Find the **last app** in the list (the next heading after the list is `affiliateSection`).
3. Put your cursor at the end of that last app, press **Enter**, and paste the template below. Keep the spaces at the start of each line **exactly** as in the template, because they must line up with the apps above.

```yaml
        - name: MyNewApp
          url: https://mynewapp.webapps.openms.org/
          logo: /images/webapp/logo/mynewapp.png
          logoSize: large
          description: One sentence about what the app does.
          maintainers: Your Name
          links:
            - type: demo
              url: https://mynewapp.webapps.openms.org/
            - type: install
              label: Install (Windows)
              url: https://github.com/OpenMS/mynewapp/releases/latest
            - type: github
              url: https://github.com/OpenMS/mynewapp
```

### Step 3 – Replace the example text

Change `MyNewApp`, the web addresses, the logo file name, the description, and the maintainers.

- No Windows installer? Delete the three lines of `type: install`.
- No `maintainers`? Delete that line.
- No paper to cite? Leave out the `citation:` lines.
- Two papers to cite? Write each one as its own block under `citation:`, starting with `- `. Both show under one **Cite** label, one per line:

  ```yaml
          citation:
            - text: Kontou et al., J Cheminform 2023
              url: https://doi.org/10.1186/s13321-023-00724-w
            - text: Second author et al., Journal 2026
              url: https://doi.org/…
  ```
- The **order** in the list is the order on the website. Put your app where you want it.

### Step 4 – Save and send for review

[How to make a change, steps 3 to 6](../../getting-started/edit-via-github.md#step-3--save-commit-changes).

### Step 5 – Check the preview

Open the **Deploy Preview** and look at **/featured-apps/** and at the home page. Check:

- [ ] The logo shows and is not tiny or blurry.
- [ ] Each button opens the right page.

## How many buttons (links) can an app have?

There is **no fixed limit**: every `- type:` line under `links:` becomes one button. But the card has little room, so **use 3 at most**.

On a laptop screen, **3 buttons** fit on one line (on a large screen, 4). Today every Featured App has 1 to 3 buttons.

- Extra buttons go onto a **new line**. That works, but the card becomes taller than the others next to it.
- On a **phone**, the buttons often go under each other. That is normal.
- The buttons are shown **in the order you write them**, except **GitHub**, which is always last.

| `type:` | Button text | Icon |
|---------|-------------|------|
| `demo` | Demo | play |
| `homepage` | Homepage | house |
| `pypi` | PyPI | Python |
| `install` | Install | Windows |
| `github` | GitHub | GitHub cat. **Always shown last.** |
| `nfcore` | NF Core | diagram |
| anything else | Link | arrow |

**The first button of a card is filled (blue), the others are outlined**, whatever their type. So put the most important button first: usually `demo`, or `homepage` when there is no demo. For example MHCquant: Homepage (filled), Demo, GitHub (outlined).

To change the button text, add a line `label:` (for example `label: Install (Windows)`).


## Remove an app

Find its block in `config.yaml`, starting at its `- name:` line, and **delete everything up to the next `- name:`** (the next app).

## Change the block's heading text

The big heading and the introduction above the apps ("Community tools / Featured Apps / Apps are scientifically validated…") are under `webappsSection:`, just above `webapps:`. Change the words after the colons.

## Common mistakes

| What went wrong | How to fix it |
|-----------------|---------------|
| The preview says **Failed** | The spaces are wrong. The new block must start with exactly the same number of spaces as the other `- name:` lines. See [Spaces matter](../../getting-started/edit-via-github.md#spaces-matter-in-configyaml). |
| The logo is a broken picture | The path in `logo:` must match the uploaded file name exactly (capital letters count) and start with `/images/`. |
| The logo looks smaller than the others | Crop the empty space around the picture before you upload it: the website treats empty space as part of the logo, so it looks smaller. |
| A button is missing | Each button needs its own `- type:` and `url:` lines. |

## Related guides

- [Add images](../any-page/add-images.md)
- [Affiliated Apps](../affiliated-apps-page/affiliated-apps-update-affiliated-apps.md)
- Back to the [list of all guides](../../README.md)
