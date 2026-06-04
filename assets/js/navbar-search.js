/**
 * Navbar site search — magnifying glass opens panel; live results from search-index.json.
 */
(function () {
  var indexPromise = null;

  function loadIndex(url) {
    if (!indexPromise) {
      indexPromise = fetch(url)
        .then(function (res) {
          if (!res.ok) throw new Error("Search index not found");
          return res.json();
        })
        .catch(function () {
          indexPromise = null;
          return [];
        });
    }
    return indexPromise;
  }

  function filterPages(pages, query, maxResults) {
    var q = query.toLowerCase().trim();
    if (!q) return [];

    var scored = [];
    pages.forEach(function (page) {
      var title = (page.title || "").toLowerCase();
      var section = (page.section || "").toLowerCase();
      var summary = (page.summary || "").toLowerCase();
      var score = 0;

      if (title === q) score += 100;
      else if (title.indexOf(q) === 0) score += 50;
      else if (title.indexOf(q) !== -1) score += 30;

      if (section.indexOf(q) !== -1) score += 10;
      if (summary.indexOf(q) !== -1) score += 5;

      if (score > 0) scored.push({ page: page, score: score });
    });

    scored.sort(function (a, b) {
      return b.score - a.score;
    });

    return scored.slice(0, maxResults).map(function (item) {
      return item.page;
    });
  }

  function closeResults(container, input) {
    container.hidden = true;
    container.innerHTML = "";
    input.setAttribute("aria-expanded", "false");
  }

  function renderResults(container, pages, query) {
    container.innerHTML = "";

    if (!pages.length) {
      var empty = document.createElement("p");
      empty.className = "navbar-search__empty";
      empty.textContent = 'No results for "' + query + '"';
      container.appendChild(empty);
      return;
    }

    pages.forEach(function (page) {
      var link = document.createElement("a");
      link.className = "navbar-search__result";
      link.href = page.href;
      link.setAttribute("role", "option");

      var title = document.createElement("span");
      title.className = "navbar-search__result-title";
      title.textContent = page.title;

      link.appendChild(title);

      if (page.section) {
        var meta = document.createElement("span");
        meta.className = "navbar-search__result-meta";
        meta.textContent = page.section;
        link.appendChild(meta);
      }

      container.appendChild(link);
    });
  }

  function closePanel(root, toggle, panel, input, results) {
    root.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    closeResults(results, input);
  }

  function openPanel(root, toggle, panel, input) {
    root.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    window.requestAnimationFrame(function () {
      input.focus();
    });
  }

  function setupSearch(root) {
    var toggle = root.querySelector(".navbar-search__toggle");
    var panel = root.querySelector(".navbar-search__panel");
    var input = root.querySelector(".navbar-search__input");
    var results = root.querySelector(".navbar-search__results");
    if (!toggle || !panel || !input || !results) return;

    var indexUrl = root.getAttribute("data-search-index");
    var minChars = parseInt(root.getAttribute("data-min-chars"), 10) || 2;
    var maxResults = parseInt(root.getAttribute("data-max-results"), 10) || 8;
    var debounceTimer = null;

    function runSearch() {
      var query = input.value.trim();
      if (query.length < minChars) {
        closeResults(results, input);
        return;
      }

      loadIndex(indexUrl).then(function (pages) {
        if (input.value.trim() !== query) return;
        var matches = filterPages(pages, query, maxResults);
        renderResults(results, matches, query);
        results.hidden = false;
        input.setAttribute("aria-expanded", "true");
      });
    }

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (root.classList.contains("is-open")) {
        closePanel(root, toggle, panel, input, results);
      } else {
        openPanel(root, toggle, panel, input);
      }
    });

    input.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(runSearch, 180);
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closePanel(root, toggle, panel, input, results);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!root.contains(e.target)) {
        if (root.classList.contains("is-open")) {
          closePanel(root, toggle, panel, input, results);
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar-search").forEach(setupSearch);
  });
})();
