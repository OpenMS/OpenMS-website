/**
 * Mobile navbar — burger menu, dropdown toggles & close on navigate
 */
(function () {
  var MOBILE_MAX = 1023;

  function isMobileNav() {
    return window.matchMedia("(max-width: " + MOBILE_MAX + "px)").matches;
  }

  function closeDropdowns(nav) {
    if (!nav) return;
    nav.querySelectorAll(".navbar-item.has-dropdown.is-active").forEach(function (el) {
      el.classList.remove("is-active");
      var link = el.querySelector(".navbar-link");
      if (link) link.setAttribute("aria-expanded", "false");
    });
  }

  function closeMobileMenu(nav) {
    if (!nav) return;
    var menu = nav.querySelector(".navbar-menu");
    var burger = nav.querySelector(".navbar-burger");
    if (menu) menu.classList.remove("is-active");
    if (burger) {
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
    }
    closeDropdowns(nav);
  }

  function setupNav(nav) {
    if (!nav) return;

    var menu = nav.querySelector(".navbar-menu");
    var burger = nav.querySelector(".navbar-burger");

    if (burger && menu) {
      burger.addEventListener("click", function (e) {
        if (!isMobileNav()) return;
        e.preventDefault();
        e.stopPropagation();
        /* Theme fresh.js also toggles the burger — prevent double-toggle */
        e.stopImmediatePropagation();

        var willOpen = !menu.classList.contains("is-active");
        menu.classList.toggle("is-active", willOpen);
        burger.classList.toggle("is-active", willOpen);
        burger.setAttribute("aria-expanded", willOpen ? "true" : "false");

        if (!willOpen) {
          closeDropdowns(nav);
        } else {
          updateHeaderHeight();
        }
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
      menu.querySelectorAll("a.navbar-item[href], a.navbar-cta-item").forEach(function (anchor) {
        anchor.addEventListener("click", function () {
          if (!isMobileNav()) return;
          closeMobileMenu(nav);
        });
      });
    }
  }

  function updateHeaderHeight() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    document.documentElement.style.setProperty(
      "--openms-header-height",
      header.offsetHeight + "px"
    );
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
  });
})();
