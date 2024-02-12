Dear OpenMS-Users,

we are proud to announce the release of OpenMS 3.0. Grab it <a href="https://abibuilder.cs.uni-tuebingen.de/archive/openms/OpenMSInstaller/release/3.0">here</a>

In the following you find all important changes to the previous version:

------------------------------------------------------------------------------------------

New Tools:

    FLASHDeconv -- Ultra-fast high-quality deconvolution enables online processing of top-down MS data (TOPP)
    FLASHDeconvWizard -- A GUI assistant for FLASHDeconv execution.

New Features:

e.g.

    TMT18plex support (#6390)
    ProteinQuantifier supports iBAQ (#6107)
    OpenSwath: Add support for diaPASEF data with overlapping m/z and IM windows, and add new outputs on ion mobility features (delta_im), IM calibration (#5911, #6234, #6268)
    OpenSwathDecoyGenerator speed improvement and remove duplicates (#6054)
    NucleicAcidSearchEngine (NASE): user defined ribonucleotides with phosphorothioate linkages (#6337), JSON based ribonucleotides and updated to latest Modomics database (#6482)
    TargetedSpectraExtractor: more features (#6106)
    TOPPView: TheoreticalSpectrumGenerationDialog now supports generation of isotope patterns for metabolites (#6023); faster loading of external drag'n'drop data (#6837)
    colored commandline/console on all platforms (#6275)
    support for 'no cleavage' for XTandemAdapter and CometAdapter (#6133).
    Percolator pin file reader (#6824)
    JSON export for OMS files(SQLite) (#6114)
    ParamEditor with more convenient StringList editing (#5135)
    load parameter values from a JSON formatted .json file. (Accessible via -ini. This will be
    helpful for Common Workflow Language users and others)
    FileFilter can remove convex hulls of features and consensusFeatures to reduce file size (#6140)
    Faster compile time (#6618)
    Improving code quality by fixing lots of linting warnings and leaks (e.g. #6839, #6831, #6829)

Documentation:

    website redesign (visit openms.org)
    OpenMS user documentation is moved to openms.readthedocs.io/en/latest.
    OpenMS API reference and advanced developer documentation remains inside OpenMS doxygen
    documentation (https://abibuilder.cs.uni-tuebingen.de/archive/openms/Documentation/release/)
    pyopenms: pyopenms-extra is renamed to pyopenms-docs.

Bug fixes

e.g.

    GaussFilter when using ppm as width (#6830)
    NASE a-B ion masses (#6718), ID-Mapper for TMT data (#6758)
    FeatureFinderMetaboliteIdentification speed improvements (#6619)
    IDRipper speed improvements (#6584)
    Honor MissedCleavages in SimpleSearchEngine (#6889)
    TOPPView: fixed lots of display glitches, e.g. axis labels, goto dialog and easier re-use of components, etc (#6673, #6616, #6592, #6703, #6793)
    mzTab fixes for empty IDs (#6445)
    Fix GNPS error for empty scans in Bruker files (#6898)
    PrecursorPurity: handle unknown charge (#6283)
    OpenSwath: Fix duplicated transition error when multiple genes map to a single peptide (#5653)
    Fixed race condition when logging messages.

Removed tools:

    InspectAdapter
    OMSSAAdapter
    MyriMatchAdapter
    CruxAdapter

Supported compilers (when building from source):

    g++ (7.0 or later, tested up to v13.0)
    clang (?, tested up to v16)
    Visual Studio (2019(v16.8.4) or later)

Full changelog: [OpenMS 2.8 &rarr; 3.0](https://github.com/OpenMS/OpenMS/compare/Release2.8.0...Release3.0.0)

------------------------------------------------------------------------------------------

Best regards,
The OpenMS-Developers

