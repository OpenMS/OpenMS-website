(function () {
  var header = document.querySelector(".site-header");
  var banner = header && header.querySelector(".news-banner");
  if (!header || !banner) return;

  var threshold = 24;
  var update = function () {
    header.classList.toggle("has-scrolled", window.scrollY > threshold);
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
})();
