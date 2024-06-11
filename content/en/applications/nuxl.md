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
NuXL can be installed for Proteome Discoverer 3.0 and 3.1. 

1. **Before Installation:**
   - Ensure that Proteome Discoverer is closed before running the NuXL installer.

2. **Manual Installation:**
   For PD 3.1 there are three .dll files which need to be copied to different folders in the 'ProteomeDiscoverer_3.1' folder structure and a folder containing the data processing of OpenMS which needs to go to the Tools directory.
   1.	Copy PD.OpenMS.NuXLNode.dll to C:\Program Files\Thermo\Proteome Discoverer 3.1\Proteome Discoverer 3.1\Thermo.Magellan.Server
   2.	Copy PD.OpenMS.NuXLViewer.dll to C:\Program Files\Thermo\Proteome Discoverer 3.1\Proteome Discoverer 3.1\Thermo.Discoverer
   3.	Copy ZedGraph_OpenMS.dll to C:\Program Files\Thermo\Proteome Discoverer 3.1\Proteome Discoverer 3.1\Thermo.Discoverer
   4.	Go to C:\Program Files\Thermo\Proteome Discoverer 3.1\Proteome Discoverer 3.1\Tools and copy the folder “NuXL” from the .zip. 
   5.	Open PD, go to Administration -> Manage Licenses. Click “Scan for Missing Features” on top of the list of available licenses on the right side of the PD window.

3. **Troubleshooting**
   - Sometimes the operating system blocks execution of .dlls copied from an external source. In these cases, it is necessary to go to the folder containing the .dll, right click on it, choose properties, then security. The dialog offers an option to unblock the .dll from execution.

Note: Coming soon: One-click installer so no manual copy is required. The installer will automatically detect your Proteome Discoverer installation directory and deploy the NuXL nodes correctly.

## Setting Up Your Study

1. **Create a New Study:**
   - Open Proteome Discoverer
   - Create a new study, define a root directory and study name (e.g., "NuXL Study"). If you set up your first NuXL study, leave '(empty workflow)'

2. **Adding a Protein Database:**
   - Use the "Maintain FASTA file" option in Proteome Discoverer to add new protein databases to your project. Once configured, you can select this database in the NuXL node of the processing workflow.

## Analysis Workflows

1. **Generating an analysis Template:**
   - Click on "New Analysis". Note: Once completed, you will later find the analysis template in "Open Analysis Template".
   - In the analysis window you can set up 'processing' and 'consensus' workflows for NuXL
   - **Processing Workflow**
      - Click on Edit in the 'Processing Step' window
      - In case you want to use a preconfigured workflow click 'Open' and select the template of your choice.
      - For a minimal workflow, add and connect 'Spectrum Files', 'Spectrum Selector' and 'NuXL' node. You will find the NuXL node under the “Sequence Database Search” category.
      - Important settings in 'Spectrum Selector': set “MS Order” to “Any” to ensure MS1 spectra are not discarded.
   - **Consensus Workflow**: Click on Edit in the 'Consensus Step' window
      - Connect an 'MSF Files' node to the 'NuXL Consensus' node. 
      - Set “Spectra to Store” to “All” in the MSF Files node.

3. **Running the Workflow:**
   - Drag and drop your Thermo Scientific .raw files onto the Processing Step in the Analysis tab
   - Important: Ensure the "By File" checkbox is selected.
   - Save the template
   - Run the workflow

## Post-Analysis

You can monitor the progress of your analysis by opening 'Administration' -> 'Show Job Queue'.

1. **Viewing Results:**
   - Result files are not exported automatically. You can view your results in Proteome Discoverer, by double clicking on a successfully finished 'Consensus' type result row.
   - Results are displayed in several tabs. You can choose to view: 'Proteins', 'PSMs and NuXL', 'MS/MS Spectrum Info', 'Input Files', 'Specialized Traces', and 'Study Information'. Dependent on your consensus workflow, you might see additional tabs.
   - In the 'PSMs and NuXL' table, information about all peptide and crosslink spectrum matches (PSMs and NuXLs, respectively) is displayed.  Key columns include 'Annotated Sequence', 'Modifications', 'Protein Accessions', 'q-value' (CSM-level q-value). We recommend to filter your results for 1% CSM-level FDR ('q-value' <= 0.01).

2. **Exporting Data:**
   - To export the results for further analysis in spreadsheet software (e.g., Microsoft Excel), navigate to File -> Export -> To Microsoft Excel.

3. **Quality Assessment:**
   - You can manually validate spectra quality by viewing annotated spectra. To do so, click on the "Show Spectrum" button in the 'PSM and NuXL' tab.
   - Assess features such as peptide sequence coverage and the presence of key ions.

Note: For general information on Proteome Discoverer and additional nodes, please refer to the Proteome Discoverer user guide.

## Figures

- **Cross-link Spectra Examples:**
  - Figures showing examples of cross-link spectra can be found in the supplementary materials. These illustrate typical results for DNA-UV, DNA-DEB, and RNA-UV datasets.

## Conclusion

This guide provides the essential steps to successfully run cross-linking analyses using NuXL within Proteome Discoverer.

