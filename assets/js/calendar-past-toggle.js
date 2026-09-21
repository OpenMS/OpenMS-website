(function () {
  "use strict";

  var root = document.querySelector("[data-past-events]");
  if (!root) return;

  var button = root.querySelector("[data-past-toggle]");
  var panel = document.getElementById("calendar-past-panel");
  var label = root.querySelector("[data-past-toggle-label]");
  if (!button || !panel) return;

  function setOpen(open) {
    panel.hidden = !open;
    button.setAttribute("aria-expanded", open ? "true" : "false");
    root.classList.toggle("is-open", open);
    if (label) {
      label.textContent = button.getAttribute(open ? "data-label-open" : "data-label-closed");
    }
  }

  button.addEventListener("click", function () {
    setOpen(panel.hidden);
  });

  /* Deep links: /calendar/#events-year-2024 or #past-events open the list. */
  function openFromHash() {
    var hash = window.location.hash;
    if (hash === "#past-events" || /^#events-year-\d{4}$/.test(hash)) {
      setOpen(true);
      var target = document.querySelector(hash === "#past-events" ? "[data-past-events]" : hash);
      if (target && target.scrollIntoView) target.scrollIntoView();
    }
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
