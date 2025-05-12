import pandas as pd
from Bio import Entrez
from tqdm import tqdm
# citations are exported as csv from google scholar

# Set email address (required by NCBI)
Entrez.email = "your_email@domain.com"

citations = pd.read_csv('citations.csv')
citations.dropna(subset=['Title', 'Publication', 'Year'], inplace=True)
citations.sort_values('Year', ascending=False, inplace=True)

urls = []
for _, entry in tqdm(citations.iterrows(), total=len(citations)):
    title = entry['Title']
    
    # Search PubMed
    handle = Entrez.esearch(db="pubmed", term=title, retmax=1000)
    record = Entrez.read(handle)

    # Get IDs of all matching publications
    pub_id = record["IdList"]
    
    if len(pub_id) == 1:
        url = f". [Link](https://www.ncbi.nlm.nih.gov/pubmed/{pub_id[0]})"
    else:
        url = ''
    urls.append(url)

citations['url'] = urls
with open("../content/en/publications.md", "w") as file:
    file.write(f"# List of OpenMS Publications\n\n")
    for year, year_citations in citations.groupby('Year', sort=False):
        year = int(year)
        file.write(f"## {year}\n")
        for _, citation in year_citations.sort_values('Title').iterrows():
            entry = f"- {citation['Authors']} *{citation['Title']}*. {citation['Publication']}. {year}{citation['url']}"
            file.write("\n\n" + entry)
        file.write("\n***\n")