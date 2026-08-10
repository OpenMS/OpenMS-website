(function () {
  "use strict";

  var root = document.querySelector("[data-sponsor-tiers]");
  if (!root) return;

  var toggles = Array.prototype.slice.call(
    root.querySelectorAll("[data-sponsor-tier]")
  );
  var benefits = root.querySelector("[data-sponsor-benefits-wrap]");
  if (!toggles.length || !benefits) return;

  var featured = root.querySelector(".sponsor-tier--featured [data-sponsor-tier]");
  var initial =
    (featured && featured.getAttribute("data-sponsor-tier")) ||
    toggles[0].getAttribute("data-sponsor-tier");

  function activate(tierId, reveal) {
    benefits.setAttribute("data-active-tier", tierId);
    toggles.forEach(function (toggle) {
      var match = toggle.getAttribute("data-sponsor-tier") === tierId;
      toggle.setAttribute("aria-expanded", match ? "true" : "false");
      toggle
        .closest(".sponsor-tier")
        .classList.toggle("sponsor-tier--active", match);
    });
    if (reveal) {
      benefits.open = true;
      benefits.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      activate(toggle.getAttribute("data-sponsor-tier"), true);
    });
  });

  activate(initial, false);
})();
