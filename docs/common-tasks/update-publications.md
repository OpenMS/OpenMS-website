# Update publications

**/publications/** has two parts that update differently: the full archive (automatic) and two "Key publications" spotlighted at the top (manual).

## The full archive (automatic)

The list on `/publications/` rebuilds itself every **Sunday at 06:00 UTC**, driven by `.github/workflows/update_publications.yml`, from the plain list of PubMed IDs in **`pmids.txt`**.

### Add a paper

1. Find the paper's PubMed ID — the number in its PubMed URL, e.g. `pubmed.ncbi.nlm.nih.gov/38366242` → `38366242`.
2. Open `pmids.txt` and add the number on its own new line.
3. Open a pull request as usual (see [Edit via GitHub](../getting-started/edit-via-github.md)).
4. On the next scheduled run (or by triggering the workflow manually from the **Actions** tab → **Update Publications List** → **Run workflow**), the site fetches the title, authors, and journal from PubMed and adds the paper to the list. No further editing needed — do not add the title or authors by hand.

### Remove a paper

Delete its PubMed ID from `pmids.txt` and open a pull request; the next run drops it from the list.

## "Key publications" (manual)

The two papers spotlighted at the top of `/publications/` — used when citing OpenMS or pyOpenMS — are a hand-written block in `layouts/partials/publications-key.html`, not part of the automatic list. To change one:

1. Open `layouts/partials/publications-key.html`.
2. Each spotlighted paper is one `<li class="publications-cite-card ...">` block with the title, link, journal, year, and author list written directly in HTML.
3. Copy the block's structure exactly, only changing the text and the PubMed link.

This file is layout markup rather than plain text or YAML — for a first change here, it's worth asking the web team to review before merging.

## Preview

```bash
make serve
```

Visit [http://localhost:1313/publications/](http://localhost:1313/publications/).
