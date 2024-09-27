---
title: "Develop Your Own OpenMS Tools"
sidebar: false
---

## SOURCE CODE

The source code of the OpenMS library as well as the TOPP tools and TOPPView are hosted on [GitHub](https://github.com/OpenMS). The most important repositories for starting developers will be [OpenMS](https://github.com/OpenMS/OpenMS) itself and its [contrib](https://github.com/OpenMS/contrib) (i.e. its dependencies). The source code is released under a three-clause BSD license.

## DOCUMENTATION

A good starting point for developers is the OpenMS GitHub wiki. For a quick dive into developing your own, see the Developer FAQ and the Adding your own tool to the TOPP suite.

The full official OpenMS/TOPP documentation can be found:

- The documentation of the latest release is available online.
- The TOPP documentation can be found here.
- The documentation is also contained in the OpenMS source and binary packages.

## YOUR TOOL IN C++

If you want to develop your own OpenMS tool with C++, you will profit on the use of OpenMS’ own:

- build system,
- documentation system,
- tool system

For more information, take a look at our [Developer FAQ](https://github.com/OpenMS/OpenMS/wiki/Developer-FAQ), especially the [TOPP section](https://github.com/OpenMS/OpenMS/wiki/Adding-your-own-tool-to-the-TOPP-suite), and the [OpenMS C++ guide](https://github.com/OpenMS/OpenMS/wiki/Cpp-Guide). Be sure to also check out our OpenMS [style guide](https://github.com/OpenMS/OpenMS/wiki/Coding-conventions).

## YOUR TOOL IN PYTHON

pyOpenMS are the Python bindings to the OpenMS library which are available for Windows, Linux and OSX.

The pyOpenMS package contains Python bindings for a large part of the OpenMS library for mass spectrometry based proteomics. It thus provides providing facile access to a feature-rich, open-source algorithm library for mass-spectrometry based proteomics analysis. These Python bindings allow raw access to the data-structures and algorithms implemented in OpenMS, specifically those for file access (mzXML, mzML, TraML, mzIdentML among others), basic signal processing (smoothing, filtering, de-isotoping and peak-picking) and complex data analysis (including label-free, SILAC, iTRAQ and SWATH analysis tools).

After importing pyOpenMS in your python tool, you can use the python bindings of almost all OpenMS classes. This means you can use methods and classes as they would be python methods or classes. You can access the stored values in objects using the provided functions of the respective class.

Calling methods from pyOpenMS objects works just as with other python objects. The pyOpenMS bindings ensure that C++ types that are mappable are being mapped to their python ‘equivalent’. This means that you can e.g. use your data, already in python lists as input to a OpenMS class object function (i.e. often either an accessor or algorithm implementation) or the output of such to further process the data in your python code.

For further help, please also consult the extensive [pyOpenMS Documentation](https://pyopenms.readthedocs.io/en/latest/index.html).
