# Pull requests

All website changes should go through a **pull request (PR)** on GitHub so others can review and Netlify can build a preview.

## Before you open a PR

1. Know which files you changed (see [File locations](../reference/file-locations.md)).
2. If you edited `config.yaml`, double-check **indentation** (spaces only).
3. For news: `date`, `summary`, and `type: news` are set.
4. For images: files are under `static/` and paths start with `/images/`.

## Opening the PR

1. Push your branch (or use GitHub’s web editor — it creates a branch automatically).
2. Target the default branch (usually `main`).
3. Title: short and specific, e.g. `Add news post: Helsinki workshop 2026`.
4. Description:
   - What changed and why
   - Links to preview URLs once Netlify finishes
   - Screenshots for visible UI changes (optional but helpful)

## Netlify deploy preview

After opening the PR:

1. Find the **Netlify** check or bot comment.
2. Open the **deploy preview** URL (not the production site).
3. Verify every page you touched.

Production **openms.de** updates only after the PR is **merged**.

## Review checklist (for authors)

- [ ] Build / Netlify check is green
- [ ] Previewed on deploy preview (or locally)
- [ ] No accidental edits to `themes/` submodule
- [ ] No secrets or internal-only URLs committed
- [ ] News posts: correct date and summary
- [ ] External links open correctly

## Review checklist (for reviewers)

- [ ] Content accurate (dates, names, links)
- [ ] Accessible images (alt text where applicable)
- [ ] YAML valid if `config.yaml` changed
- [ ] Scope matches PR description

## After merge

Netlify deploys production automatically. Allow a few minutes, then hard-refresh openms.de if you do not see changes (cache).

Details: [Deployment](deployment.md).

## Getting help

See [Who to ask](who-to-ask.md).
