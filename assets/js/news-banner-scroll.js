(function () {
  var header = document.querySelector(".site-header");
  var banner = header && header.querySelector(".news-banner");
  if (!header || !banner) return;

  // Hysteresis instead of a single threshold: collapse only once scrolled
  // well past the banner, and require scrolling back near the top before
  // re-expanding. A single threshold would flip back and forth (and make
  // the navbar visibly shake) whenever scrollY hovers near that point —
  // e.g. momentum/elastic scrolling or a trackpad settling mid-scroll.
  var collapseAt = 64;
  var expandAt = 8;
  var update = function () {
    // While the mobile menu is open, navbar.js locks body scroll by setting
    // position:fixed with a negative top offset — the page's real scroll
    // position doesn't change, but window.scrollY reads back as 0 while
    // that's in effect. Without this guard, opening the burger menu after
    // scrolling down would read y=0 and incorrectly re-expand an already
    // (correctly) hidden banner.
    if (document.body.classList.contains("navbar-menu-open")) return;
    var y = window.scrollY;
    if (y > collapseAt) {
      header.classList.add("has-scrolled");
    } else if (y < expandAt) {
      header.classList.remove("has-scrolled");
    }
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
})();
