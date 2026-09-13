(function () {
  "use strict";

  var root = document.querySelector("[data-events-year-filter]");
  if (!root) return;

  var selectEl = root.querySelector("[data-events-year-select]");
  var allSections = root.querySelectorAll("[data-events-year]");
  if (!selectEl || !allSections.length) return;

  var allYears = [];
  allSections.forEach(function (section) {
    var year = section.getAttribute("data-events-year");
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

  function applyFilter(year) {
    allSections.forEach(function (section) {
      var sectionYear = section.getAttribute("data-events-year") || "";
      var show = sectionYear === year;
      section.hidden = !show;
      section.setAttribute("aria-hidden", show ? "false" : "true");
    });

    root.setAttribute("data-active-year", year);
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
    var current = selectEl.value;
    selectEl.innerHTML = "";

    allYears.forEach(function (year) {
      var opt = document.createElement("option");
      opt.value = year;
      opt.textContent = year;
      if (year === current) {
        opt.selected = true;
      }
      selectEl.appendChild(opt);
    });
  }

  selectEl.addEventListener("change", function () {
    selectYear(selectEl.value);
  });

  buildSelect();
  selectYear(initYear());
  root.classList.add("events-year-filter--ready");

  window.addEventListener("popstate", function () {
    selectYear(initYear());
  });
})();
