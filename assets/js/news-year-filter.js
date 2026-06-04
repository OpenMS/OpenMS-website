(function () {
  "use strict";

  var root = document.querySelector("[data-news-year-filter]");
  if (!root) return;

  var buttons = root.querySelectorAll("[data-news-year-btn]");
  var items = root.querySelectorAll(".news-card[data-news-year]");
  var headings = root.querySelectorAll("[data-news-year-heading]");
  var emptyEl = root.querySelector("[data-news-empty]");
  var countEl = root.querySelector("[data-news-count]");
  var total = items.length;

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

  function setActiveButton(year) {
    buttons.forEach(function (btn) {
      var value = btn.getAttribute("data-news-year-btn");
      var active = value === year || (year === "all" && value === "all");
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function applyFilter(year) {
    var showAll = !year || year === "all";
    var visible = 0;

    items.forEach(function (item) {
      var itemYear = item.getAttribute("data-news-year") || "";
      var show = showAll || itemYear === year;
      if (show) {
        item.removeAttribute("data-news-hidden");
      } else {
        item.setAttribute("data-news-hidden", "true");
      }
      if (show) visible += 1;
    });

    headings.forEach(function (heading) {
      var headingYear = heading.getAttribute("data-news-year-heading") || "";
      var showHeading = showAll || headingYear === year;
      heading.hidden = !showHeading;
    });

    if (emptyEl) {
      emptyEl.hidden = showAll || visible > 0;
    }

    if (countEl) {
      if (showAll) {
        countEl.textContent = total + " " + (total === 1 ? "article" : "articles");
      } else {
        countEl.textContent =
          visible + " of " + total + " " + (total === 1 ? "article" : "articles");
      }
    }
  }

  function selectYear(year) {
    var value = year || "all";
    setActiveButton(value);
    applyFilter(value);
    setYearInUrl(value);
  }

  function initYear() {
    var fromUrl = getYearFromUrl();
    if (fromUrl) {
      var match = root.querySelector('[data-news-year-btn="' + fromUrl + '"]');
      if (match) return fromUrl;
    }
    var active = root.querySelector(".news-page__year-btn.is-active");
    if (active) {
      return active.getAttribute("data-news-year-btn") || "all";
    }
    var fallback = root.getAttribute("data-news-default-year");
    return fallback || "all";
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectYear(btn.getAttribute("data-news-year-btn"));
    });
  });

  selectYear(initYear());

  window.addEventListener("popstate", function () {
    selectYear(getYearFromUrl() || "all");
  });
})();
