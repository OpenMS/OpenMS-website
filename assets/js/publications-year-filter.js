(function () {
  "use strict";

  var root = document.querySelector("[data-publications-year-filter]");
  if (!root) return;

  var selectEl = root.querySelector("[data-publications-year-select]");
  var navEl = root.querySelector("[data-publications-year-nav]");
  var allSections = root.querySelectorAll("[data-publication-year]");
  if (!selectEl || !allSections.length) return;

  var allYears = [];
  allSections.forEach(function (section) {
    var year = section.getAttribute("data-publication-year");
    if (year && allYears.indexOf(year) === -1) {
      allYears.push(year);
    }
  });
  allYears.sort(function (a, b) {
    return Number(b) - Number(a);
  });

  function getYearFromUrl() {
    try {
      return new URLSearchParams(window.location.search).get("year");
    } catch (e) {
      return null;
    }
  }

  function setYearInUrl(year) {
    var url = new URL(window.location.href);
    if (!year || year === allYears[0]) {
      url.searchParams.delete("year");
    } else {
      url.searchParams.set("year", year);
    }
    window.history.replaceState({}, "", url);
  }

  function updateNavActive(year) {
    if (!navEl) return;
    navEl.querySelectorAll("[data-year-filter]").forEach(function (btn) {
      var active = btn.getAttribute("data-year-filter") === year;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyFilter(year) {
    allSections.forEach(function (section) {
      var sectionYear = section.getAttribute("data-publication-year") || "";
      var show = sectionYear === year;
      section.hidden = !show;
      section.setAttribute("aria-hidden", show ? "false" : "true");
    });

    root.setAttribute("data-active-year", year);
    updateNavActive(year);
  }

  function selectYear(year) {
    if (allYears.indexOf(year) === -1) {
      year = allYears[0];
    }
    selectEl.value = year;
    applyFilter(year);
    setYearInUrl(year);
  }

  function initYear() {
    var fromUrl = getYearFromUrl();
    if (fromUrl && allYears.indexOf(fromUrl) !== -1) {
      return fromUrl;
    }
    return allYears[0];
  }

  function buildSelect() {
    selectEl.innerHTML = "";

    allYears.forEach(function (year) {
      var opt = document.createElement("option");
      opt.value = year;
      opt.textContent = year;
      selectEl.appendChild(opt);
    });
  }

  function buildNav() {
    if (!navEl) return;

    function addButton(value, label) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "publications-year-nav__btn";
      btn.setAttribute("data-year-filter", value);
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = label;
      navEl.appendChild(btn);
    }

    allYears.forEach(function (year) {
      addButton(year, year);
    });

    navEl.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-year-filter]");
      if (!btn) return;
      selectYear(btn.getAttribute("data-year-filter"));
    });
  }

  selectEl.addEventListener("change", function () {
    selectYear(selectEl.value);
  });

  buildSelect();
  buildNav();
  selectYear(initYear());
  root.classList.add("publications-year-filter--ready");

  window.addEventListener("popstate", function () {
    selectYear(initYear());
  });
})();
