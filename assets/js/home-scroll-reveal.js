(function () {
  var page = document.querySelector(".home-page");
  if (!page) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hero = page.querySelector(".home-page__hero");
  var scrollSections = page.querySelectorAll(
    ".home-page__block--partners, .home-page__block--projects, .home-page__block--overview, .home-page__trust, .home-page__cta, .home-page__block--panel, .home-page__block--content"
  );

  var projectsGrid = page.querySelector(".home-page__block--projects .webapps-featured__grid");
  var projectsFooter = page.querySelector(".home-page__block--projects .webapps-featured__footer");
  var projectItems = projectsGrid ? projectsGrid.querySelectorAll(".webapps-featured__item") : [];
  var projectRevealTargets = [];

  projectItems.forEach(function (item) {
    var surface = item.querySelector(".webapps-project-card__surface");
    projectRevealTargets.push({ item: item, observerTarget: surface || item });
  });

  if (projectsFooter) {
    projectRevealTargets.push({ item: projectsFooter, observerTarget: projectsFooter });
  }

  if (hero) {
    hero.querySelectorAll(".hero-home__bento-card").forEach(function (card, index) {
      card.style.setProperty("--hero-reveal-index", String(index));
    });

    hero.querySelectorAll(".hero-home__actions .hero-home__btn").forEach(function (btn, index) {
      btn.style.setProperty("--hero-reveal-index", String(index));
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

  function revealHero() {
    if (hero) hero.classList.add("is-revealed");
  }

  function revealAll() {
    revealHero();
    scrollSections.forEach(reveal);
    revealProjectCards();
  }

  page.classList.add("home-page--motion");

  if (prefersReducedMotion) {
    revealAll();
    return;
  }

  if (hero) {
    window.setTimeout(revealHero, 80);
  }

  if (!("IntersectionObserver" in window)) {
    scrollSections.forEach(reveal);
    revealProjectCards();
    window.addEventListener("scroll", revealProjectCardsInView, { passive: true });
    window.addEventListener("resize", revealProjectCardsInView, { passive: true });
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

  var scrollTicking = false;

  function onScrollOrResize() {
    if (scrollTicking) return;
    scrollTicking = true;

    window.requestAnimationFrame(function () {
      revealProjectCardsInView();
      scrollTicking = false;
    });
  }

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });

  revealProjectCardsInView();
  window.setTimeout(revealProjectCardsInView, 120);
})();
