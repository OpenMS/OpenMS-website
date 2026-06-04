(function () {
  "use strict";

  var RECENT_YEAR_COUNT = 2;

  var root = document.querySelector("[data-publications-year-filter]");
  if (!root) return;

  var selectEl = root.querySelector("[data-publications-year-select]");
  var countEl = root.querySelector("[data-publications-count]");
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

  var recentYears = allYears.slice(0, RECENT_YEAR_COUNT);

  var currentYear = "all";

  function getYearFromUrl() {
    try {
      return new URLSearchParams(window.location.search).get("year");
    } catch (e) {
      return null;
    }
  }

  function setYearInUrl(year) {
    var url = new URL(window.location.href);
    if (!year || year === "all") {
      url.searchParams.delete("year");
    } else {
      url.searchParams.set("year", year);
    }
    window.history.replaceState({}, "", url);
  }

  function updateCount(visible, showAll, year) {
    if (!countEl) return;
    if (showAll) {
      countEl.textContent =
        visible +
        " " +
        (visible === 1 ? "publication" : "publications") +
        " (" +
        recentYears.join(", ") +
        ")";
    } else {
      countEl.textContent =
        visible +
        " " +
        (visible === 1 ? "publication" : "publications") +
        " (" +
        year +
        ")";
    }
  }

  function applyFilter(year) {
    var showAll = !year || year === "all";
    var visible = 0;

    allSections.forEach(function (section) {
      var sectionYear = section.getAttribute("data-publication-year") || "";
      var show = showAll
        ? recentYears.indexOf(sectionYear) !== -1
        : sectionYear === year;
      section.hidden = !show;
      section.setAttribute("aria-hidden", show ? "false" : "true");
      if (show) {
        visible += section.querySelectorAll(".publication-entry").length;
      }
    });

    updateCount(visible, showAll, year);
  }

  function selectYear(year) {
    if (year !== "all" && allYears.indexOf(year) === -1) {
      year = "all";
    }
    currentYear = year;
    selectEl.value = year;
    applyFilter(year);
    setYearInUrl(year);

    if (year !== "all") {
      var target = root.querySelector("#year-" + year);
      if (target && typeof target.scrollIntoView === "function") {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function initYear() {
    var fromUrl = getYearFromUrl();
    if (fromUrl === "all") return "all";
    if (fromUrl && allYears.indexOf(fromUrl) !== -1) {
      return fromUrl;
    }
    return "all";
  }

  selectEl.addEventListener("change", function () {
    selectYear(selectEl.value);
  });

  selectYear(initYear());

  window.addEventListener("popstate", function () {
    selectYear(initYear());
  });
})();
