// Web Apps page: "Copy prompt" button in the Jupyter notebook band.
(function () {
  var btn = document.querySelector("[data-notebook-copy]");
  if (!btn) return;

  var code = document.querySelector("#webapps-notebook-prompt code");
  var label = btn.querySelector("[data-notebook-copy-label]");
  var original = label ? label.textContent : "";

  function done() {
    if (!label) return;
    label.textContent = btn.getAttribute("data-copied-label") || "Copied";
    btn.classList.add("is-copied");
    setTimeout(function () {
      label.textContent = original;
      btn.classList.remove("is-copied");
    }, 2000);
  }

  function fallback(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      done();
    } catch (e) {}
    document.body.removeChild(area);
  }

  btn.addEventListener("click", function () {
    var text = (code ? code.textContent : "").replace(/\s+/g, " ").trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {
        fallback(text);
      });
    } else {
      fallback(text);
    }
  });
})();
