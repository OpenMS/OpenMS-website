/*
  Donate page: "More details" pop-up for the campaign text
  (layouts/partials/donate-main.html, donatePage.story in config.yaml).
  The button opens the <dialog> with the whole text; it closes with the close
  button, the Escape key (built into <dialog>) or a click outside the box.
  Focus goes back to "More details" when it closes. Page-specific: does
  nothing on other pages.
*/
(function () {
  "use strict";

  var openBtn = document.querySelector("[data-donate-story-open]");
  var dialog = document.getElementById("donate-story-dialog");
  if (!openBtn || !dialog || typeof dialog.showModal !== "function") return;

  openBtn.addEventListener("click", function () {
    dialog.showModal();
    document.documentElement.classList.add("donate-story-open");
  });

  dialog.querySelectorAll("[data-donate-story-close]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      dialog.close();
    });
  });

  // A click on the dark backdrop (outside the box) closes the pop-up.
  dialog.addEventListener("click", function (event) {
    if (event.target !== dialog) return;
    var r = dialog.getBoundingClientRect();
    var inside =
      event.clientX >= r.left && event.clientX <= r.right &&
      event.clientY >= r.top && event.clientY <= r.bottom;
    if (!inside) dialog.close();
  });

  dialog.addEventListener("close", function () {
    document.documentElement.classList.remove("donate-story-open");
    openBtn.focus();
  });
})();
