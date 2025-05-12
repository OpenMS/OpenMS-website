---
title: FLASHQuant
subtitle: Quantification for top-down proteomics
sidebar: false
---

FLASHQuant performs MS1-level label-free quantification data analysis in top-down proteomics with an automatic overlapping signal resolution method. 

{{< button github "https://github.com/JeeH-K/OpenMS/tree/feature/FLASHQuant">}}
Check it out on Github!
{{< /button >}}

Now <u>binary installer files for all platforms</u> are available here: (Please use the latest version) 
{{< button normal "https://abibuilder.cs.uni-tuebingen.de/archive/openms/OpenMSInstaller/experimental/feature/FLASHQuantDevelop/">}}
Download Page
{{< /button >}}

### Input/Output
- Input: Centroided MS1 scans (\*.mzML)
- Output: Quantified proteoforms in a tab-separated file (\*.tsv); optionally, OpenMS LC-MS features output (\*.featureXML)
  - for each proteoform, mono-isotopic/average mass, retention time range, charge range, different types for quantity values, and isotope cosine similarity score are provided.
- Parameters can be found by running FLASHQuant using the "--helphelp" option.

### Consensus FeatureGroup (putative proteoform) detection
FLASHQuant executes per LC-MS run; thus, we provide an additional simple tool for detecting consensus feature groups (i.e., jointly detected proteoforms) among multiple scans (i.e., technical replicates) named **ConsensusFeatureGroupDetector**. Retention time and mass tolerance can be adjusted with parameters.

### GUI
FLASHQuant and (consecutive) ConsensusFeatureGroupDetector can be executed easily with the GUI, **FLASHQuantWizard**.
<center>{{< figure src="/images/content_images/FLASHQuantWizard.png" >}}</center>

To learn how to run the programs, please check <a href="/applications/flashdeconv/">FLASHDeconv</a> page for details.