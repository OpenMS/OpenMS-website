---
title: OpenMS-lib
hidePageTitle: true
hideShortcuts: true
sidebar: false
---

<article class="openms-lib-page">
<div class="governance-page openms-lib-page__intro">
  <header class="governance-hero" aria-label="OpenMS C++ core library">
    <p class="governance-hero__eyebrow">Infrastructure</p>
    <h1 class="governance-hero__title">
      Built for <span>mass spectrometry</span>, powered by <span>open source</span>.
    </h1>
    <p class="governance-hero__description">
      OpenMS-lib is the high-performance, BSD-licensed C++ foundation behind TOPP tools,
      pyOpenMS, and community software—built for LC-MS data management, analysis, and
      visualization at scale.
    </p>
    <div class="governance-hero__meta openms-lib-page__infra-btns" aria-label="Related infrastructure">
      <a
        class="openms-step__cta openms-btn-primary"
        href="https://pyopenms.readthedocs.io/en/latest/"
        target="_blank"
        rel="noopener noreferrer"
      >pyOpenMS</a>
      <a
        class="openms-step__cta openms-btn-primary"
        href="https://github.com/OpenMS/streamlit-template"
        target="_blank"
        rel="noopener noreferrer"
      >WebApp template</a>
    </div>
  </header>
  <nav class="governance-jump-links" aria-label="OpenMS-lib page sections">
    <a href="#overview">Overview</a>
    <a href="#what-is-openms">What is OpenMS?</a>
    <a href="#capabilities">Capabilities</a>
    <a href="#developers">For developers</a>
    <a href="#get-started">Get started</a>
  </nav>
  <section class="governance-grid" id="overview" aria-label="OpenMS library overview">
    <article class="governance-card">
      <p class="governance-card__eyebrow">Core library</p>
      <h2>C++ algorithms &amp; data structures</h2>
      <p>
        File I/O for mzML, mzXML, TraML, mzIdentML, and related formats, plus signal
        processing, identification, and quantification building blocks.
      </p>
      <ul>
        <li>Modular, extensible C++ API</li>
        <li>Cross-platform builds (Windows, macOS, Linux)</li>
        <li>Released under a three-clause BSD license</li>
      </ul>
    </article>
    <article class="governance-card">
      <p class="governance-card__eyebrow">Ecosystem</p>
      <h2>Built on OpenMS-lib</h2>
      <p>
        Most users interact with OpenMS through tools and bindings that share the same core.
      </p>
      <ul>
        <li><strong>TOPP tools</strong> — command-line utilities for proteomics and metabolomics</li>
        <li><strong>pyOpenMS</strong> — Python bindings for scripting and workflows</li>
        <li><strong>Web applications</strong> — <a href="/applications/">community projects</a> on this site</li>
      </ul>
      <p class="governance-card__link">
        <a href="https://github.com/OpenMS/OpenMS" target="_blank" rel="noopener noreferrer">Source on GitHub →</a>
      </p>
    </article>
  </section>
</div>
<div class="openms-lib-page__modules" aria-label="OpenMS capabilities and workflows">
  <div id="what-is-openms" class="openms-lib-page__anchor">
    {{< keyfeatures >}}
  </div>
  <div id="capabilities" class="openms-lib-page__anchor">
    {{< heroitems variant="users" >}}
  </div>
  <div id="developers" class="openms-lib-page__anchor">
    {{< heroitems variant="developers" >}}
  </div>
</div>
<div class="governance-page openms-lib-page__outro">
  <section class="governance-section" id="get-started">
    <h2>Get started developing</h2>
    <p>
      New contributors typically begin with the
      <a href="https://github.com/OpenMS/OpenMS" target="_blank" rel="noopener noreferrer">OpenMS repository</a>
      and its
      <a href="https://github.com/OpenMS/contrib" target="_blank" rel="noopener noreferrer">contrib</a>
      dependency bundle. The wiki and developer guides cover building from source,
      adding a TOPP tool, and following project coding conventions.
    </p>
    <div class="governance-pillars" aria-label="Developer resources">
      <div class="governance-pillar"><a href="https://github.com/OpenMS/OpenMS/wiki/Developer-FAQ" target="_blank" rel="noopener noreferrer">Developer FAQ</a></div>
      <div class="governance-pillar"><a href="https://github.com/OpenMS/OpenMS/wiki/Adding-your-own-tool-to-the-TOPP-suite" target="_blank" rel="noopener noreferrer">Add a TOPP tool</a></div>
      <div class="governance-pillar"><a href="https://github.com/OpenMS/OpenMS/wiki/Cpp-Guide" target="_blank" rel="noopener noreferrer">C++ guide</a></div>
      <div class="governance-pillar"><a href="https://openms.readthedocs.io/en/latest/manual/develop.html" target="_blank" rel="noopener noreferrer">Developer manual</a></div>
      <div class="governance-pillar"><a href="https://pyopenms.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">pyOpenMS docs</a></div>
      <div class="governance-pillar"><a href="/applications/">Browse projects</a></div>
    </div>
    <p class="governance-note">
      See the <a href="/contribute/">contributing guide</a> and
      <a href="/getting-started/develop-your-own-openms-tools/">develop your own OpenMS tools</a>
      for a broader project overview.
    </p>
    <div class="openms-lib-actions">
      <a
        class="openms-step__cta openms-btn-primary"
        href="https://openms.readthedocs.io/en/latest/develop-with-openms/openms-cpp-core-library.html"
        target="_blank"
        rel="noopener noreferrer"
      >C++ library documentation</a>
      <a class="about-cta-btn about-cta-btn--donate" href="https://github.com/OpenMS/OpenMS" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </section>
</div>
</article>
