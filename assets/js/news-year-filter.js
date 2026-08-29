(function () {
  "use strict";

  var PAGE_SIZE = 5;
  var ALL = "all";

  var root = document.querySelector("[data-news-year-filter]");
  if (!root) return;

  var selectEl = root.querySelector("[data-news-year-select]");
  var listEl = root.querySelector("[data-news-list]");
  if (!selectEl || !listEl) return;

  var entries = Array.prototype.slice.call(
    listEl.querySelectorAll("[data-news-year]")
  );
  if (!entries.length) return;

  var pagerEl = root.querySelector("[data-news-pager]");
  var prevBtn = root.querySelector("[data-news-prev]");
  var nextBtn = root.querySelector("[data-news-next]");
  var statusEl = root.querySelector("[data-news-status]");

  var allYears = [];
  entries.forEach(function (entry) {
    var year = entry.getAttribute("data-news-year");
    if (year && allYears.indexOf(year) === -1) {
      allYears.push(year);
    }
  });
  allYears.sort(function (a, b) {
    return Number(b) - Number(a);
  });

  var currentYear = ALL;
  var currentPage = 0;

  function getYearFromUrl() {
    try {
      return new URLSearchParams(window.location.search).get("year");
    } catch (e) {
      return null;
    }
  }

  function setYearInUrl(year) {
    var url = new URL(window.location.href);
    if (!year || year === ALL) {
      url.searchParams.delete("year");
    } else {
      url.searchParams.set("year", year);
    }
    window.history.replaceState({}, "", url);
  }

  function filteredEntries() {
    if (currentYear === ALL) return entries;
    return entries.filter(function (entry) {
      return entry.getAttribute("data-news-year") === currentYear;
    });
  }

  function render() {
    var visible = filteredEntries();
    var pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
    if (currentPage > pageCount - 1) currentPage = pageCount - 1;
    if (currentPage < 0) currentPage = 0;

    var start = currentPage * PAGE_SIZE;
    var end = start + PAGE_SIZE;

    entries.forEach(function (entry) {
      entry.hidden = true;
    });
    visible.slice(start, end).forEach(function (entry) {
      entry.hidden = false;
    });

    if (pagerEl) {
      pagerEl.hidden = pageCount <= 1;
    }
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage >= pageCount - 1;
    if (statusEl) {
      statusEl.textContent = "Page " + (currentPage + 1) + " of " + pageCount;
    }

    root.setAttribute("data-active-year", currentYear);
  }

  function selectYear(year) {
    if (year !== ALL && allYears.indexOf(year) === -1) {
      year = ALL;
    }
    currentYear = year;
    currentPage = 0;
    selectEl.value = year;
    render();
    setYearInUrl(year);
  }

  function changePage(delta) {
    currentPage += delta;
    render();
    var target = root.querySelector(".news-archive") || root;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function initYear() {
    var fromUrl = getYearFromUrl();
    if (fromUrl && allYears.indexOf(fromUrl) !== -1) {
      return fromUrl;
    }
    return ALL;
  }

  function buildSelect() {
    selectEl.innerHTML = "";

    var allOpt = document.createElement("option");
    allOpt.value = ALL;
    allOpt.textContent = selectEl.getAttribute("data-all-label") || "All years";
    selectEl.appendChild(allOpt);

    allYears.forEach(function (year) {
      var opt = document.createElement("option");
      opt.value = year;
      opt.textContent = year;
      selectEl.appendChild(opt);
    });
  }

  selectEl.addEventListener("change", function () {
    selectYear(selectEl.value);
  });
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      changePage(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      changePage(1);
    });
  }

  buildSelect();
  selectYear(initYear());
  root.classList.add("news-year-filter--ready");

  window.addEventListener("popstate", function () {
    selectYear(initYear());
  });
})();
