---
title: NuXL
subtitle: Protein-RNA and DNA cross-linking
sidebar: false
---

## Introduction

NuXL is a novel tool for protein-RNA and DNA cross-linking studies. It is available as stand-alone-tool and as Proteome Discoverer community node. This guide outlines the steps to install NuXL, set up your analysis, and interpret your data using the provided tools and workflows.

<center>{{< figure src="/images/content_images/applications/NuXL.png" >}}</center>

### Requirements:

- HCD data acquired on a high-resolution MS
- Developed and tested on orbitrap instruments (including Lumos, Astral)

## Installation for Proteome Discoverer 3.0 and 3.1

1. **Before Installation:**
   - Ensure that Proteome Discoverer is closed before running the NuXL installer.

2. **Running the Installer:**
   - Execute the `NuXL.exe` installer. The installer should automatically detect your Proteome Discoverer installation directory and deploy the NuXL nodes correctly.

3. **Troubleshooting:**
   - If the installer fails (typically due to missing registry entries for Proteome Discoverer), contact support for manual installation instructions.

## Setting Up Your Study

1. **Create a New Study:**
   - Open Proteome Discoverer
   - Create a new study, naming it appropriately (e.g., "NuXL Study").

2. **Import Test Data:**
   - For tutorial purposes, we provide datasets consisting of `.raw` spectra files, pre-configured PDANALYSIS files, and databases in `.fasta` format.

3. **Adding a Protein Database:**
   - Use the "Maintain FASTA file" option in Proteome Discoverer to add new protein databases to your project.

## Analysis Workflows

1. **Using Preconfigured Templates:**
   - Open the correct analysis template for your data.
   - Drag and drop your input files onto the Processing Step in the Analysis tab.
   - Ensure the "By File" checkbox is selected for accurate processing.

2. **Custom Workflow Setup:**
   - If you prefer to customize your analysis, start by building the workflow as illustrated in the supplementary figures.
   - Find the NuXL node under the “Sequence Database Search” category.
   - Important settings:
     - Set “MS Order” to “Any” in the Spectrum Selector node to ensure MS1 spectra are not discarded.
     - Configure the NuXL processing node parameters as needed.

3. **Consensus Workflow:**
   - Connect an MSF Files node to a NuXL Consensus node.
   - Set “Spectra to Store” to “All” in the MSF Files node.
   - Drag and drop your files, check "By File", and run the workflow.

## Post-Analysis

1. **Viewing Results:**
   - Results can be accessed from the Administration tab by double-clicking on a "Consensus" type result row.
   - The results will be displayed primarily in the “XLs” table. Key columns include Proteins, Peptide, and Score (Cross-link PSM-level q-value).

2. **Exporting Data:**
   - To export the results for further analysis in spreadsheet software (e.g., Microsoft Excel), navigate to File -> Export -> To Microsoft Excel.

3. **Quality Assessment:**
   - Manually validate spectra quality by viewing annotated spectra through the "Show Spectrum" button.
   - Assess features such as peptide sequence coverage and the presence of key ions.

## Figures

- **Cross-link Spectra Examples:**
  - Figures showing examples of cross-link spectra can be found in the supplementary materials. These illustrate typical results for DNA-UV, DNA-DEB, and RNA-UV datasets.

## Conclusion

This guide provides the essential steps to successfully run cross-linking analyses using NuXL within Proteome Discoverer. For more detailed guidance on specific analysis settings and troubleshooting, please refer to the full user manual included in the NuXL installation directory.

