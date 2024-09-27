---
title: "OpenMS For Proteomics"
sidebar: false
---

{{< figure src="/images/content_images/kf/PROTEINS.jpeg" >}}

OpenMS provides a large amount of tools to analyse your proteomics datasets.
Starting from input files in either vendor-specific raw formats (convertible with the integrated ProteoWizard) or a number of open HUPO-compliant formats (mzML, mzXML), you can process your data by simply combining a set of our almost 200 ready-made tools from „The OpenMS proteomics pipeline (TOPP)”. These tools are available from the [command line](https://openms.readthedocs.io/en/latest/getting-started/topp-tools.html#command-line-interface) and from within [workflow engines](https://openms.readthedocs.io/en/latest/getting-started/workflows.html) (e.g. KNIME and Galaxy).

#### TOOL CATEGORIES

These TOPP tools can roughly be categorised based on their applicability to certain common tasks of a proteomics pipeline:

- Import, export and conversion of vendor formats and several open community-driven XML formats (LINK and make a list somewhere)

- Preprocessing of spectra
    - Filtering based on various properties
    - Peak picking
    - Baseline and noise filtering

- MS2 spectrum identification
    - Support for third-party peptide search engines (OMSSA, Mascot, Myrimatch, XTandem, MSGF+)
    - Own customisable and extensible basic search engine
    - Indexing of peptides in custom protein databases with SeqAn
    - Statistical validation via posterior error probability and FDR/q-value calculation
    - Combining results of different peptide search engines with ConsensusID

- Working with MS1 maps
    - Feature finding algorithms
    - Retention time and full map alignment
    - Creating a consensus over multiple replicates
    - Feature-based quantification (labelled and unlabelled)

- Protein inference with Fido

- Visualisation of spectra (on all MS levels), features and peptide identifications in our TOPPView

- Finding RNA and protein-protein crosslinks

- Identification of phosphorylation sites with Luciphor

- Support for data independent acquisition via OpenSWATH integration

A full list of the tools can be found in our documentation [here](https://abibuilder.cs.uni-tuebingen.de/archive/openms/Documentation/release/latest/html/TOPP_documentation.html)

#### NOT ENOUGH?

If you do not find what you are looking for and you have some experience in developing C++, you can adapt, extend as well as add new tools by contributing to our library or using the library in your own project (see our [“Getting Started”](https://openms.readthedocs.io/en/latest/tutorials-and-quickstart-guides/guides/contributors-quickstart-guide.html)).