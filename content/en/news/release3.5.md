---
title: "OpenMS 3.5 Released"
authors: ["Tjeerd Dijkstra"]
date: 2025-12-11
summary: "We have just released OpenMS 3.5.0"
---

Dear OpenMS-Users,

We are proud to announce the release of OpenMS 3.5. Grab it [here](https://github.com/OpenMS/OpenMS/releases/tag/release%2F3.5.0).

A couple of things are different this time:

- This will be the last release for MacOS Intel. We will continue providing docker images for AMD64 processors here: https://github.com/OpenMS/OpenMS/pkgs/container/openms-tools-thirdparty. If that doesn't work, and you desperately need continued MacOS Intel support, please reach out to us at info@openms.de
- We now have ARM64 Linux support! Both for OpenMS and pyOpenMS. These also run on MacOS silicon.
- We will be using Github as opposed to our traditional archive as the primary repository of installers.
- We are now a 501c3! For any nonprofit nerds out there, we've put together a legal entity to ensure the long term stability of OpenMS.

In the following you find all important changes to the previous version:

---

**NOTICE:** 3.5.0 is going to be the last official release for MacOS on Intel processors. If you need support for OpenMS on that platform moving forward, please contact us.

## General

**Speed improvements:**
- Loading .gz files is about 7% faster (#8069)
- Loading of mzML files with more than m/z+intensity (e.g. ion mobility) is 20-40% faster (#8074)
- Loading of mzML files is 7-25% faster in general (SIMD ASCII conversion) (#8105)

**Linux arm64 support:**
- OpenMS releases now include a .deb for arm64 machines

## Dependencies

- PyOpenMS now depends on Autowrap 0.24.0
- PyOpenMS now supports Cython 3.1
- CMake now accepts Eigen 5 in addition to Eigen 3.4+ (#8366)
- Apache Arrow/Parquet integration for high-performance columnar data export (#8091, #8145)

## PyOpenMS

- PyOpenMS now has wheels for arm64 linux machines
- PyOpenMS wheels are now available for Python 3.14 on all supported operating systems
- Parquet support enabled in pyopenms wheels (#8422)
- **BREAKING:** DataFrame column names standardized to lowercase snake_case for PEP 8 compliance. Affected methods: `MSSpectrum.get_df()`, `MSChromatogram.get_df()`, `ConsensusMap.get_metadata_df()`, `FeatureMap.get_df()`. Example changes: `RT` → `rt`, `MZ` → `mz`, `nativeID` → `native_id`, `precursorMZ` → `precursor_mz`. Update code that references old column names.
- Pythonic convenience methods added:
  - `__len__()` for MSSpectrum, MSChromatogram, MSExperiment, AASequence (#8151, #8415, #8417)
  - `__str__()` and `__repr__()` for core classes (#8429)
  - Python accessors for drift time on MSSpectrum and OpenSwathSpectrum (#8423)
- New Python bindings for Mobilogram and MobilityPeak1D classes (#8377)
- DataFrame wrapper for MSSpectrum with `get_df()` method (#8435)
- Enum class support in Python bindings with IntEnum (#8405)
- Static methods to query enum names for METADATA classes (#8353)
- Fix: PyOpenMS import no longer affects Python locale settings (#8322)
- Improved pyOpenMS documentation for Feature, MRMFeature, FeatureMap classes (#8247)

## TOPP Tools

### Changes

**FileFilter:**
- Filter RT by blocks of MS levels (#8239)

**SageAdapter:**
- Improved parameter documentation and tolerance validation (#8259)
- Now correctly passes threads parameter via RAYON_NUM_THREADS (#8260)

**CometAdapter:**
- All enzymes now available by adding CometIDs to database (#8280)

**DecoyDatabase:**
- Added repeated shuffle option for improved decoy generation (#8339)

**MassTraceExtractor:**
- Support for Bruker Ion Mobility (experimental). Note: requires IM peak picked data.

**FeatureFinderCentroided, FeatureFinderMetabo, FeatureFinderMultiplex:**
- FAIMS support (experimental): Automatic detection and separate processing of FAIMS compensation voltage (CV) groups. Features from different CVs representing the same analyte are merged by default.

**FeatureFinderMetaboIdent, FeatureFinderIdentification:**
- FAIMS support (experimental): Automatic detection and separate processing of FAIMS compensation voltage (CV) groups. Features from different CVs representing the same analyte are merged by default.
- Bruker TimsTOF ion mobility support (experimental): Requires concatenated IM spectra in mzML format (use msconvert with `--combineIonMobilitySpectra` option). IM values can be specified in the input TSV/idXML.

**NucleicAcidSearchEngine:**
- Add support for global fixed modifications as a search parameter

**Digestor:**
- Supports replacing ambiguous amino acids (X,B,J,Z) in the FASTA input with random unambiguous amino acids in the output (#8167)

**All:**
- Show load/store progress for files in all TOPP tools (#8041)

**IonMobilityBinning:**
- Detect FAIMS data automatically and split output per FAIMS compensation voltage (CV)

**FLASHDeconv:**
- Major update with improved scoring, FDR estimation, and isobaric quantification support (#8257)
- Automatic mass tolerance estimation from data
- Per-MS-level deconvolved spectrum outputs
- TopFD version 1.7 compatible feature and TSV export formats
- Improved precursor mass assignment for MSn spectra

### Added Tools

- **OpenNuXL** - A peptide-RNA/DNA cross-linking search engine
- **PeptideDataBaseSearchFI** - Experimental peptide database search engine using a fragment index (FI) and the new PeptideSearchEngineFIAlgorithm
- **FeatureFinderLFQ** (experimental) - Feature detection for label-free proteomics DDA-LFQ based on the Biosaur2 algorithm with support for FAIMS and TimsTOF ion mobility
- **PeakPickerIM** - Ion mobility peak picker for TimsTOF and other IM data. Supports three methods: mobilogram-based, clustering, and elution profile-based picking. Supports both in-memory and low-memory streaming modes. (#8177)
- **IsobaricWorkflow** (experimental) - Simple, targeted, fast workflow for isobaric quantification (#7298)

### Removed Tools

- **OpenPepXLLF** - Experimental search for cross-linked peptide pairs in tandem MS spectra (showed inferior performance in benchmarks)
- **IDMassAccuracy** - Calculates a distribution of the mass error from given mass spectra and IDs
- **SpecLibCreator** - Creates an MSP formatted spectral library
- **SpecLibSearcher** - Identifies peptide MS/MS spectra by spectral matching with a searchable spectral library

## GUI Tools

- Fix TOPPAS crash when using TOPP tools with multiple output formats (#8120)

## OpenMS Library

### Added

- **PeakPickerIM** (experimental): New algorithm for ion mobility peak picking with three methods (mobilogram, cluster, elution profiles). (#8177)
- **IMFormat:** Added CENTROIDED and UNKNOWN format types for ion mobility data. (#8177)
- **MSSpectrum/SpectrumSettings:** Added `setIMFormat()`/`getIMFormat()` API for per-spectrum ion mobility format tracking. (#8177)
- **FeatureFinderAlgorithmBiosaur2** (experimental): Feature detection algorithm for label-free proteomics DDA-LFQ based on the Biosaur2 algorithm with support for FAIMS and TimsTOF ion mobility.
- **PeptideHit:** Added TargetDecoyType (TARGET, DECOY, TARGET_DECOY, UNKNOWN) and `setTargetDecoyType()`/`getTargetDecoyType()`; supports target+decoy peptide hits.
- **IDScoreSwitcherAlgorithm:** Added `findScoreType()` method for generic score type detection. Checks if main score matches requested ScoreType (PEP, QVAL, FDR, etc.) or finds it in meta values.
- **ProteinHit:** Added TargetDecoyType (TARGET, DECOY, UNKNOWN) and `setTargetDecoyType()`/`getTargetDecoyType()`.
- **Both:** Added `isDecoy()`.
- Unify isotopic distributions (coarse vs. fine) for EmpiricalFormulas with charge (#8099)
- **FragmentIndex** (experimental): New fragment index for fast peptide fragment lookup supporting FI-based peptide database search.
- **PeptideSearchEngineFIAlgorithm** (experimental): Library algorithm leveraging FragmentIndex for peptide database search; used by the PeptideDataBaseSearchFI TOPP tool.
- **AhoCorasick:** Improved high-performance string matching algorithm with path compression (#8269, #8304)
- **HashGrid:** Exposed cellIndexAtClusterCenter method (#8318)

### Changes

- Removed `assignRanks` and `sortByRanks` in PeptideIdentifications and sort and filter by score instead. Also removed `updateHitRanks` in IDFilter (#7991)
- Remove rank member in PeptideHit and store ranks as meta value (for backwards compatibility). (#7997)
- `std::vector<PeptideIdentification>` now is encapsulated in a class PeptideIdentificationList.
- Zlibcompression using zlib (not Qt) and Base64 decoding for zlib-compressed data using SIMD (not Qt) (#8161)
- Exception::InvalidSize now includes mandatory context message (#8437)
- Matrix::operator== no longer throws assert when comparing different-sized matrices (#8305)
- Removed boost::smart_ptr dependency, using std::shared_ptr instead (#8405)
- C++20 modernization: std::erase_if, range-based for loops, default constructors (#8229, #8230, #8233)

### New Features

- **FAIMSHelper:** dataset-wide FAIMS detection; ignore DRIFTTIME_NOT_SET sentinel; improved warning
- **IMDataConverter::splitByFAIMSCV:** retain MS2 without explicit FAIMS CV by assigning to prior FAIMS CV
- Added `EnzymaticDigestion.semiSpecificDigestion_()`
- **ProteaseDigestion:** Add support for semi-specific digestion (#8130)
- **TransformationModelLowess:** Add option to automate span selection via cross-validation (#8166)
- **OpenSwath:**
  - Added automated iRT calibration using input transition list (#8146)
  - Added automated RT, m/z, and IM extraction window estimation based on iRT calibration (#8188)
  - Added lowess span grid search params and updated documentation for OpenSwathWorkflow TOPP tool (#8297)
  - Added priority inclusion list for iRT sampling from PQP when using automated iRT calibration (#8373)

## Fixes

- Fix overlap test in crowded FAIMS data (#8418)
- Fix window estimation when no MS1 maps available in OpenSwath (#8308)
- Fix column header filenames for all maps in Decharger/MetaboliteAdductDecharger (#8265)
- Fix ternary operator misuse in FileMerger append_method logic (#8263)
- Fix Qt6 deprecation warnings (#8248)
- Fix FileNotFound exception misuse for file access errors (#8274)
- Fix peaks being skipped in OpenSwath wide boundary selection method (#8316)
- Fix mzTab-M validation errors for missing identification and database metadata (#8363)
- Fix negative offset handling in mzML readers (#8336)

## Documentation

- Build instructions rewritten for macOS and Linux (#8042)
- Comprehensive documentation added to DeMeanderize tool (#8264)

---

Best regards,  
The OpenMS-Developers
