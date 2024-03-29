[![Netlify Status](https://api.netlify.com/api/v1/badges/27d12e04-2f3d-4b06-b08c-106244fd37e2/deploy-status)](https://app.netlify.com/sites/openms/deploys)

# Code for openms.de/openms.org

## Getting Started

To contribute to the website, you'll first need to install the *extended
version* of Hugo.

The Hugo [install page](https://gohugo.io/getting-started/installing/) has
instructions for different platforms and installers; make sure you end up with
the extended version.

On Linux it may be easiest to pick up a tarball of the latest extended version
from the [release page](https://github.com/gohugoio/hugo/releases/) and
install it per https://gohugo.io/getting-started/installing/#install-hugo-from-tarball.

Next, clone this repository, and install the theme:

```bash
git submodule update --init --recursive
```

The development web server is started with:

```bash
make serve
```

If you don't have `make` available (e.g., on Windows), use this instead:
```bash
hugo server
```

after which the site should be served at http://localhost:1313.

You'll see

```bash
error: failed to transform resource: TOCSS: failed to transform "style.sass"
```

if you don't have the Hugo extended version.
