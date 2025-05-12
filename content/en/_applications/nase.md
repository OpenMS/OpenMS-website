---
title: NASE
subtitle: Nucleic acid search engine
sidebar: false
---

NASE is now included in OpenMS release, 2.5.

Requirements:

- HCD (or ETD) data of RNA oligonucleotides acquired on a high-resolution mass spectrometer
- Fragment spectra (MS/MS) need to be centroided (either on acquisition, conversion, or in a workflow using the TOPP tool PeakPickerHiRes)
- Developed and tested on Linux (Ubuntu 18.04 and 18.10) systems with data from orbitrap instruments
- Operating system: OpenMS installers have been tested on Ubuntu Linux 18.04, Windows 7/8/10, and macOS 10.12-10.14. If you experience any troubles don’t hesitate to contact the OpenMS team on Gitter [chat](https://gitter.im/OpenMS/OpenMS) or open an issue in the OpenMS [GitHub repository](https://github.com/OpenMS/OpenMS/issues).

### Publication:

Wein, S., Andrews, B., Sachsenberg, T. et al. A computational platform for high-throughput analysis of RNA sequences and modifications by mass spectrometry. Nat Commun 11, 926 (2020). https://doi.org/10.1038/s41467-020-14665-7

### Example data:

Mass spectrometry data and analysis results from four validation datasets have been deposited to the ProteomeXchange Consortium (http://proteomecentral.proteomexchange.org) via the PRIDE partner repository with the dataset identifiers [PXD012094](https://www.ebi.ac.uk/pride/archive/projects/PXD012094), [PXD016308](https://www.ebi.ac.uk/pride/archive/projects/PXD016308), [PXD016323](https://www.ebi.ac.uk/pride/archive/projects/PXD016323), and [PXD016328](https://www.ebi.ac.uk/pride/archive/projects/PXD016328).

### Example workflow:

{{< button normal "https://sourceforge.net/projects/open-ms/files/Papers/NASE/NME1_pipeline.toppas/download" >}}
Example TOPPAS workflow
{{< /button >}}

This workflow can be used to reproduce the results from the [PXD016308](https://www.ebi.ac.uk/pride/archive/projects/PXD016308) dataset. Both input files and expected output files are available in the dataset. Runtime should be less than a minute. Usage instructions for TOPPAS can be found here.
