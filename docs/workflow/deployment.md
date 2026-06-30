# Deployment

The live site **https://openms.de/** is built and hosted on **Netlify** from this GitHub repository.

## What triggers a deploy

| Event | Result |
|-------|--------|
| Pull request opened/updated | **Deploy preview** (temporary URL on the PR) |
| Merge to default branch | **Production** deploy to openms.de |

You do not need to run a manual deploy for normal content changes.

## Build settings

- **Hugo version** is pinned in `netlify.toml`:

  ```toml
  [build.environment]
  HUGO_VERSION = "0.155.0"
  ```

- Netlify runs `hugo` (equivalent to `make html` locally) and publishes the `public/` folder.
- **Hugo Extended** is required for SASS/CSS (Netlify uses extended builds for this project).

## Deploy preview on a PR

1. Open your pull request.
2. Wait for the Netlify check (often named “Netlify” or shows as deploy preview).
3. Click **Details** or the preview link in the Netlify bot comment.
4. Test:
   - `/` — homepage (`config.yaml` changes)
   - `/news/` — news index
   - `/news/your-slug/` — new article
   - Any page you edited

The preview URL looks like a random Netlify subdomain, not openms.de.

## Production

After merge, production updates automatically. Status badge in root [README.md](../../README.md) links to [Netlify deploys](https://app.netlify.com/sites/openms/deploys).

## Submodule note

The theme lives in a **git submodule**:

```bash
git submodule update --init --recursive
```

Netlify and local builds need the submodule populated. If CI fails with missing theme files, this is a common cause on new clones.

## Rollback

If a bad change reaches production:

1. Revert the merge commit via a new PR, or
2. Ask a maintainer with Netlify access to roll back to a previous deploy in the Netlify UI.

## Local vs production

| | Local (`make serve`) | Production |
|--|----------------------|------------|
| URL | http://localhost:1313 | https://openms.de |
| Drafts | Shown (`-D`) | Hidden |
| `baseURL` | May differ for links | `https://openms.de/` |
