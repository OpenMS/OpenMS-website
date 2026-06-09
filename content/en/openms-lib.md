---
title: OpenMS-lib
hidePageTitle: true
hideShortcuts: true
sidebar: false
---

<article class="openms-lib-page">
<div class="openms-lib-page__intro">
  <header class="openms-lib-hero" aria-label="OpenMS C++ core library">
    <div class="openms-lib-hero__panel">
    <div class="openms-lib-hero__content">
      <p class="openms-lib-hero__eyebrow">Infrastructure</p>
      <h1 class="openms-lib-hero__title">
        Built for <span class="openms-lib-hero__accent">mass spectrometry</span>, powered by <span class="openms-lib-hero__accent openms-lib-hero__accent--warm">open source</span>.
      </h1>
      <p class="openms-lib-hero__lead">
        OpenMS-lib is the BSD-licensed C++ foundation behind TOPP tools, pyOpenMS, and community
        software—for LC-MS data management, analysis, and visualization.
      </p>
      <ul class="openms-lib-hero__chips" aria-label="Key facts">
        <li class="openms-lib-hero__chip">BSD-3 license</li>
        <li class="openms-lib-hero__chip">C++ &amp; Python</li>
        <li class="openms-lib-hero__chip">Cross-platform</li>
        <li class="openms-lib-hero__chip">200+ TOPP tools</li>
      </ul>
      <div class="openms-lib-hero__actions" aria-label="Primary actions">
        <a
          class="openms-lib-btn openms-lib-btn--primary"
          href="https://openms.readthedocs.io/en/latest/develop-with-openms/openms-cpp-core-library.html"
          target="_blank"
          rel="noopener noreferrer"
        >C++ documentation</a>
        <a
          class="openms-lib-btn openms-lib-btn--ghost"
          href="https://pyopenms.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
        >pyOpenMS</a>
        <a
          class="openms-lib-btn openms-lib-btn--ghost"
          href="#get-started"
        >Build from source</a>
      </div>
    </div>
    </div>
  </header>
  <section class="openms-lib-block openms-lib-block--overview" id="overview">
    <header class="openms-lib-block__head">
      <p class="openms-lib-block__eyebrow">At a glance</p>
      <h2 class="openms-lib-block__title">Core library &amp; ecosystem</h2>
      <p class="openms-lib-block__lead">
        One C++ core powers command-line tools, Python bindings, and community web apps.
      </p>
    </header>
    <div class="openms-lib-list openms-lib-list--split" aria-label="OpenMS library overview">
      <article class="openms-lib-list__row">
        <div class="openms-lib-list__media openms-lib-feature-icon" aria-hidden="true"><span class="openms-lib-list__mark">C</span></div>
        <div class="openms-lib-list__body">
          <div class="openms-lib-list__tags"><span class="openms-lib-list__tag">Core library</span></div>
          <h3 class="openms-lib-list__title">C++ algorithms &amp; data structures</h3>
          <p class="openms-lib-list__text">
            File I/O for mzML, mzXML, TraML, mzIdentML, and related formats, plus signal
            processing, identification, and quantification building blocks.
          </p>
          <ul class="openms-lib-list__bullets">
            <li>Modular, extensible C++ API</li>
            <li>Cross-platform (Windows, macOS, Linux)</li>
            <li>Three-clause BSD license</li>
          </ul>
        </div>
      </article>
      <article class="openms-lib-list__row">
        <div class="openms-lib-list__media openms-lib-feature-icon" aria-hidden="true"><span class="openms-lib-list__mark">E</span></div>
        <div class="openms-lib-list__body">
          <div class="openms-lib-list__tags"><span class="openms-lib-list__tag">Ecosystem</span></div>
          <h3 class="openms-lib-list__title">Built on OpenMS-lib</h3>
          <p class="openms-lib-list__text">
            Most users interact with OpenMS through tools and bindings that share the same core.
          </p>
          <ul class="openms-lib-list__bullets">
            <li><strong>TOPP tools</strong> — command-line utilities</li>
            <li><strong>pyOpenMS</strong> — Python bindings</li>
            <li><strong>Web apps</strong> — <a href="/applications/">community projects</a></li>
          </ul>
          <a class="openms-lib-list__link" href="https://github.com/OpenMS/OpenMS" target="_blank" rel="noopener noreferrer">Source on GitHub<span aria-hidden="true"> →</span></a>
        </div>
      </article>
    </div>
  </section>
</div>
<div class="openms-lib-page__body" aria-label="OpenMS capabilities and workflows">
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
<div class="openms-lib-page__outro">
  <section class="openms-lib-block openms-lib-block--resources" id="get-started">
    <header class="openms-lib-block__head">
      <p class="openms-lib-block__eyebrow">Get started</p>
      <h2 class="openms-lib-block__title">Start building with OpenMS-lib</h2>
      <p class="openms-lib-block__lead">
        Clone the
        <a href="https://github.com/OpenMS/OpenMS" target="_blank" rel="noopener noreferrer">OpenMS repository</a>
        and
        <a href="https://github.com/OpenMS/contrib" target="_blank" rel="noopener noreferrer">contrib</a>
        bundle, then follow the wiki and developer guides to build from source.
      </p>
    </header>
    <div class="openms-lib-list openms-lib-list--resource-grid" aria-label="Developer resources">
      <a class="openms-lib-list__row openms-lib-resource-card" href="https://github.com/OpenMS/OpenMS/wiki/Developer-FAQ" target="_blank" rel="noopener noreferrer">
        <div class="openms-lib-list__media" aria-hidden="true"><span class="openms-lib-list__mark">?</span></div>
        <div class="openms-lib-list__body">
          <span class="openms-lib-list__tag openms-lib-resource-card__tag">Wiki</span>
          <h3 class="openms-lib-list__title">Developer FAQ</h3>
          <p class="openms-lib-list__text">Common setup, build, and contribution questions.</p>
          <span class="openms-lib-list__link">Read FAQ<span aria-hidden="true"> →</span></span>
        </div>
      </a>
      <a class="openms-lib-list__row openms-lib-resource-card" href="https://github.com/OpenMS/OpenMS/wiki/Adding-your-own-tool-to-the-TOPP-suite" target="_blank" rel="noopener noreferrer">
        <div class="openms-lib-list__media" aria-hidden="true"><span class="openms-lib-list__mark">T</span></div>
        <div class="openms-lib-list__body">
          <span class="openms-lib-list__tag openms-lib-resource-card__tag">TOPP</span>
          <h3 class="openms-lib-list__title">Add a TOPP tool</h3>
          <p class="openms-lib-list__text">Add your own tool to the TOPP suite.</p>
          <span class="openms-lib-list__link">Add a tool<span aria-hidden="true"> →</span></span>
        </div>
      </a>
      <a class="openms-lib-list__row openms-lib-resource-card" href="https://github.com/OpenMS/OpenMS/wiki/Cpp-Guide" target="_blank" rel="noopener noreferrer">
        <div class="openms-lib-list__media" aria-hidden="true"><span class="openms-lib-list__mark">C</span></div>
        <div class="openms-lib-list__body">
          <span class="openms-lib-list__tag openms-lib-resource-card__tag">C++</span>
          <h3 class="openms-lib-list__title">C++ guide</h3>
          <p class="openms-lib-list__text">Coding conventions for OpenMS C++.</p>
          <span class="openms-lib-list__link">C++ guide<span aria-hidden="true"> →</span></span>
        </div>
      </a>
      <a class="openms-lib-list__row openms-lib-resource-card" href="https://openms.readthedocs.io/en/latest/manual/develop.html" target="_blank" rel="noopener noreferrer">
        <div class="openms-lib-list__media" aria-hidden="true"><span class="openms-lib-list__mark">D</span></div>
        <div class="openms-lib-list__body">
          <span class="openms-lib-list__tag openms-lib-resource-card__tag">Docs</span>
          <h3 class="openms-lib-list__title">Developer manual</h3>
          <p class="openms-lib-list__text">Official build and extension docs.</p>
          <span class="openms-lib-list__link">Developer manual<span aria-hidden="true"> →</span></span>
        </div>
      </a>
      <a class="openms-lib-list__row openms-lib-resource-card" href="https://pyopenms.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
        <div class="openms-lib-list__media" aria-hidden="true"><span class="openms-lib-list__mark">P</span></div>
        <div class="openms-lib-list__body">
          <span class="openms-lib-list__tag openms-lib-resource-card__tag">pyOpenMS</span>
          <h3 class="openms-lib-list__title">Python bindings</h3>
          <p class="openms-lib-list__text">Script workflows with pyOpenMS.</p>
          <span class="openms-lib-list__link">pyOpenMS docs<span aria-hidden="true"> →</span></span>
        </div>
      </a>
      <a class="openms-lib-list__row openms-lib-resource-card" href="/applications/">
        <div class="openms-lib-list__media" aria-hidden="true"><span class="openms-lib-list__mark">A</span></div>
        <div class="openms-lib-list__body">
          <span class="openms-lib-list__tag openms-lib-resource-card__tag">Community</span>
          <h3 class="openms-lib-list__title">Browse projects</h3>
          <p class="openms-lib-list__text">Community web apps built on OpenMS.</p>
          <span class="openms-lib-list__link">Browse projects<span aria-hidden="true"> →</span></span>
        </div>
      </a>
    </div>
    <aside class="openms-lib-block__note">
      <p>
        See the <a href="/contribute/">contributing guide</a> and
        <a href="/getting-started/develop-your-own-openms-tools/">develop your own OpenMS tools</a>
        for a broader overview, or jump straight to the
        <a href="https://openms.readthedocs.io/en/latest/develop-with-openms/openms-cpp-core-library.html" target="_blank" rel="noopener noreferrer">C++ library documentation</a>
        and
        <a href="https://github.com/OpenMS/OpenMS" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
      </p>
    </aside>
    <div class="openms-lib-page__cta" aria-label="Next steps">
      <p class="openms-lib-page__cta-text">Ready to contribute or extend OpenMS?</p>
      <div class="openms-lib-page__cta-actions">
        <a class="openms-lib-btn openms-lib-btn--navy" href="https://github.com/OpenMS/OpenMS" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a class="openms-lib-btn openms-lib-btn--outline" href="/contribute/">Contribute</a>
      </div>
    </div>
  </section>
</div>
</article>
