# Preview the site locally

Use this when you want to see changes in a browser before opening a pull request.

## Requirements

1. **Hugo Extended** (required — the theme compiles SASS)
   - Install: [Hugo installing guide](https://gohugo.io/getting-started/installing/)
   - You must have the **extended** edition. On Linux, a tarball from [Hugo releases](https://github.com/gohugoio/hugo/releases) is often easiest.
   - Verify: `hugo version` should mention `extended`.

2. **Git** (to clone the repo and init the theme submodule)

3. **Make** (optional; Windows users can run `hugo` directly)

## One-time setup

```bash
git clone https://github.com/OpenMS/OpenMS-website.git
cd OpenMS-website
git submodule update --init --recursive
```

The submodule pulls in `themes/scientific-python-hugo-theme`. Without it, the build fails.

## Start the dev server

```bash
make serve
```

Or without Make:

```bash
hugo server
```

Open **http://localhost:1313** in your browser.

- The server reloads when you save files.
- **Draft** pages (`draft: true` in front matter) are included when using `make serve` (it passes `-D`).

## Build static HTML (like production)

```bash
make html
```

Output is written to `public/`. You can open `public/index.html` in a browser or run a simple static server on that folder.

## Clean build artifacts

```bash
make clean
```

Removes the `public/` directory.

## Common local issues

| Symptom | Fix |
|---------|-----|
| `TOCSS: failed to transform "style.sass"` | Install **Hugo Extended**, not standard Hugo |
| Theme / layout errors after pull | Run `git submodule update --init --recursive` |
| Port 1313 in use | `hugo server --port 1314` |

More errors: [Common errors](../troubleshooting/common-errors.md).
