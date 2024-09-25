---
title: OpenMS 3.2 Released
authors: ["Samuel Wein"]
date: 2024-09-20
summary: We have just release OpenMS 3.2 click here to see changes and improvements
---

Dear OpenMS-Users,

we are proud to announce the release of OpenMS 3.2. Grab it <a href="https://abibuilder.cs.uni-tuebingen.de/archive/openms/OpenMSInstaller/release/3.2">here</a>

In the following you find all important changes to the previous version:

------------------------------------------------------------------------------------------

What's new:
- Changes breaking backwards compatibility: 
   - Rename of parameters for TOPP tool FeatureFinderCentroided (debug -> advanced), and PeakPickerWavelet/TOFCalibration (optimization -> optimization:type) (#7154)
   - Rename of parameters for TOPP tool IDFilter (score:pep -> score:psm; score:prot -> score:protein; score:protgroup -> score:proteingroup) with 'nan' as new default (#7541)
   - 3.2.0 KNIME package requires KNIME 5.3 or later
- Support for SubsetNeighborSearch (SNS) via DecoyDatabase (#7565)

Library:
- Extend FileHandler to support load and store operations for our major datastructures (spectra, features, identifications, etc.). Replaced file type specific code with the more generic FileHandler calls to decouple the IO code from other parts of the library.
- SiriusAdapter reworked to SiriusExport: Instead of running SIRIUS directly, this reworked tool takes multiple mzML and feautureXML (optional) files exporting a single SIRIUS .ms input file as well as an input table with compound info from features for the new AssayGeneratorMetaboSirius tool. (#7234)
- Splitting AssayGeneratorMetabo into two tools: In line with the changes to SiriusExport this tool has been split into two separate workflows. AssayGeneratorMetabo generates an assay library from mzML and feautreXML files using an heuristic approach picking the highest intensity MS2 peaks (like before). AssayGeneratorMetaboSirius takes an existing SIRIUS project directory as input to generate an assay library based on fragmentation trees. (#7234)
- better documentation for all SpectraFilter... tools (#7183)
- TOPPView: 
  - offer Ion mobility view from 2D spectra view (#7423)
  - view ion mobility frames, irrespective of its MS level (formerly only MS1 was supported) (#7427)
- OpenSwath: Add output on peak shape metrics to .osw file (#7222)

New Tools:
- IonMobilityBinning - Merges spectra with similar IM values and creates @p N output mzML's by discretizing the IM range (#7459)
- AssayGeneratorMetaboSirius -- Assay library generation from a SIRIUS project directory (Metabolomics)
- SiriusExport -- Metabolite identification using single and tandem mass spectrometry

Fixes:
- FileConverter: more robust (#7176)
- MSFragger: allow relative path to database (#7155)
- MSGFPlusAdapter: allow concurrent creation of indexed database (#7272)
- CometAdapter: work around bug in Comet 2024.01 rev. 0 to avoid empty results (#7540)
- ParamEditor: fixed error for the subsection parameter (ParamNode) to go through store function (#7180)
- TOPPView:
   - fix crash when viewing certain Chromatograms (#7220)
   - in 2D view, show correct adjacent layers in context menu, if user clicked to the right of the last MS1 scan (now shows the 4 rightmost MS1 scans, used to show the 4 leftmost scans) (#7423)
   - fix glitches in 1D view and layer names (#7549)
   - Show prefix ions (e.g. b1) when generating theoretical spectra (#7567)
- TOPPAS: open files in TOPPView (#7213)
- pyOpenMS: Log warnings in pure Python code with warnings.warn instead of print (#7418)
- more robust parsing of mzIdentML (#7153)
- OpenSwath: Fix bug in diaPASEF window determination (#7546)  

Misc:
- FileInfo: Report ion mobility ranges (if any) (#7459)
- OpenMSInfo reports the ILP solver (CoinOr or glpk) (#7156)
- add citation information for OpenMS 3.0 (Nat. Methods) (#7383)
- Add export for Common Workflow Language (CWL) (#6156)
- Add tool description lib (TDL) dependency (#6156)

Changed/new parameters: see CHANGELOG_PARAMS for details

Note: The goal of our library is to provide useful, reusable code in a way that’s easy to understand and use.
To make OpenMS simpler, more focused and more accessible we gradually remove potentially outdated tools and algorithms.
If you, as a user, are negatively affected by this step please contact us. We listen to our users and will try to find 
an alternative solution or reverse a particular decision for removal.

Cleanup/Removal:

- removed tools:
  - SpectraFilterMarkerMower -- Applies thresholdfilter to peak spectra (#7183)
  - FeatureFinderIsotopeWavelet -- Detects two-dimensional features in LC-MS data
  - PeakPickerWavelet -- Finds mass spectrometric peaks in profile mass spectra
  - PrecursorMassCorrector -- Corrects the precursor entries of MS/MS spectra, by using MS1 information
  - TOFCalibration -- Applies time of flight calibration
  - ERPairFinder -- Util which can be used to evaluate pair ratios on enhanced resolution (zoom) scans
  - RNPxlSearch -- Annotate RNA/DNA-peptide cross-links in MS/MS spectra
  - SpectraFilterSqrtMower -- Applies thresholdfilter to peak spectra
  - FeatureFinderMRM -- Detects two-dimensional features in LC-MS data
  - MapAlignerSpectrum -- Corrects retention time distortions between maps by spectrum alignment
  - ProteinResolver -- protein inference
  - SiriusAdapter -- Tool for metabolite identification using single and tandem mass spectrometry
  - SpectraFilterBernNorm -- Applies thresholdfilter to peak spectra
  - SpectraFilterScaler -- Applies thresholdfilter to peak spectra

- removed library code:
  - HiddenMarkovModel
  - PeakPickerMaxima
  - DeNovo related, old marker code

- removed tutorials:
  - Tutorial_PeakPickerCWT
  - Tutorial_TOFCalibration

- removed tests:
  - TOFCalibration_test
  - ContinuousWaveletTransformNumIntegration_test
  - ContinuousWaveletTransform_test
  - FeatureFinderAlgorithmIsotopeWavelet_test
  - IsotopeWaveletTransform_test
  - IsotopeWavelet_test
  - OptimizePeakDeconvolution_test
  - OptimizePick_test
  - PeakPickerCWT_test
  - PeakShape_test

- Deprecated (and likely removed in the next release)
  - XTandemAdapter

------------------------------------------------------------------------------------------

Best regards,
The OpenMS-Developers

