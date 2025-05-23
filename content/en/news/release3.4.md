Dear OpenMS-Users,

we are proud to announce the release of OpenMS 3.4. Grab it <a href="https://abibuilder.cs.uni-tuebingen.de/archive/openms/OpenMSInstaller/release/3.4">here</a>

In the following you find all important changes to the previous version:

------------------------------------------------------------------------------------------

General:
- OpenMS now expects a compiler that supports C++20
- OpenMSInfo now informs about custom CXX compile flags (#7846)
- speed improvements:
  - TOPP tool FeatureFinderCentroided is 28-44% faster (internally GaussTraceFitter is 4-7x faster) (#7950)
  - mzML parsing is 6% faster (#7850)
  
Dependencies:
- Switch to Qt 6 (>= 6.5)  (#7525)

OpenSwath:
- Changes to -out_features (# 7793)
	- Deprecate .tsv feature output
	- Deprecate -out_osw, -out_tsv. -out_features is used for outputting .osw or .featureXML files and file format is autodetected.
	- Enable outputting any feature file (.osw or .featureXML) from a .tsv library 
- Add warning message if irt_im_extraction_window not set and im_window is set (#7813)
- Add auto add up spectra across the peak width in retention time for ion mobility extraction (#7742)
- Add peak-picking for extracted ion mobilogram (#7759)
- Add ion mobility scoring for identifying transitions for IPF (#7760)
- Bug fix, pass `im_range` to `scoreIdentification_` instead of computing it in the function. Addresses issue #7883. (PR #7885)

Misc:
- pyOpenMS: improve developer experience (installation/compilation) (#7735)
- TOPP tools and TOPPAS/ExecutePipeline return exit code 14 when external third-party tools (such as Comet or Sage) are not found (#7758)
- ProteinInference tool: Algorithm:score_type allows switching the main score (e.g., "RAW", "PEP") for BasicProteinInference. (#7769)
- README.md: Added dedicated "Building OpenMS" section with direct links to platform-specific build instructions (#7912)

Fixes:
- Add option to PeakFileOption to ignore loading of chromatograms or spectra from mzML (#7901)
- fix Doxygen Docs contain stty warning for TOPP tool output (#7865)

Library:
- IDScoreSwitcherAlgorithm: Added switchToScoreType and switchBackScoreType methods for score switching and reversion. (#7769)
- Made FASTA file reader more robust in presence of whitespaces

- removed tools:
  - XTandemAdapter
  - MascotAdapter (note: MascotAdapterOnline still exists)

------------------------------------------------------------------------------------------

Best regards,
The OpenMS-Developers

