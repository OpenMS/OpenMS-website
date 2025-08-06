---
title: OpenMS 3.4.1 released
authors: ["Tjeerd Dijkstra"]
date: 2025-05-20
summary: We have just released OpenMS 3.4.1
---
Dear OpenMS-Users,

We are proud to announce the release of OpenMS 3.4.1. Grab it <a href="https://github.com/OpenMS/OpenMS/releases/tag/release%2F3.4.1">here</a>

In the following you find all important changes to the previous version:

------------------------------------------------------------------------------------------
----                                OpenMS 3.4.1     (May 2025)                       ----
------------------------------------------------------------------------------------------

Documentation:
  - TOPPAS: tutorial update (#8025)
  
Fixes: 
 - TOPPView: fix a few error messages boxes (in IM frames, and 2D projections) (#8047)
 - RANSAC algorithm: avoid r^2 is zero; fixes crash in OpenSwathWorkflow (#8052 )

------------------------------------------------------------------------------------------
----                                OpenMS 3.4.0     (May 2025)                       ----
------------------------------------------------------------------------------------------

General:
- OpenMS now expects a compiler that supports C++20
- OpenMSInfo TOPP tool now informs about custom CXX compile flags (#7846)
- speed improvements:
  - TOPP tool FeatureFinderCentroided TOPP tool is 28-44% faster (internally GaussTraceFitter is 4-7x faster) (#7950)
  - mzML parsing is 6% faster (#7850)
  
Dependencies:
- switch to Qt 6 (>= 6.5)  (#7525)

OpenSwath:
- changes to -out_features (# 7793)
	- Deprecate .tsv feature output
	- Deprecate -out_osw, -out_tsv. -out_features is used for outputting .osw or .featureXML files and file format is autodetected.
	- Enable outputting any feature file (.osw or .featureXML) from a .tsv library 
- add warning message if irt_im_extraction_window not set and im_window is set (#7813)
- add auto add up spectra across the peak width in retention time for ion mobility extraction (#7742)
- add peak-picking for extracted ion mobilogram (#7759)
- add ion mobility scoring for identifying transitions for IPF (#7760)
- bug fix: pass `im_range` to `scoreIdentification_` instead of computing it in the function. Addresses issue #7883. (PR #7885)

Misc:
- pyOpenMS: improve developer experience (installation/compilation) (#7735)
- TOPP tools and TOPPAS/ExecutePipeline return exit code 14 when external third-party tools (such as Comet or Sage) are not found (#7758)
- ProteinInference tool: Algorithm:score_type allows switching the main score (e.g., "RAW", "PEP") for BasicProteinInference. (#7769)
- README.md: Added dedicated "Building OpenMS" section with direct links to platform-specific build instructions (#7912)
- TOPPAS: tutorial now includes Pipeline and Node updating (#8025)

Fixes:
- fix AScore algorithm when counting phosphorylation events (#7905)
- add option to PeakFileOption to ignore loading of chromatograms or spectra from mzML (#7901)
- fix Doxygen Docs contain stty warning for TOPP tool output (#7865)
- fix various issues with the Windows installer (#7995, #7996, #8001)
- TOPPView: open theoretical spectra immediately in 1D to avoid crash when opening in 3D mode (#8019)

Library:
- IDScoreSwitcherAlgorithm: Added switchToScoreType and switchBackScoreType methods for score switching and reversion. (#7769)
- made FASTA file reader more robust in presence of whitespaces (#7960)
- add 3' cyclophosphate version of RNAse 4, fix handling of cleavage gains (#7928)

Removed tools:
  - XTandemAdapter
  - MascotAdapter (note: MascotAdapterOnline still exists) (#7927)
 
------------------------------------------------------------------------------------------

Best regards,
The OpenMS-Developers

