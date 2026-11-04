(function () {
  // Links written in a news card summary (see layouts/partials/news-card-summary.html).
  // The card itself is a link, so these are spans: open their own address
  // instead of the article. Other sites open in a new tab.
  var open = function (event) {
    var link = event.target.closest(".news-summary-link");
    if (!link) return;
    if (event.type === "keydown" && event.key !== "Enter") return;

    event.preventDefault();
    event.stopPropagation();

    var href = link.getAttribute("data-href");
    if (!href) return;
    // A bare address written in the summary ("openms.readthedocs.io").
    if (!/^([a-z]+:|\/|#)/i.test(href)) href = "https://" + href;
    var external = /^https?:\/\//.test(href) && href.indexOf(window.location.host) === -1;
    if (external) {
      window.open(href, "_blank", "noopener");
    } else {
      window.location.href = href;
    }
  };

  document.addEventListener("click", open, true);
  document.addEventListener("keydown", open, true);
})();
