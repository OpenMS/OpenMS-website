(function () {
  "use strict";

  var ALL = "all";
  var PAGE_SIZE = 10;

  var root = document.querySelector("[data-publications-year-filter]");
  if (!root) return;

  var selectEl = root.querySelector("[data-publications-year-select]");
  var navEl = root.querySelector("[data-publications-year-nav]");
  var allSections = root.querySelectorAll("[data-publication-year]");
  if (!selectEl || !allSections.length) return;

  var allEntries = Array.prototype.slice.call(
    root.querySelectorAll(".publication-entry")
  );
  if (!allEntries.length) return;

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

  var currentYear = ALL;
  var visibleLimit = PAGE_SIZE;

  var entriesWrap = root.querySelector(".publications-bibliography__entries");
  var moreWrap = document.createElement("div");
  moreWrap.className = "publications-more";
  moreWrap.setAttribute("data-publications-more", "");
  moreWrap.hidden = true;

  var moreBtn = document.createElement("button");
  moreBtn.type = "button";
  moreBtn.className = "openms-cta-link publications-more__btn";
  moreBtn.setAttribute("data-publications-show-more", "");
  moreBtn.innerHTML = 'Show more<span class="publications-more__arrow" aria-hidden="true">\u2192</span>';
  moreWrap.appendChild(moreBtn);

  if (entriesWrap && entriesWrap.parentNode) {
    entriesWrap.parentNode.insertBefore(moreWrap, entriesWrap.nextSibling);
  } else {
    root.appendChild(moreWrap);
  }

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

  function updateNavActive(year) {
    if (!navEl) return;
    navEl.querySelectorAll("[data-year-filter]").forEach(function (btn) {
      var active = btn.getAttribute("data-year-filter") === year;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function filteredEntries(year) {
    var showAll = !year || year === ALL;
    if (showAll) return allEntries;
    return allEntries.filter(function (entry) {
      var section = entry.closest("[data-publication-year]");
      return (
        section && section.getAttribute("data-publication-year") === year
      );
    });
  }

  function render() {
    var showAll = !currentYear || currentYear === ALL;
    var matched = filteredEntries(currentYear);
    var remaining = Math.max(0, matched.length - visibleLimit);

    allEntries.forEach(function (entry) {
      entry.hidden = true;
    });

    matched.slice(0, visibleLimit).forEach(function (entry) {
      entry.hidden = false;
    });

    allSections.forEach(function (section) {
      var sectionYear = section.getAttribute("data-publication-year") || "";
      var inYear = showAll || sectionYear === currentYear;
      var hasVisible = false;
      if (inYear) {
        section.querySelectorAll(".publication-entry").forEach(function (entry) {
          if (!entry.hidden) hasVisible = true;
        });
      }
      var show = inYear && hasVisible;
      section.hidden = !show;
      section.setAttribute("aria-hidden", show ? "false" : "true");
    });

    root.setAttribute("data-active-year", showAll ? ALL : currentYear);
    updateNavActive(showAll ? ALL : currentYear);
    if (ddValue) {
      ddValue.textContent = showAll
        ? selectEl.getAttribute("data-all-label") || "All years"
        : currentYear;
    }

    moreWrap.hidden = remaining <= 0;
    if (remaining > 0) {
      moreBtn.innerHTML =
        (remaining === 1 ? "Show 1 more" : "Show more") +
        '<span class="publications-more__arrow" aria-hidden="true">\u2192</span>';
      moreBtn.setAttribute(
        "aria-label",
        "Show more publications (" + remaining + " remaining)"
      );
    }
  }

  function selectYear(year) {
    if (year !== ALL && allYears.indexOf(year) === -1) {
      year = ALL;
    }
    currentYear = year;
    visibleLimit = PAGE_SIZE;
    selectEl.value = year;
    setYearInUrl(year);
    render();
  }

  function showMore() {
    visibleLimit += PAGE_SIZE;
    render();
  }

  function initYear() {
    var fromUrl = getYearFromUrl();
    if (fromUrl === ALL) return ALL;
    if (fromUrl && allYears.indexOf(fromUrl) !== -1) {
      return fromUrl;
    }
    return ALL;
  }

  function buildSelect() {
    selectEl.innerHTML = "";

    var allOpt = document.createElement("option");
    allOpt.value = ALL;
    allOpt.textContent =
      selectEl.getAttribute("data-all-label") || "All years";
    selectEl.appendChild(allOpt);

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

    addButton(ALL, selectEl.getAttribute("data-all-label") || "All years");
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

  moreBtn.addEventListener("click", showMore);

  function splitAuthors(raw) {
    var text = (raw || "").replace(/\s+/g, " ").trim();
    if (!text) return [];

    // "Last, First; Last, First" vs "Last I, Last I, …"
    var parts = text.indexOf(";") !== -1 ? text.split(";") : text.split(",");
    var authors = [];
    for (var i = 0; i < parts.length; i++) {
      var name = parts[i].replace(/\s+/g, " ").trim();
      if (name) authors.push(name);
    }
    return authors;
  }

  function truncateAuthors() {
    var LIMIT = 7;
    var nodes = root.querySelectorAll(".publication-authors");
    nodes.forEach(function (el) {
      if (el.getAttribute("data-authors-truncated") === "1") return;

      var authors = splitAuthors(el.textContent);
      if (authors.length <= LIMIT) {
        el.setAttribute("data-authors-truncated", "1");
        return;
      }

      // More than 7 authors: the first ones, "...", then always the last
      // author. Up to 7 come first, but at least one name is hidden (with 8
      // authors: 6, "...", the last).
      var sep = el.textContent.indexOf(";") !== -1 ? "; " : ", ";
      var last = authors[authors.length - 1];
      var rest = authors.slice(0, -1);
      var shown = Math.min(LIMIT, rest.length - 1);

      var visible = rest.slice(0, shown);
      var more = rest.length - shown;

      el.textContent = "";
      el.appendChild(document.createTextNode(visible.join(sep) + " "));

      var chip = document.createElement("span");
      chip.className = "publications-cite-card__authors-more";
      chip.title =
        authors.length + " authors total · " + more + " more not shown";
      chip.textContent = "...";
      el.appendChild(chip);
      el.appendChild(document.createTextNode(sep + last));
      el.setAttribute("data-authors-truncated", "1");
    });
  }

  /* Year dropdown: a button that opens a white panel with "All years" and
     a grid of year buttons (the year buttons built by buildNav). It replaces
     the browser's own select list, whose grey menu cannot be styled. The
     select stays in the page (hidden) and keeps the chosen year. */
  var ddValue = null;

  function buildDropdown() {
    var toolbar = selectEl.closest(".publications-toolbar");
    var filter = selectEl.closest(".publications-toolbar__filter");
    if (!toolbar || !navEl) return;

    var wrap = document.createElement("div");
    wrap.className = "publications-year-dd";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "publications-year-dd__btn";
    btn.id = "publications-year-dd-btn";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "publications-year-dd-panel");
    btn.innerHTML =
      '<i class="far fa-calendar-alt publications-year-dd__icon" aria-hidden="true"></i>' +
      '<span class="publications-year-dd__label">Year</span>' +
      '<span class="publications-year-dd__value"></span>' +
      '<i class="fas fa-chevron-down publications-year-dd__chevron" aria-hidden="true"></i>';
    ddValue = btn.querySelector(".publications-year-dd__value");

    var panel = document.createElement("div");
    panel.className = "publications-year-dd__panel";
    panel.id = "publications-year-dd-panel";
    panel.hidden = true;

    var title = document.createElement("p");
    title.className = "publications-year-dd__title";
    title.textContent = "Show publications from";
    panel.appendChild(title);

    navEl.hidden = false;
    navEl.classList.add("publications-year-dd__grid");
    panel.appendChild(navEl);

    wrap.appendChild(btn);
    wrap.appendChild(panel);
    toolbar.appendChild(wrap);
    if (filter) filter.hidden = true;

    function open() {
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      wrap.classList.add("is-open");
      var active = navEl.querySelector(".is-active") || navEl.querySelector("button");
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

    navEl.addEventListener("click", function (event) {
      if (event.target.closest("[data-year-filter]")) close(true);
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
      var items = Array.prototype.slice.call(navEl.querySelectorAll("button"));
      var i = items.indexOf(document.activeElement);
      if (i === -1) return;
      event.preventDefault();
      var cols = Math.max(1, Math.round(navEl.clientWidth / (items[items.length - 1].offsetWidth || 1)));
      var step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols }[event.key];
      var next = Math.min(items.length - 1, Math.max(0, i + step));
      items[next].focus();
    });
  }

  buildSelect();
  buildNav();
  buildDropdown();
  truncateAuthors();
  selectYear(initYear());
  root.classList.add("publications-year-filter--ready");

  window.addEventListener("popstate", function () {
    selectYear(initYear());
  });
})();
