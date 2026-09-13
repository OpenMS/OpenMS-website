(function () {
  var page = document.querySelector(".home-page");
  if (!page) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hero = page.querySelector(".home-page__hero");
  var scrollSections = page.querySelectorAll(
    ".home-page__block--projects, .home-page__block--partners, .home-page__block--ecosystem, .home-page__block--overview, .home-page__cta, .home-page__block--panel, .home-page__block--content"
  );

  var projectsGrid = page.querySelector(".home-page__block--projects .webapps-featured__grid");
  var projectsFooter = page.querySelector(".home-page__block--projects .webapps-featured__footer");
  var projectItems = projectsGrid ? projectsGrid.querySelectorAll(".webapps-featured__item") : [];
  var projectRevealTargets = [];
  var ecosystemItems = page.querySelectorAll(".home-page__block--ecosystem .ecosystem-home__item");
  var ecosystemRevealTargets = [];

  projectItems.forEach(function (item) {
    var surface = item.querySelector(".webapps-project-card__surface");
    projectRevealTargets.push({ item: item, observerTarget: surface || item });
  });

  ecosystemItems.forEach(function (item, index) {
    var card = item.querySelector(".ecosystem-home__card");
    item.style.setProperty("--ecosystem-reveal-index", String(index));
    ecosystemRevealTargets.push({ item: item, observerTarget: card || item });
  });

  if (projectsFooter) {
    projectRevealTargets.push({ item: projectsFooter, observerTarget: projectsFooter });
  }

  var metricsSection = page.querySelector(".home-page__block--metrics");

  if (hero) {
    hero.querySelectorAll(".hero-home__actions .hero-home__btn").forEach(function (btn, index) {
      btn.style.setProperty("--hero-reveal-index", String(index));
    });
  }

  if (metricsSection) {
    metricsSection.querySelectorAll(".home-metrics__card").forEach(function (card, index) {
      card.style.setProperty("--metrics-reveal-index", String(index));
    });
  }

  function revealElement(el) {
    if (!el) return;
    el.classList.add("is-revealed");
  }

  function reveal(el) {
    revealElement(el);
    if (el.classList.contains("home-page__block--projects")) {
      revealProjectCardsInView();
    }
    if (el.classList.contains("home-page__block--ecosystem")) {
      revealEcosystemCardsInView();
    }
  }

  function isRevealTargetInView(target) {
    var rect = target.getBoundingClientRect();
    var viewport = window.innerHeight || document.documentElement.clientHeight;
    var topInset = viewport * 0.08;
    var bottomInset = viewport * 0.05;

    return rect.bottom > topInset && rect.top < viewport - bottomInset;
  }

  function revealProjectCardsInView() {
    projectRevealTargets.forEach(function (entry) {
      if (entry.item.classList.contains("is-revealed")) return;
      if (isRevealTargetInView(entry.observerTarget)) {
        revealElement(entry.item);
      }
    });
  }

  function revealProjectCards() {
    projectRevealTargets.forEach(function (entry) {
      revealElement(entry.item);
    });
  }

  function revealEcosystemCardsInView() {
    ecosystemRevealTargets.forEach(function (entry) {
      if (entry.item.classList.contains("is-revealed")) return;
      if (isRevealTargetInView(entry.observerTarget)) {
        revealElement(entry.item);
      }
    });
  }

  function revealEcosystemCards() {
    ecosystemRevealTargets.forEach(function (entry) {
      revealElement(entry.item);
    });
  }

  function revealHero() {
    if (hero) hero.classList.add("is-revealed");
  }

  function revealMetrics() {
    if (metricsSection) metricsSection.classList.add("is-revealed");
  }

  function revealAll() {
    revealHero();
    revealMetrics();
    scrollSections.forEach(reveal);
    revealProjectCards();
    revealEcosystemCards();
  }

  page.classList.add("home-page--motion");

  if (prefersReducedMotion) {
    revealAll();
    return;
  }

  if (hero) {
    window.setTimeout(function () {
      revealHero();
      revealMetrics();
    }, 80);
  } else {
    revealMetrics();
  }

  if (!("IntersectionObserver" in window)) {
    scrollSections.forEach(reveal);
    revealProjectCards();
    revealEcosystemCards();
    window.addEventListener("scroll", function () {
      revealProjectCardsInView();
      revealEcosystemCardsInView();
    }, { passive: true });
    window.addEventListener("resize", function () {
      revealProjectCardsInView();
      revealEcosystemCardsInView();
    }, { passive: true });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -7% 0px", threshold: 0.1 }
  );

  var cardObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var match = projectRevealTargets.find(function (target) {
          return target.observerTarget === entry.target;
        });

        if (match) {
          revealElement(match.item);
          cardObserver.unobserve(entry.target);
          return;
        }

        var ecosystemMatch = ecosystemRevealTargets.find(function (target) {
          return target.observerTarget === entry.target;
        });

        if (ecosystemMatch) {
          revealElement(ecosystemMatch.item);
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -5% 0px", threshold: 0 }
  );

  scrollSections.forEach(function (section) {
    observer.observe(section);
  });

  projectRevealTargets.forEach(function (entry) {
    cardObserver.observe(entry.observerTarget);
  });

  ecosystemRevealTargets.forEach(function (entry) {
    cardObserver.observe(entry.observerTarget);
  });

  var scrollTicking = false;

  function onScrollOrResize() {
    if (scrollTicking) return;
    scrollTicking = true;

    window.requestAnimationFrame(function () {
      revealProjectCardsInView();
      revealEcosystemCardsInView();
      scrollTicking = false;
    });
  }

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });

  revealProjectCardsInView();
  revealEcosystemCardsInView();
  window.setTimeout(function () {
    revealProjectCardsInView();
    revealEcosystemCardsInView();
  }, 120);
})();
