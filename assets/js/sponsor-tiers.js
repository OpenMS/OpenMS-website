(function () {
  "use strict";

  var root = document.querySelector("[data-sponsor-tiers]");
  if (!root) return;

  var toggles = Array.prototype.slice.call(
    root.querySelectorAll("[data-sponsor-tier]")
  );
  var benefits = root.querySelector("[data-sponsor-benefits-wrap]");
  if (!toggles.length || !benefits) return;

  var switcher = root.querySelector("[data-sponsor-benefits-select]");
  var colHeaders = Array.prototype.slice.call(
    benefits.querySelectorAll("[data-sponsor-benefits-col]")
  );
  var tierCells = Array.prototype.slice.call(
    benefits.querySelectorAll("[data-sponsor-benefits]")
  );

  var featured = root.querySelector(".sponsor-tier--featured [data-sponsor-tier]");
  var initial =
    (featured && featured.getAttribute("data-sponsor-tier")) ||
    toggles[0].getAttribute("data-sponsor-tier");

  function activate(tierId, options) {
    var opts = options || {};
    benefits.setAttribute("data-active-tier", tierId);
    benefits.removeAttribute("data-hover-tier");

    toggles.forEach(function (toggle) {
      var match = toggle.getAttribute("data-sponsor-tier") === tierId;
      toggle.setAttribute("aria-expanded", match ? "true" : "false");
      toggle
        .closest(".sponsor-tier")
        .classList.toggle("sponsor-tier--active", match);
    });

    colHeaders.forEach(function (header) {
      var match = header.getAttribute("data-sponsor-benefits") === tierId;
      header.setAttribute("aria-pressed", match ? "true" : "false");
    });

    if (switcher && switcher.value !== tierId) {
      switcher.value = tierId;
    }
    if (opts.open) {
      benefits.open = true;
    }
    if (opts.scroll) {
      benefits.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function setHoverTier(tierId) {
    if (!tierId) {
      benefits.removeAttribute("data-hover-tier");
      return;
    }
    benefits.setAttribute("data-hover-tier", tierId);
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      activate(toggle.getAttribute("data-sponsor-tier"), {
        open: true,
        scroll: true
      });
    });
  });

  if (switcher) {
    switcher.addEventListener("change", function () {
      activate(switcher.value, {
        open: true,
        scroll: false
      });
    });
  }

  colHeaders.forEach(function (header) {
    var tierId = header.getAttribute("data-sponsor-benefits");
    header.addEventListener("click", function () {
      activate(tierId, { open: true, scroll: false });
    });
    header.addEventListener("mouseenter", function () {
      setHoverTier(tierId);
    });
    header.addEventListener("mouseleave", function () {
      setHoverTier(null);
    });
    header.addEventListener("focus", function () {
      setHoverTier(tierId);
    });
    header.addEventListener("blur", function () {
      setHoverTier(null);
    });
  });

  tierCells.forEach(function (cell) {
    if (cell.hasAttribute("data-sponsor-benefits-col")) return;
    var tierId = cell.getAttribute("data-sponsor-benefits");
    cell.addEventListener("mouseenter", function () {
      setHoverTier(tierId);
    });
    cell.addEventListener("mouseleave", function () {
      setHoverTier(null);
    });
    cell.addEventListener("click", function () {
      activate(tierId, { open: true, scroll: false });
    });
  });

  activate(initial, { open: true, scroll: false });

  /* Keep Benefit comparison permanently open */
  benefits.open = true;
  benefits.addEventListener("toggle", function () {
    if (!benefits.open) benefits.open = true;
  });
})();
