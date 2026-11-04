"""Update the "All publications" list in content/en/publications.md from pmids.txt.

The page is edited in place, so its design and hand-made entries survive:
- papers already on the page stay exactly as they are (their HTML is kept);
- papers without a PubMed link (posters, proceedings...) are never touched;
- a PMID new in pmids.txt is fetched from PubMed and added at the top of its year;
- a PubMed paper whose PMID was deleted from pmids.txt is removed.
"""
import html
import re

from Bio import Entrez

PAGE = "content/en/publications.md"
PMIDS = "pmids.txt"

YEAR_RE = re.compile(
    r'<section class="publications-year" id="year-(\d+)" data-publication-year="\1">\n'
    r'    <h3 class="publications-year__title">\1</h3>\n'
    r'    <ul class="publication-list">\n'
    r'(.*?)'
    r'    </ul>\n'
    r'  </section>\n',
    re.S,
)
ENTRY_RE = re.compile(r'    <li class="publication-entry">.*?</li>\n', re.S)
PMID_RE = re.compile(r'ncbi\.nlm\.nih\.gov/pubmed/(\d+)')


# Read PMIDs directly from repository file
def load_pmids(file_path=PMIDS):
    with open(file_path, "r") as f:
        return [line.strip() for line in f if line.strip() and not line.startswith("#")]


def read_page():
    with open(PAGE, "r") as f:
        text = f.read()
    sections = list(YEAR_RE.finditer(text))
    if not sections:
        raise RuntimeError(f"No year sections found in {PAGE}; refusing to rewrite it")
    head = text[:sections[0].start()]
    tail = text[sections[-1].end():]
    years = {}
    for m in sections:
        years[int(m.group(1))] = ENTRY_RE.findall(m.group(2))
    return head, years, tail


def author_name(a):
    if a.get("CollectiveName"):
        return str(a["CollectiveName"])
    last = str(a.get("LastName", "")).strip()
    first = str(a.get("ForeName") or a.get("Initials") or "").strip()
    return f"{last}, {first}" if first else last


def fetch(pmids):
    """Return {pmid: {Title, Authors, Publication, Year}} from PubMed."""
    found = {}
    chunk_size = 100
    for i in range(0, len(pmids), chunk_size):
        chunk = pmids[i:i + chunk_size]
        try:
            handle = Entrez.efetch(db="pubmed", id=",".join(chunk), rettype="xml")
            xml_records = Entrez.read(handle)
            handle.close()
        except Exception as e:
            print(f"Error fetching batch starting at index {i}: {e}")
            continue

        for pubmed_article in xml_records.get("PubmedArticle", []):
            citation = pubmed_article.get("MedlineCitation", {})
            article = citation.get("Article", {})

            pubmed_id = str(citation.get("PMID", ""))
            title = str(article.get("ArticleTitle", "")).rstrip(".")
            authors = "; ".join(
                author_name(a) for a in article.get("AuthorList", [])
                if a.get("LastName") or a.get("CollectiveName")
            )
            journal = str(article.get("Journal", {}).get("Title", ""))

            pub_date = article.get("Journal", {}).get("JournalIssue", {}).get("PubDate", {})
            year = pub_date.get("Year")
            if not year and "MedlineDate" in pub_date:
                year_match = re.search(r"\d{4}", pub_date["MedlineDate"])
                if year_match:
                    year = year_match.group(0)

            if title and year and pubmed_id:
                found[pubmed_id] = {
                    "Title": title,
                    "Authors": authors,
                    "Publication": journal,
                    "Year": int(year),
                }
    return found


def entry_html(pmid, c):
    e = html.escape
    return (
        '    <li class="publication-entry"><p class="publication-title">'
        f'<a class="publication-title-link" href="https://www.ncbi.nlm.nih.gov/pubmed/{pmid}" '
        f'target="_blank" rel="noopener noreferrer">{e(c["Title"])}</a></p>'
        '<p class="publication-meta">'
        f'<span class="publication-journal">{e(c["Publication"])}</span>'
        f'<span class="publication-year">{c["Year"]}</span></p>'
        f'<p class="publication-authors">{e(c["Authors"])}</p></li>\n'
    )


def year_html(year, entries):
    return (
        f'<section class="publications-year" id="year-{year}" data-publication-year="{year}">\n'
        f'    <h3 class="publications-year__title">{year}</h3>\n'
        '    <ul class="publication-list">\n'
        + "".join(entries)
        + '    </ul>\n'
        '  </section>\n'
    )


def main():
    pmids = load_pmids()
    print(f"Loaded {len(pmids)} PMIDs from local list.")
    wanted = set(pmids)

    head, years, tail = read_page()

    # Drop PubMed papers whose PMID is no longer in pmids.txt; keep the rest as is.
    on_page = set()
    removed = 0
    for year in years:
        kept = []
        for entry in years[year]:
            m = PMID_RE.search(entry)
            if m and m.group(1) not in wanted:
                removed += 1
                continue
            if m:
                on_page.add(m.group(1))
            kept.append(entry)
        years[year] = kept

    new = [p for p in pmids if p not in on_page]
    added = 0
    if new:
        found = fetch(new)
        if not found:
            raise RuntimeError("No PubMed records were retrieved; refusing to overwrite publications.md")
        for pmid in reversed(new):  # so they end up in pmids.txt order at the top
            c = found.get(pmid)
            if not c:
                print(f"PMID {pmid} not found on PubMed, skipped.")
                continue
            years.setdefault(c["Year"], []).insert(0, entry_html(pmid, c))
            added += 1

    body = "".join(year_html(y, years[y]) for y in sorted(years, reverse=True) if years[y])
    with open(PAGE, "w") as f:
        f.write(head + body + tail)
    print(f"Added {added}, removed {removed} paper(s).")


if __name__ == "__main__":
    main()
