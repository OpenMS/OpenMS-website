/**
 * Mobile navbar — burger menu, dropdown toggles, backdrop & close on navigate
 */
(function () {
  var MOBILE_MAX = 1279;

  function isMobileNav() {
    return window.matchMedia("(max-width: " + MOBILE_MAX + "px)").matches;
  }

  function closeAllSearch() {
    document.querySelectorAll(".navbar-search.is-open").forEach(function (root) {
      var toggle = root.querySelector(".navbar-search__toggle");
      var panel = root.querySelector(".navbar-search__panel");
      var input = root.querySelector(".navbar-search__input");
      var results = root.querySelector(".navbar-search__results");
      if (!toggle || !panel || !input || !results) return;
      root.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      panel.hidden = true;
      results.hidden = true;
      results.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
    });
  }

  function closeDropdowns(nav) {
    if (!nav) return;
    nav.querySelectorAll(".navbar-item.has-dropdown.is-active").forEach(function (el) {
      el.classList.remove("is-active");
      var link = el.querySelector(".navbar-link");
      if (link) link.setAttribute("aria-expanded", "false");
    });
  }

  function updateHeaderHeight() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    document.documentElement.style.setProperty(
      "--openms-header-height",
      header.offsetHeight + "px"
    );
  }

  function setMenuOpen(nav, open) {
    if (!nav) return;

    var menu = nav.querySelector(".navbar-menu");
    var burger = nav.querySelector(".navbar-burger");
    var backdrop = nav.querySelector("[data-navbar-backdrop]");

    if (menu) menu.classList.toggle("is-active", open);
    if (burger) {
      burger.classList.toggle("is-active", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    }
    if (backdrop) backdrop.hidden = !open;
    nav.classList.toggle("is-menu-open", open);

    if (open) {
      closeAllSearch();
      document.body.classList.add("navbar-menu-open");
      window.requestAnimationFrame(updateHeaderHeight);
    } else {
      closeDropdowns(nav);
      document.body.classList.remove("navbar-menu-open");
      window.requestAnimationFrame(updateHeaderHeight);
    }
  }

  function closeMobileMenu(nav) {
    setMenuOpen(nav, false);
  }

  function setupNav(nav) {
    if (!nav) return;

    var menu = nav.querySelector(".navbar-menu");
    var burger = nav.querySelector(".navbar-burger");
    var backdrop = nav.querySelector("[data-navbar-backdrop]");

    if (burger && menu) {
      burger.addEventListener("click", function (e) {
        if (!isMobileNav()) return;
        e.preventDefault();
        e.stopPropagation();
        /* Theme fresh.js also toggles the burger — prevent double-toggle */
        e.stopImmediatePropagation();

        var willOpen = !menu.classList.contains("is-active");
        setMenuOpen(nav, willOpen);
      });
    }

    if (backdrop) {
      backdrop.addEventListener("click", function () {
        if (!isMobileNav()) return;
        closeMobileMenu(nav);
      });
    }

    nav.querySelectorAll(".navbar-item.has-dropdown > .navbar-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (!isMobileNav()) return;
        e.preventDefault();
        e.stopPropagation();

        var parent = link.closest(".navbar-item.has-dropdown");
        var open = parent.classList.contains("is-active");
        closeDropdowns(nav);
        if (!open) {
          parent.classList.add("is-active");
          link.setAttribute("aria-expanded", "true");
        }
      });
    });

    if (menu) {
      menu.querySelectorAll("a.navbar-item[href], a.navbar-cta-item, .navbar-dropdown a.navbar-item").forEach(function (anchor) {
        anchor.addEventListener("click", function () {
          if (!isMobileNav()) return;
          closeMobileMenu(nav);
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupNav(document.getElementById("nav"));
    setupNav(document.getElementById("navbar-clone"));
    updateHeaderHeight();

    window.addEventListener("resize", function () {
      updateHeaderHeight();
      if (!isMobileNav()) {
        closeMobileMenu(document.getElementById("nav"));
        closeMobileMenu(document.getElementById("navbar-clone"));
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !isMobileNav()) return;
      var nav = document.getElementById("nav");
      if (nav && nav.classList.contains("is-menu-open")) {
        closeMobileMenu(nav);
      }
    });
  });
})();
