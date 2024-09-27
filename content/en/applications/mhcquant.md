---
title: MHCquant
subtitle: Quantification and identification workflow for MHC peptides
sidebar: false
---

**MHCquant: Identify and quantify peptides from mass spectrometry raw data**

MHCquant is an analysis pipeline used for quantitative processing of data dependent (DDA) peptidomics data.

It was specifically designed to analyze immunopeptidomics data, which deals with the analysis of affinity-purified, unspecifically cleaved peptides that have recently been discussed intensively in the context of cancer vaccines. (https://www.nature.com/articles/ncomms13404)

<center>{{< figure src="/images/content_images/applications/mhcquant.png" >}}</center>

The workflow is based on the OpenMS C++ framework for computational mass spectrometry. RAW files (mzML) serve as inputs and a database search (Comet) is performed based on a given input protein database. FDR rescoring is applied using Percolator 3.0 based on a competitive target-decoy approach (reversed decoys). Moreover, binding predictions on specified alleles (alleles.tsv) using various binding prediction tools can be directly run on all matched PSMs to directly annotate MHC binders and non-binders and calculate a refined FDR on a subset of PSMs leading to higher identification rates. For label-free quantification all input files undergo identification based retention time alignment (MapAlignerIdentification), and targeted feature extraction matching ids between runs (FeatureFinderIdentification). In addition, a variant calling file (vcf) can be specified to translate variants into proteins that will be included in the database search.

The pipeline is built using KNIME and Nextflow, a workflow tool to run tasks across multiple compute infrastructures in a very portable manner. It comes with docker / singularity containers making installation trivial and results highly reproducible.

The Nextflow Workflow is available at:

https://github.com/nf-core/mhcquant

The KNIME Workflow is available at:

https://kni.me/w/fxPFJudJ0JvIlA0F