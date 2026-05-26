/**
 * Mobile navbar — dropdown toggles & close menu on navigate
 */
(function () {
  var MOBILE_MAX = 1023;

  function isMobileNav() {
    return window.matchMedia("(max-width: " + MOBILE_MAX + "px)").matches;
  }

  function closeMenus(nav) {
    if (!nav) return;
    nav.querySelectorAll(".navbar-item.has-dropdown.is-active").forEach(function (el) {
      el.classList.remove("is-active");
    });
  }

  function setupNav(nav) {
    if (!nav) return;

    var menu = nav.querySelector(".navbar-menu");
    var burger = nav.querySelector(".navbar-burger");

    nav.querySelectorAll(".navbar-item.has-dropdown > .navbar-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (!isMobileNav()) return;
        e.preventDefault();
        e.stopPropagation();
        var parent = link.closest(".navbar-item.has-dropdown");
        var open = parent.classList.contains("is-active");
        closeMenus(nav);
        if (!open) parent.classList.add("is-active");
      });
    });

    if (menu) {
      menu.querySelectorAll("a.navbar-item[href], a.navbar-cta-item").forEach(function (anchor) {
        anchor.addEventListener("click", function () {
          if (!isMobileNav()) return;
          menu.classList.remove("is-active");
          if (burger) burger.classList.remove("is-active");
          closeMenus(nav);
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
        closeMenus(document.getElementById("nav"));
        closeMenus(document.getElementById("navbar-clone"));
      }
    });
  });
})();
