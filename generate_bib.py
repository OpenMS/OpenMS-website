import os
import re
import pandas as pd
from Bio import Entrez

# Read PMIDs directly from repository file
def load_pmids(file_path="pmids.txt"):
    with open(file_path, "r") as f:
        return [line.strip() for line in f if line.strip() and not line.startswith("#")]

pmids = load_pmids()
print(f"Loaded {len(pmids)} PMIDs from local list.")

citations_data = []
chunk_size = 100

for i in range(0, len(pmids), chunk_size):
    chunk = pmids[i:i + chunk_size]
    try:
        handle = Entrez.efetch(db="pubmed", id=",".join(chunk), rettype="xml")
        xml_records = Entrez.read(handle)
        handle.close()

        for pubmed_article in xml_records.get("PubmedArticle", []):
            citation = pubmed_article.get("MedlineCitation", {})
            article = citation.get("Article", {})
            
            pubmed_id = str(citation.get("PMID", ""))
            title = str(article.get("ArticleTitle", "")).rstrip(".")

            authors_list = article.get("AuthorList", [])
            authors = ", ".join(
                f"{a.get('LastName', '')} {a.get('Initials', '')}".strip()
                for a in authors_list if a.get('LastName')
            )

            journal = article.get("Journal", {}).get("Title", "")

            pub_date = article.get("Journal", {}).get("JournalIssue", {}).get("PubDate", {})
            year = pub_date.get("Year")
            if not year and "MedlineDate" in pub_date:
                year_match = re.search(r"\d{4}", pub_date["MedlineDate"])
                if year_match:
                    year = year_match.group(0)

            if title and year and pubmed_id:
                citations_data.append({
                    "Title": title,
                    "Authors": authors,
                    "Publication": journal,
                    "Year": int(year),
                    "PubMedID": pubmed_id,
                })
    except Exception as e:
        print(f"Error fetching batch starting at index {i}: {e}")

# Build Markdown
citations = pd.DataFrame(citations_data)

if citations.empty:
    raise RuntimeError("No PubMed records were retrieved; refusing to overwrite publications.md")
citations.drop_duplicates(subset=["PubMedID"], inplace=True)
citations.sort_values("Year", ascending=False, inplace=True)

with open("content/en/publications.md", "w") as file:
    file.write("# List of OpenMS Publications\n\n")
    for year, year_citations in citations.groupby("Year", sort=False):
        file.write(f"## {int(year)}\n")
        for _, citation in year_citations.sort_values("Title").iterrows():
            url = f" [Link](https://www.ncbi.nlm.nih.gov/pubmed/{citation['PubMedID']})"
            entry = f"- {citation['Authors']} *{citation['Title']}*. {citation['Publication']}. {citation['Year']}{url}"
            file.write("\n\n" + entry)
        file.write("\n***\n")
