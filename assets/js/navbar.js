/**
 * Mobile navbar — burger menu, dropdown toggles, backdrop & close on navigate.
 * Switches to mobile layout when the viewport is narrow or when the search icon
 * would overlap the horizontal nav link text.
 */
(function () {
  var MOBILE_MAX = 1023;
  var MOBILE_LAYOUT_CLASS = "navbar-nav--mobile-layout";
  var COLLISION_ENTER_PX = 0;
  var COLLISION_EXIT_PX = 18;
  var menuScrollY = 0;
  var collisionMobile = false;

  function isViewportMobile() {
    return window.matchMedia("(max-width: " + MOBILE_MAX + "px)").matches;
  }

  function isMobileNav() {
    return (
      isViewportMobile() ||
      document.documentElement.getAttribute("data-navbar-layout") === "mobile"
    );
  }

  function isTouchNav() {
    return window.matchMedia("(hover: none), (pointer: coarse)").matches;
  }

  function usesDropdownAccordion() {
    if (isMobileNav()) return false;
    return isTouchNav();
  }

  function usesMobileDrawerAccordion(nav) {
    if (!isMobileNav() || !nav) return false;
    var menu = nav.querySelector(".navbar-menu");
    return menu && menu.classList.contains("is-active");
  }

  function getNavElements() {
    return {
      nav: document.getElementById("nav"),
      clone: document.getElementById("navbar-clone"),
    };
  }

  function getNavCollisionGap(nav) {
    if (!nav) return Number.POSITIVE_INFINITY;

    var links = nav.querySelector(".navbar-links");
    var search = nav.querySelector(".navbar-actions .navbar-search--desktop");
    if (!links || !search) return Number.POSITIVE_INFINITY;

    var linksRect = links.getBoundingClientRect();
    var searchRect = search.getBoundingClientRect();
    var rightmost = linksRect.right;

    links.querySelectorAll(".navbar-link, a.navbar-item").forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.right > rightmost) {
        rightmost = rect.right;
      }
    });

    return searchRect.left - rightmost;
  }

  function setLayoutAttributes(useMobile) {
    var root = document.documentElement;
    var nodes = getNavElements();

    if (useMobile) {
      root.setAttribute("data-navbar-layout", "mobile");
    } else {
      root.removeAttribute("data-navbar-layout");
    }

    [nodes.nav, nodes.clone].forEach(function (el) {
      if (!el) return;
      el.classList.toggle(MOBILE_LAYOUT_CLASS, useMobile);
    });
  }

  function measureDesktopCollision() {
    var nodes = getNavElements();
    if (!nodes.nav) return false;

    var wasMobile = document.documentElement.getAttribute("data-navbar-layout") === "mobile";
    if (wasMobile) {
      setLayoutAttributes(false);
      void nodes.nav.offsetHeight;
    }

    var gap = getNavCollisionGap(nodes.nav);
    var shouldUseMobile;

    if (collisionMobile) {
      shouldUseMobile = gap < COLLISION_EXIT_PX;
    } else {
      shouldUseMobile = gap <= COLLISION_ENTER_PX;
    }

    collisionMobile = shouldUseMobile;
    setLayoutAttributes(shouldUseMobile);
    return shouldUseMobile;
  }

  function updateNavbarLayoutMode() {
    if (isViewportMobile()) {
      collisionMobile = false;
      setLayoutAttributes(true);
      return;
    }

    measureDesktopCollision();
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

  function setDropdownOpen(parent, open) {
    if (!parent) return;
    var link = parent.querySelector(".navbar-link");
    var panel = parent.querySelector(".navbar-dropdown");
    parent.classList.toggle("is-active", open);
    if (link) link.setAttribute("aria-expanded", open ? "true" : "false");
    if (panel) panel.setAttribute("aria-hidden", open ? "false" : "true");
  }

  function closeDropdowns(nav, except) {
    if (!nav) return;
    nav.querySelectorAll(".navbar-item.has-dropdown.is-active").forEach(function (el) {
      if (except && el === except) return;
      setDropdownOpen(el, false);
    });
  }

  function initDropdownPanels(nav) {
    if (!nav) return;
    nav.querySelectorAll(".navbar-item.has-dropdown").forEach(function (parent) {
      var panel = parent.querySelector(".navbar-dropdown");
      if (panel) {
        panel.setAttribute(
          "aria-hidden",
          parent.classList.contains("is-active") ? "false" : "true"
        );
      }
    });
  }

  function updateHeaderHeight() {
    if (document.body.classList.contains("navbar-menu-open")) return;
    var header = document.querySelector(".site-header");
    if (!header) return;
    document.documentElement.style.setProperty(
      "--openms-header-height",
      header.offsetHeight + "px"
    );
    var banner = document.querySelector(".site-header .news-banner");
    var bannerHeight = banner ? banner.offsetHeight : 0;
    document.documentElement.style.setProperty(
      "--openms-news-banner-height",
      bannerHeight + "px"
    );
    var nav = document.getElementById("nav");
    var navHeight = nav ? nav.offsetHeight : Math.max(0, header.offsetHeight - bannerHeight);
    document.documentElement.style.setProperty(
      "--openms-nav-bar-height",
      navHeight + "px"
    );
  }

  function updateScrolledState() {
    var scrolled = (window.scrollY || window.pageYOffset || 0) > 16;
    document.body.classList.toggle("is-scrolled", scrolled);
    var header = document.querySelector(".site-header");
    if (header) header.classList.toggle("is-scrolled", scrolled);
  }

  function captureMenuOffset() {
    var banner = document.querySelector(".site-header .news-banner");
    var bannerHeight = banner ? banner.offsetHeight : 0;
    document.documentElement.style.setProperty(
      "--openms-news-banner-height",
      bannerHeight + "px"
    );
    document.documentElement.style.setProperty(
      "--openms-menu-offset",
      bannerHeight + "px"
    );
  }

  function clearMenuOffset() {
    document.documentElement.style.removeProperty("--openms-menu-offset");
    document.documentElement.style.removeProperty("--openms-news-banner-height");
  }

  function lockBodyScroll() {
    menuScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + menuScrollY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.classList.add("navbar-menu-open");
  }

  function unlockBodyScroll() {
    document.body.classList.remove("navbar-menu-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, menuScrollY);
  }

  function syncMenuAccessibility(nav, open) {
    if (!nav) return;
    var menu = nav.querySelector(".navbar-menu");
    if (!menu) return;

    if (!isMobileNav()) {
      menu.removeAttribute("aria-hidden");
      if ("inert" in menu) {
        menu.inert = false;
      }
      return;
    }

    menu.setAttribute("aria-hidden", open ? "false" : "true");
    if ("inert" in menu) {
      menu.inert = !open;
    }
  }

  function setMenuOpen(nav, open, options) {
    if (!nav) return;

    options = options || {};
    if (open && isMobileNav() && !options.fromBurger) return;
    if (nav.classList.contains("is-menu-open") === open) return;

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
    syncMenuAccessibility(nav, open);

    if (open) {
      closeAllSearch();
      captureMenuOffset();
      lockBodyScroll();
      var scrollHost = menu && menu.querySelector(".navbar-end");
      if (scrollHost) scrollHost.scrollTop = 0;
    } else {
      closeDropdowns(nav);
      unlockBodyScroll();
      clearMenuOffset();
      window.requestAnimationFrame(updateHeaderHeight);
    }
  }

  function closeMobileMenu(nav) {
    setMenuOpen(nav, false);
  }

  function toggleDropdown(nav, parent) {
    var open = parent.classList.contains("is-active");

    closeDropdowns(nav, open ? parent : null);

    if (!open) {
      setDropdownOpen(parent, true);
      var link = parent.querySelector(".navbar-link");
      if (link && typeof link.blur === "function") link.blur();
    } else {
      setDropdownOpen(parent, false);
    }
  }

  function setupNav(nav) {
    if (!nav) return;

    var menu = nav.querySelector(".navbar-menu");
    var burger = nav.querySelector(".navbar-burger");
    var backdrop = nav.querySelector("[data-navbar-backdrop]");

    if (burger && menu) {
      burger.addEventListener(
        "click",
        function (e) {
          if (!isMobileNav()) return;
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          var willOpen = !menu.classList.contains("is-active");
          setMenuOpen(nav, willOpen, { fromBurger: true });
        },
        true
      );
    }

    if (menu) {
      menu.addEventListener(
        "click",
        function (e) {
          if (!isMobileNav()) return;
          if (menu.classList.contains("is-active")) return;
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
        },
        true
      );
    }

    if (backdrop) {
      backdrop.addEventListener("click", function () {
        if (!isMobileNav()) return;
        closeMobileMenu(nav);
      });
    }

    var closeBtn = nav.querySelector(".navbar-menu__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        if (!isMobileNav()) return;
        closeMobileMenu(nav);
      });
    }

    nav.addEventListener("click", function (e) {
      if (usesMobileDrawerAccordion(nav)) {
        if (e.target.closest(".navbar-dropdown a.navbar-item")) return;

        var drawerLink = e.target.closest(
          ".navbar-item.has-dropdown > .navbar-link"
        );
        if (!drawerLink || !nav.contains(drawerLink)) return;

        e.preventDefault();
        e.stopPropagation();

        var drawerParent = drawerLink.closest(".navbar-item.has-dropdown");
        if (drawerParent) toggleDropdown(nav, drawerParent);
        return;
      }

      if (!usesDropdownAccordion()) return;
      if (e.target.closest(".navbar-dropdown a.navbar-item")) return;

      var link = e.target.closest(".navbar-item.has-dropdown > .navbar-link");
      if (!link || !nav.contains(link)) return;

      e.preventDefault();
      e.stopPropagation();

      var parent = link.closest(".navbar-item.has-dropdown");
      if (parent) toggleDropdown(nav, parent);
    });

    if (menu) {
      menu
        .querySelectorAll("a.navbar-item[href], a.navbar-cta-item, .navbar-dropdown a.navbar-item")
        .forEach(function (anchor) {
          anchor.addEventListener("click", function (e) {
            if (!isMobileNav()) return;
            e.stopPropagation();
            closeMobileMenu(nav);
          });
        });
    }
  }

  function onLayoutChange() {
    var nodes = getNavElements();
    updateNavbarLayoutMode();
    updateHeaderHeight();

    closeMobileMenu(nodes.nav);
    closeMobileMenu(nodes.clone);

    syncMenuAccessibility(
      nodes.nav,
      !!(nodes.nav && nodes.nav.classList.contains("is-menu-open"))
    );
    syncMenuAccessibility(
      nodes.clone,
      !!(nodes.clone && nodes.clone.classList.contains("is-menu-open"))
    );

    if (!usesDropdownAccordion()) {
      closeDropdowns(nodes.nav);
      closeDropdowns(nodes.clone);
    }
  }

  var resizeRaf = 0;
  var settleTimer = 0;
  function scheduleLayoutUpdate() {
    // Keep the settling class on for the whole resize gesture (plus a small
    // tail) so breakpoint/collision layout swaps never animate the drawer.
    document.documentElement.classList.add("navbar-layout-settling");
    if (settleTimer) window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(function () {
      settleTimer = 0;
      document.documentElement.classList.remove("navbar-layout-settling");
    }, 200);

    if (resizeRaf) return;
    resizeRaf = window.requestAnimationFrame(function () {
      resizeRaf = 0;
      onLayoutChange();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var nodes = getNavElements();
    setupNav(nodes.nav);
    setupNav(nodes.clone);
    syncMenuAccessibility(nodes.nav, false);
    syncMenuAccessibility(nodes.clone, false);
    initDropdownPanels(nodes.nav);
    initDropdownPanels(nodes.clone);
    updateNavbarLayoutMode();
    updateHeaderHeight();
    updateScrolledState();

    window.addEventListener("scroll", updateScrolledState, { passive: true });
    window.addEventListener("resize", scheduleLayoutUpdate);
    window.addEventListener("orientationchange", scheduleLayoutUpdate);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleLayoutUpdate).catch(function () {});
    }

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !isMobileNav()) return;
      var nav = document.getElementById("nav");
      if (nav && nav.classList.contains("is-menu-open")) {
        closeMobileMenu(nav);
      }
    });
  });
})();
