---
title: DIAMetAlyzer
subtitle: Data-independent acquisition metabolomics analyzer workflow
sidebar: false
---

DIAMetAlyzer is a KNIME workflow which integrates DDA and targeted DIA analysis for metabolomics, which allows for false-discovery rate estimation based a target-decoy approach (see figure 1). It performs DDA based candidate identification and constructs a target/decoy assay library, which is used for DIA target extraction and statistical validation (FDR estimation)

<center>{{< figure src="/images/content_images/applications/Figure_1-1536x765.png" caption="**Fig. 1: DIAMetAlyzer – pipeline for assay library generation and targeted analysis with statistical validation**" >}}</center>

Candidate identification includes feature detection, adduct grouping and accurate mass search. Library construction uses the knowledge determined by compound identification. Here, potential composition, adducts and corresponding fragment spectra are used to perform fragment annotation via compositional fragmentation trees to extract transitions for assay library.  FDR estimation is based on the target-decoy approach, with decoys being generated using a fragmentation tree method, which reduces bias in decoy generation. In the targeted extraction step,  the assay library is used to analyse DIA data, which involves chromatogram extraction and peak-group scoring. Statistical validation uses semi-supervised learning to build a composite score and estimate q-values.

If you would like to try the DIAMetAlyzer workflow, you will need to install **KNIME** and the **OpenMS** plugin:

<a href="https://www.knime.com/downloads/download-knime"><button name="button" style = "color: white;background: black;border-radius: 10px;font-size: large;font-weight: bold;">USE THE KNIME DIAMETALYZER WORKFLOW</button></a>

**Steps:**
1) Download the KNIME installer for your platform via the button above
2) Install KNIME
3) After installation follow this small [video tutorial](https://abibuilder.cs.uni-tuebingen.de/archive/openms/Tutorials/Videos/installOpenMSKNIMEplugin.mp4) to install the OpenMS plugin. Use the following update site URL for
the copy-paste step in the video: https://abibuilder.cs.uni-tuebingen.de/archive/openms/knime-plugin/updateSite/release/latest/
You can give it any name (e.g. OpenMS latest Update Site).

Additional prerequisites are Python 3.x as well as the following packages:

- NumPy
- pandas
- PyProphet
- pyopenms

For an in-depth explanation on the installation and application of the workflow please see the “Additional Tutorials” section below.

**Download sources and example data:**
_Example Data_: You can use the converted mzMLs on our server as direct input to the KNIME workflow that is also linked there. The data comes from the MTBLS1108.

_Additional Tutorial_: OpenMS, in general, provides a multitude of Tutorials for data processing. You can either have look at our handout or check the OpenMS Tutorials GitHub page. The DIAMetAlyzer Tutorial is listed as “OpenSWATH for Metabolomics”.

_Publication_: TBD