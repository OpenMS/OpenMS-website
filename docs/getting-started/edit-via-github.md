# Edit via GitHub (no local install)

You can update most site content using only the GitHub website. Netlify will build a **preview** of your changes on each pull request.

## When to use this workflow

- Adding or editing **news posts** (`content/en/news/`)
- Editing **text pages** (`content/en/about.md`, etc.)
- Small changes to **`config.yaml`** (banner text, hero copy, webapps list)

For large `config.yaml` edits, a local preview is helpful but not required.

## Steps

### 1. Find the file

Examples:

| What you want to change | File |
|-------------------------|------|
| New news article | Create `content/en/news/your-slug.md` |
| News banner on homepage | `config.yaml` → search for `newsBanner` |
| About page | `content/en/about.md` |

Use the repo search (GitHub **t** shortcut) to find text that is already on the site.

### 2. Edit on a branch

**Option A — Edit existing file**

1. Browse to the file on GitHub.
2. Click the **pencil** (Edit).
3. GitHub offers to create a branch — accept the default or name it e.g. `news/helsinki-workshop-2026`.
4. Make your changes.
5. Click **Commit changes** (use a clear message, e.g. `Add news post for Helsinki workshop`).

**Option B — New file**

1. Go to `content/en/news/` (or the right folder).
2. **Add file** → name it `my-event.md` (lowercase, hyphens, no spaces).
3. Paste content from an existing news file and adjust (see [Add a news post](../common-tasks/add-news-post.md)).

### 3. Open a pull request

After committing, GitHub usually shows **Compare & pull request**. If not:

1. Go to **Pull requests** → **New pull request**.
2. Base: `main` (or the default branch), compare: your branch.
3. Fill in the description (what changed, link to preview when ready).
4. Create the pull request.

### 4. Check the Netlify preview

On the pull request, look for a **deploy preview** check or comment from Netlify. Open that URL and verify:

- Homepage (if you changed `config.yaml`)
- `/news` and your new article (if you added news)
- The specific page you edited

Details: [Deployment](../workflow/deployment.md).

### 5. Request review

Tag or assign someone from the **web team** (see [Who to ask](../workflow/who-to-ask.md)). They merge when the preview looks correct.

## Tips

- **YAML indentation**: In `config.yaml`, use spaces only (2 spaces per level). Tabs break the build.
- **Copy an existing news file** instead of starting from a blank file.
- **Images**: upload to `static/images/...` in the same PR (see [Add images](../common-tasks/add-images.md)).
- Do not commit passwords, API keys, or private URLs.

## If the build fails

Open the failed check on the PR and read the log. Common causes:

- Invalid YAML in `config.yaml`
- Missing quote on a string with special characters
- Hugo Extended required on Netlify (already configured in `netlify.toml`)

See [Common errors](../troubleshooting/common-errors.md).
