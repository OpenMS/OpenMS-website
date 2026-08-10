import re
import time
import requests
import pandas as pd
from Bio import Entrez
import os

# --- CONFIGURATION ---
Entrez.email = "your.email@example.com"
OPENALEX_EMAIL = "your.email@example.com"
# --- END CONFIGURATION ---

def load_pmids(file_path="pmids.txt"):
    with open(file_path, "r") as f:
        return [line.strip() for line in f if line.strip() and not line.startswith("#")]

def get_openalex_citation_counts(pmids, title_map):
    per_pmid_counts = {}
    all_citing_works = set()

    print(f"\n{'='*60}")
    print("FETCHING CITATION COUNTS AND UNIQUE CITING WORKS (single pass)")
    print(f"{'='*60}")

    for idx, pmid in enumerate(pmids):
        # Step 1: get the OpenAlex work ID for this PMID
        url = f"https://api.openalex.org/works/pmid:{pmid}"
        params = {"select": "id"}
        if OPENALEX_EMAIL:
            params["mailto"] = OPENALEX_EMAIL

        work_id = None
        try:
            response = requests.get(url, params=params, timeout=30)
            response.raise_for_status()
            data = response.json()
            full_id = data.get("id")
            if full_id:
                work_id = full_id.split("/")[-1]   # e.g., W2741809807
        except requests.exceptions.HTTPError as e:
            if response.status_code == 404:
                pass   # will handle below
            else:
                print(f"  ERROR PMID {pmid}: {e}")
        except Exception as e:
            print(f"  ERROR PMID {pmid}: {e}")

        if not work_id:
            per_pmid_counts[pmid] = 0
            title = title_map.get(pmid, "Unknown")
            print(f"  [{idx+1}/{len(pmids)}] PMID {pmid}:  0 citations  |  {title[:65]}{'...' if len(title) > 65 else ''}  [NOT FOUND]")
            time.sleep(0.1)
            continue

        # Step 2: paginate through all citing works
        citing_url = f"https://api.openalex.org/works?filter=cites:{work_id}"
        cursor = "*"
        fetched_count = 0

        try:
            while cursor:
                page_params = {
                    "cursor": cursor,
                    "per_page": 200,
                    "select": "id"
                }
                if OPENALEX_EMAIL:
                    page_params["mailto"] = OPENALEX_EMAIL

                page_resp = requests.get(citing_url, params=page_params, timeout=30)
                page_resp.raise_for_status()
                page_data = page_resp.json()

                results = page_data.get("results", [])
                for work in results:
                    all_citing_works.add(work.get("id"))
                    fetched_count += 1

                cursor = page_data.get("meta", {}).get("next_cursor")
                if not results:
                    break

                time.sleep(0.1)

        except Exception as e:
            print(f"  ERROR fetching citing works for PMID {pmid} ({work_id}): {e}")

        per_pmid_counts[pmid] = fetched_count
        title = title_map.get(pmid, "Unknown")
        print(f"  [{idx+1}/{len(pmids)}] PMID {pmid}: {fetched_count} citations  |  {title[:65]}{'...' if len(title) > 65 else ''}")

        time.sleep(0.1)

    return per_pmid_counts, all_citing_works


pmids = load_pmids()
print(f"Loaded {len(pmids)} PMIDs from local list.")

# --- Fetch article metadata from PubMed ---
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
            journal = article.get("Journal", {}).get("Title", "")
            pub_date = article.get("Journal", {}).get("JournalIssue", {}).get("PubDate", {})
            year = pub_date.get("Year")
            if not year and "MedlineDate" in pub_date:
                year_match = re.search(r"\d{4}", pub_date["MedlineDate"])
                if year_match:
                    year = year_match.group(0)
            if title and year and pubmed_id:
                citations_data.append({
                    "Year": year,
                    "Title": title,
                    "PubMedID": pubmed_id,
                })
    except Exception as e:
        print(f"Error fetching metadata batch starting at index {i}: {e}")

citations = pd.DataFrame(citations_data)
if citations.empty:
    raise RuntimeError("No PubMed records were retrieved; refusing to overwrite publications.md")

title_map = dict(zip(citations["PubMedID"], citations["Title"]))

# --- Fetch citation counts from OpenAlex ---
per_pmid_counts, all_citing_works = get_openalex_citation_counts(
    citations["PubMedID"].tolist(), 
    title_map
)

citations["Citations"] = citations["PubMedID"].map(per_pmid_counts)

# --- Summary ---
print(f"\n{'='*60}")
print("CITATION SUMMARY (sorted by count)")
print(f"{'='*60}")
summary = citations[["PubMedID", "Title", "Year", "Citations"]].sort_values(
    "Citations", ascending=False
)
for _, row in summary.iterrows():
    print(f"{row['Citations']:>6}  |  {row['Year']}  |  {row['Title'][:60]}{'...' if len(row['Title']) > 60 else ''}")

total_unique_citations = len(all_citing_works)
sum_per_article = int(citations["Citations"].sum())

print(f"\n{'='*60}")
print("TOTALS")
print(f"{'='*60}")
print(f"Articles processed:              {len(citations)}")
print(f"Sum of per-article citations:    {sum_per_article}")
print(f"Unique citing works:             {total_unique_citations}")
print(f"Overlap (double-counted):        {sum_per_article - total_unique_citations}")

# --- Update KPI.csv ---
kpi_file = "KPI.csv"
kpi_rows = []

if os.path.exists(kpi_file):
    kpi_df = pd.read_csv(kpi_file)
    kpi_df = kpi_df[~kpi_df["Metric"].isin(["Total Unique Citations", "Total Citations (with overlap)"])]
    kpi_rows = kpi_df.to_dict("records")

kpi_rows.append({"Metric": "Total Unique Citations", "Value": total_unique_citations})
kpi_rows.append({"Metric": "Total Citations (with overlap)", "Value": sum_per_article})

kpi_df = pd.DataFrame(kpi_rows)
kpi_df.to_csv(kpi_file, index=False)
print(f"\nUpdated {kpi_file}")
