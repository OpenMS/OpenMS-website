---
title: MetaProSIP
subtitle: Stable isotope probing
sidebar: false
---

## MetaProSIP: automated inference of elemental fluxes in microbial communities

{{< notice info >}}
MetaProSIP has been fully integrated into OpenMS. No additional installer is required anymore.
{{< /notice >}}

**Update: MetaProSIP now supports labeling experiments with heavy water (D, 18O)**

Download an updated KNIME workflow: [here](https://sourceforge.net/projects/open-ms/files/Papers/MetaProSIP/)

Advanced workflow including mass recalibration, alignment, and ID pooling: [here](https://sourceforge.net/projects/open-ms/files/Papers/MetaProSIP/)

### Requirements

- High-Resolution MS, CID, or HCD MS<sup>2</sup>
- Developed and tested on orbitrap instruments
- MS<sup>1</sup> and MS<sup>2</sup> need to be centroided (either on acquisition, conversion or in a workflow using the TOPP tool HiResPeakPicker)

For additional information on sample handling and acquisition please refer to the original MetaProSIP publication.

### Publications:

MetaProSIP: automated inference of stable isotope incorporation rates in proteins for functional metaproteom

<details>
<summary>[Bibtex]</summary>
<pre><code>@article{sachsenberg2014metaprosip,
title={MetaProSIP: automated inference of stable isotope incorporation
 rates in proteins for functional metaproteomics},
author={Sachsenberg, Timo and Herbst, Florian-Alexander and Taubert, Martin and Kermer, Ren{\'e}
 and Jehmlich, Nico and von Bergen, Martin and Seifert, Jana and Kohlbacher, Oliver},
journal={Journal of proteome research},
year={2014},
publisher={ACS Publications}
}
</code></pre>
</details>

### FAQ:

- Q: I get an “Error: Process returned with a non-zero status.“ “Error: File not found (the file ‘C:/Users/USER/AppData/Local/Temp/cluster_result_15NMix_1_3_a_picked_yD9N.dat’ could not be found)“.
- A: Make sure that a suitable R version (32 bit) and the R packages are installed and add the directory to your PATH environment variable.
- Q: What do the columns in the group output refer to
- A: See [this](https://docs.google.com/spreadsheets/d/1i8JoLFenmsUlkh4dYSsu1AUGXKGczPPSX7E7rXKYLhA/edit?usp=sharing%20for%20a%20detailed%20explanation) annotated example sheet

**If you want to use the original binaries and data of the original MetaProSIP publication you may download the files below:**

### Raw files:
The mass spectrometry proteomics data have been deposited to the ProteomeXchange Consortium (http://proteomecentral.proteomexchange.org) via the PRIDE partner repository with the dataset identifier [PXD000382](https://www.ebi.ac.uk/pride/archive/projects/PXD000382).

### Download sample data and TOPPAS workflows:
[MetaProSIP sample data](http://www-bs2.informatik.uni-tuebingen.de/services/sachsenb/MetaProSIP/15N_Mix_sample.zip)
Please note that experimental data (mzML files) have already been picked to reduce the size of the file.

Example output and quality control report for 15N mix dataset (replicate a, 1:3):
[MetaProSIP quality control report](http://open-ms.sourceforge.net/wp-content/uploads/2013/08/MetaProSIP_quality_control_report.zip)

Download Win64 installer of the original publication:
[Win64 installer](http://www-bs2.informatik.uni-tuebingen.de/services/sachsenb/MetaProSIP/OpenMS-1.11_MetaProSIP_Win64_setup.exe)

{{< notice info >}}
Note that MetaProSIP requires R installed and accessible via the path environment variable.
{{< /notice >}}

Additionally, following R libraries need to be installed:
1. gplots
2. fpc
3. clValid


