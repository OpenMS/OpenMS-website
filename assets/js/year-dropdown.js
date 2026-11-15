/*
  Year dropdown (News and Publications).

  Turns a year <select> marked with data-year-dropdown into a white button
  ("Year · All years") that opens a white panel with "All years" and a grid
  of year buttons. The browser's own select list is grey and cannot be
  styled, so it is hidden; the select stays in the page and still holds the
  chosen year. Picking a year sets the select and fires its "change" event,
  so the page's own filter script (news-year-filter.js,
  publications-year-filter.js) does the filtering, unchanged.

  This file is named so that it loads after those scripts (all files in
  assets/js are joined in name order): their year options already exist.
  Styles: assets/css/overrides/shared-components.css ("Year dropdown").
*/
(function () {
  "use strict";

  var selects = document.querySelectorAll("select[data-year-dropdown]");
  if (!selects.length) return;

  selects.forEach(function (selectEl, n) {
    if (!selectEl.options.length) return;

    var filter = selectEl.closest("label") || selectEl;
    var label = selectEl.getAttribute("data-year-dropdown-label") || "Year";
    var title =
      selectEl.getAttribute("data-year-dropdown-title") || "Show items from";
    var panelId = "year-dd-panel-" + n;

    var wrap = document.createElement("div");
    wrap.className = "year-dd";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "year-dd__btn";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", panelId);
    btn.innerHTML =
      '<i class="far fa-calendar-alt year-dd__icon" aria-hidden="true"></i>' +
      '<span class="year-dd__label"></span>' +
      '<span class="year-dd__value"></span>' +
      '<i class="fas fa-chevron-down year-dd__chevron" aria-hidden="true"></i>';
    btn.querySelector(".year-dd__label").textContent = label;
    var valueEl = btn.querySelector(".year-dd__value");

    var panel = document.createElement("div");
    panel.className = "year-dd__panel";
    panel.id = panelId;
    panel.hidden = true;

    var titleEl = document.createElement("p");
    titleEl.className = "year-dd__title";
    titleEl.textContent = title;
    panel.appendChild(titleEl);

    var grid = document.createElement("div");
    grid.className = "year-dd__grid";
    grid.setAttribute("role", "group");
    grid.setAttribute("aria-label", title);
    panel.appendChild(grid);

    Array.prototype.forEach.call(selectEl.options, function (opt) {
      var item = document.createElement("button");
      item.type = "button";
      item.className = "year-dd__item";
      item.setAttribute("data-value", opt.value);
      item.textContent = opt.textContent;
      grid.appendChild(item);
    });

    wrap.appendChild(btn);
    wrap.appendChild(panel);
    filter.parentNode.insertBefore(wrap, filter.nextSibling);
    filter.hidden = true;

    function refresh() {
      var opt = selectEl.options[selectEl.selectedIndex];
      valueEl.textContent = opt ? opt.textContent : "";
      grid.querySelectorAll(".year-dd__item").forEach(function (item) {
        var active = item.getAttribute("data-value") === selectEl.value;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function open() {
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      wrap.classList.add("is-open");
      var active = grid.querySelector(".is-active") || grid.querySelector("button");
      if (active) active.focus();
    }

    function close(returnFocus) {
      if (panel.hidden) return;
      panel.hidden = true;
      btn.setAttribute("aria-expanded", "false");
      wrap.classList.remove("is-open");
      if (returnFocus) btn.focus();
    }

    btn.addEventListener("click", function () {
      if (panel.hidden) open();
      else close(false);
    });

    grid.addEventListener("click", function (event) {
      var item = event.target.closest(".year-dd__item");
      if (!item) return;
      selectEl.value = item.getAttribute("data-value");
      selectEl.dispatchEvent(new Event("change", { bubbles: true }));
      refresh();
      close(true);
    });

    document.addEventListener("click", function (event) {
      if (!wrap.contains(event.target)) close(false);
    });

    wrap.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      // Arrow keys move between the year buttons.
      var keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"];
      if (panel.hidden || keys.indexOf(event.key) === -1) return;
      var items = Array.prototype.slice.call(grid.querySelectorAll("button"));
      var i = items.indexOf(document.activeElement);
      if (i === -1) return;
      event.preventDefault();
      var last = items[items.length - 1];
      var cols = Math.max(1, Math.round(grid.clientWidth / (last.offsetWidth || 1)));
      var step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols }[event.key];
      items[Math.min(items.length - 1, Math.max(0, i + step))].focus();
    });

    // The page's script may change the year itself (e.g. the browser's Back
    // button): keep the button's text in step.
    selectEl.addEventListener("change", refresh);
    window.addEventListener("popstate", function () {
      window.setTimeout(refresh, 0);
    });

    refresh();
  });
})();
