(function () {
  var page = document.querySelector(".openms-lib-page--hub");
  if (!page) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function reveal(el) {
    if (!el) return;
    el.classList.add("is-revealed");
  }

  function markReveal(el, index, variant) {
    el.classList.add("openms-lib-hub__reveal");
    if (variant) el.classList.add("openms-lib-hub__reveal--" + variant);
    el.style.setProperty("--hub-reveal-index", String(index));
  }

  page.querySelectorAll(".openms-lib-page__body > .openms-lib-page__anchor > .openms-lib-block").forEach(function (block, index) {
    if (block.closest("#what-is-openms")) return;
    markReveal(block, index);
  });

  var whatIsHead = page.querySelector("#what-is-openms .openms-lib-highlights__head, #what-is-openms .openms-lib-about__head");
  if (whatIsHead) {
    whatIsHead.querySelectorAll(".openms-lib-block__eyebrow, .openms-lib-block__title, .openms-lib-about__eyebrow, .openms-lib-about__title").forEach(function (el, index) {
      markReveal(el, index, "left");
    });
  }

  var whatIsList = page.querySelector("#what-is-openms .openms-lib-highlights__list--facts");
  if (whatIsList) {
    markReveal(whatIsList, 2, "scale");
  }

  page.querySelectorAll("#what-is-openms .openms-lib-highlights__fact").forEach(function (card, index) {
    markReveal(card, index + 3, index % 2 === 0 ? "left" : "right");
  });

  page.querySelectorAll("#what-is-openms .openms-lib-about__tile").forEach(function (tile, index) {
    markReveal(tile, index + 1, index === 0 ? "scale" : index % 2 === 0 ? "left" : "right");
  });

  page.querySelectorAll("#what-is-openms .openms-lib-about__list-item").forEach(function (item, index) {
    markReveal(item, index + 1, index % 2 === 0 ? "scale" : "right");
  });

  page.querySelectorAll(".openms-lib-topp__intro").forEach(function (el) {
    markReveal(el, 0, "left");
  });

  page.querySelectorAll(".openms-lib-topp__feature").forEach(function (el, index) {
    markReveal(el, index + 1, "right");
  });

  page.querySelectorAll(".openms-lib-topp-split__intro").forEach(function (el) {
    markReveal(el, 0, "left");
  });

  page.querySelectorAll(".openms-lib-topp-split__card").forEach(function (el, index) {
    markReveal(el, index + 1, "right");
  });

  var exploreRoutes = page.querySelector(".openms-lib-explore__routes");
  if (exploreRoutes) {
    markReveal(exploreRoutes, 1, "scale");
  }

  page.querySelectorAll(".openms-lib-resources__head").forEach(function (el) {
    markReveal(el, 0, "left");
  });

  page.querySelectorAll(".openms-lib-resources__feature").forEach(function (el) {
    markReveal(el, 0, "left");
  });

  page.querySelectorAll(".openms-lib-resources__item").forEach(function (el, index) {
    markReveal(el, index % 4, index % 2 === 0 ? "right" : "scale");
  });

  page.querySelectorAll(".openms-lib-resources__support").forEach(function (el) {
    markReveal(el, 2, "scale");
  });

  page.querySelectorAll(".openms-lib-developers__card").forEach(function (card, index) {
    markReveal(card, index % 6, index % 3 === 0 ? "scale" : index % 2 === 0 ? "left" : "right");
  });

  var citePanel = page.querySelector(".openms-lib-developers__cite--panel");
  if (citePanel) {
    markReveal(citePanel, 2, "left");
  }

  var outroBlock = page.querySelector(".openms-lib-page__outro .openms-lib-block--developers");
  if (outroBlock && !outroBlock.classList.contains("openms-lib-hub__reveal")) {
    markReveal(outroBlock, 0);
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    page.classList.add("is-hub-ready");
    page.querySelectorAll(".openms-lib-hub__reveal").forEach(reveal);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
  );

  page.classList.add("is-hub-ready");
  page.querySelectorAll(".openms-lib-hub__reveal").forEach(function (el) {
    observer.observe(el);
  });
})();
