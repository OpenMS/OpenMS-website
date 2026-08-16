(function () {
  "use strict";

  var root = document.querySelector("[data-sponsor-tiers]");
  if (!root) return;

  var toggles = Array.prototype.slice.call(
    root.querySelectorAll("[data-sponsor-tier]")
  );
  var benefits = root.querySelector("[data-sponsor-benefits-wrap]");
  if (!toggles.length || !benefits) return;

  var switcherBtns = Array.prototype.slice.call(
    root.querySelectorAll("[data-sponsor-benefits-select]")
  );

  var featured = root.querySelector(".sponsor-tier--featured [data-sponsor-tier]");
  var initial =
    (featured && featured.getAttribute("data-sponsor-tier")) ||
    toggles[0].getAttribute("data-sponsor-tier");

  function activate(tierId, options) {
    var opts = options || {};
    benefits.setAttribute("data-active-tier", tierId);
    toggles.forEach(function (toggle) {
      var match = toggle.getAttribute("data-sponsor-tier") === tierId;
      toggle.setAttribute("aria-expanded", match ? "true" : "false");
      toggle
        .closest(".sponsor-tier")
        .classList.toggle("sponsor-tier--active", match);
    });
    switcherBtns.forEach(function (btn) {
      var match = btn.getAttribute("data-sponsor-benefits-select") === tierId;
      btn.classList.toggle("is-active", match);
      btn.setAttribute("aria-selected", match ? "true" : "false");
      btn.tabIndex = match ? 0 : -1;
    });
    if (opts.open) {
      benefits.open = true;
    }
    if (opts.scroll) {
      benefits.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      activate(toggle.getAttribute("data-sponsor-tier"), {
        open: true,
        scroll: true
      });
    });
  });

  switcherBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      activate(btn.getAttribute("data-sponsor-benefits-select"), {
        open: true,
        scroll: false
      });
    });
  });

  activate(initial, { open: false, scroll: false });
})();
