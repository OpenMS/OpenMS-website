# Common errors

## `TOCSS: failed to transform "style.sass"`

**Cause:** Standard Hugo is installed instead of **Hugo Extended**.

**Fix:** Install [Hugo Extended](https://gohugo.io/getting-started/installing/) and verify:

```bash
hugo version
# should include "extended"
```

---

## Theme not found / missing layouts

**Cause:** Git submodule not initialized.

**Fix:**

```bash
git submodule update --init --recursive
```

---

## Netlify build failed after editing `config.yaml`

**Cause:** Invalid YAML (wrong indentation, tab characters, unquoted `:` in strings).

**Fix:**

- Use 2 spaces per indent level; no tabs.
- Quote strings with special characters: `text: "Workshop: April 30"`
- Compare your edit with the surrounding block in the same file.
- Use an online YAML validator on the `params` section if needed.

---

## News post does not appear on `/news`

**Check:**

1. File is under `content/en/news/` (not another folder).
2. Front matter includes `date: YYYY-MM-DD` and `type: news`.
3. `draft: true` is removed for production (drafts are hidden unless building with drafts).
4. Year filter: try **All** on the news page if a year filter is selected.

---

## Image broken (404)

**Check:**

1. File exists under `static/images/...`.
2. Markdown or config uses `/images/...` (leading slash, no `static/`).
3. Filename case matches exactly (Linux build is case-sensitive).

---

## Two news files with similar names (GSoC2025 vs gsoc2025)

**Cause:** Case-insensitive Mac vs case-sensitive Linux/Netlify.

**Fix:** Keep one file; use lowercase slugs only.

---

## `make: command not found` (Windows)

**Fix:** Run Hugo directly:

```bash
git submodule update --init --recursive
hugo server
```

---

## Port already in use

```bash
hugo server --port 1314
```

---

## Changes not visible on openms.de after merge

1. Wait a few minutes for Netlify production deploy.
2. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R) or try incognito.
3. Confirm the PR was merged to the branch Netlify watches (usually `main`).

---

## Still stuck?

1. Copy the **full error** from Netlify build log or terminal.
2. Open a GitHub Issue with steps to reproduce and link to your PR.
3. See [Who to ask](../workflow/who-to-ask.md).
