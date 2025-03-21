---
title: OpenMS 3.3 released
authors: ["Chris Bielow"]
date: 2025-01-17
summary: We have just released OpenMS 3.3 click here to see changes and improvements
---

Dear OpenMS-Users,

we are proud to announce the release of OpenMS 3.3. Grab it <a href="https://github.com/OpenMS/OpenMS/releases/tag/release%2F3.3.0">here</a>

Important changes to the previous version:

------------------------------------------------------------------------------------------

What's new:
- Changes breaking backward compatibility: 
  - the QualityControl TOPP tool has some renamed parameters and supports output directories (#7497)
- Low-level  peak extraction helper for MSExperiments (#7628)
- pyOpenMS: use Numpy2 (#7539)
- Docker files are now part of the main OpenMS repo (#7303)
- Added new functionality to SageAdapter + compatibility with new Sage versions (#7577)

Misc:
- FileInfo:
    - support MzTab files (#7568)
- TOPPAS 
    - supports writing results to output directories  (for TOPP tools that have such parameters) (#7497)
    - TOPPAS tutorial enhanced (#7497)
- FeatureFinderMetabo
    - added report_smoothed_intensities parameter (#7594)
- Write out percolator features in search engine adapters (by default, no PSMFeatureExtractor is needed)
- Add isobaric correction defaults for tmt6plex and 11plex (#7601) 
- Decoy phosho added to unimod.xml (#7612)
- Add additional convenience functions for MSExperiment (#7630)
- Improve file list comparison (#7645)
- pyOpenMS: Add more convenient constructor for AASequence (#7650)
- Add annotate_features param in Deisotoper.cpp (#7643)
- internal enhancements (#7652)

Fixes:
- OpenMS does not compile when using GLPK (instead of COINOR) (#7626)
- fix MassCalculator error ('residue type has no name') (#7698)
- pyOpenMS
  - get_feature_df() in MRMTransitionGroupCP, output is now as expected (#7646)
- Fix scan number extraction for merged spectra (#7599)
- Cmake fix (#7625) 
  - use Boost config instead of find module (new policy of CMake)
  - escape quotes in whitespace strings
  - remove invalid PRE_BUILD option (in combination with OUTPUT)
  - update diff regex and actual results (which seem to have changed with recent Sage versions...)
- MzTab: preallocate enough memory instead of allocating in the loops (#7624)
  - add check that otherwise will result in out of memory error
  - reduce memory fragmentation on huge files
- KNIME Plugin: Fix categories (#7622)


------------------------------------------------------------------------------------------

Best regards,
The OpenMS-Developers

