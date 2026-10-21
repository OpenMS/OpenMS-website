# Archive folders and unused files

Some folders and files in the repository are **not used by the website**. They are kept on purpose, as an archive: old pictures that may be useful again, and copies made during the redesign. Nothing on the site breaks if you leave them alone.

**Do not add new files to these folders**, and do not link to them from a page: put new pictures in the folders listed in [Add images](../common-tasks/any-page/add-images.md).

Checked in October 2026. A file counts as unused when no page, layout, `config.yaml` or style file mentions it.

## Folders the site does not use at all

| Folder | What is in it | Why it is kept |
|--------|---------------|----------------|
| `images/` (at the top of the repository, **not** `static/images/`) | 10 files, 4.5 MB: copies of the Developer Retreat photos and poster and of the six leadership photos (the website uses the copies in `static/images/`), a full-size (3000 × 2000) photo of the 20th-anniversary BBQ (`20250801-OpenMS-20th-Anniversary.JPG`; the home page shows a smaller 1600 × 1066 photo, `static/images/community/openms-20th-anniversary.jpg`) and a README screenshot (`readme-build-previews.png`). | Hugo only publishes `static/`, so this folder never reaches the website. It holds the only full-size anniversary photo. |

## Folders that are mostly unused

| Folder | Used | Unused | What the unused files are |
|--------|:----:|:------:|---------------------------|
| `static/images/content_images/` | 1 file (`topp-tool-list.png`, on the OpenMS-lib page) | 89 files, about 15 MB | Pictures from the **application guides** (`applications/`, removed in the September 2026 redesign), the old **key features** pages (`keyfeatures/`, `kf/`), and other older pages (`v_*.png`, `sc_dom_img/`…). |

## Single unused files in folders that are in use

| File | What it is |
|------|-----------|
| `static/images/KNIME_run.png` | A KNIME screenshot. |
| `static/images/community/community-tech-bg.svg` | A background graphic. |
| `static/images/logos/dtulogo.png` | A second DTU logo. The site uses `DTU-logo.png`. |
| `static/images/logos/openms-webapps-logo.png` | An OpenMS Web Apps logo. |
| `static/images/logos/quansight.svg`, `tidelift.png` | Quansight and Tidelift logos. |
| `static/images/news_images/devmeeting2022.jpg` | A 9.7 MB photo of the 2022 developer meeting. No page shows it. |
| `static/images/webapp/logo/streamsage.png`, `toppview-lite.svg` | Logos of two apps (StreamSage, TOPPView-Lite) that are not on the Apps pages. |

## Folders that look unused but are needed

Do **not** delete these:

| Folder | What it does |
|--------|-------------|
| `demo_nbs/` | The pyOpenMS notebook that the pyOpenMS page opens in Google Colab (the card "Try Online", button "Open in Colab"). |
| `.netlify/` | A small Netlify function (`addSlash`) used by some redirects in `static/_redirects`. |
| `archetypes/` | Templates Hugo uses when someone runs `hugo new` (for example a new news article). |
| `data/` | `community_events.yaml`, the events of the [Calendar](../common-tasks/calendar/add-or-change-event.md). |
| `static/gallery/` | `members.html`, the [Executive Committee](../common-tasks/leadership/update-executive-committee.md) on the Leadership page. |

## Using an archived picture again

Pictures in `static/images/…` can be used straight away: write their address starting with `/images/`, for example `/images/content_images/kf/PROTEINS.jpeg`. Pictures in the top-level `images/` folder must first be uploaded again into `static/images/` (see [Add images](../common-tasks/any-page/add-images.md)).

## Deleting the archive

Deleting these files does not change the website. They stay in the git history, so they can be restored. Ask the web team before deleting ([Who to ask](../workflow/who-to-ask.md)).

Back to the [main documentation page](../README.md)
