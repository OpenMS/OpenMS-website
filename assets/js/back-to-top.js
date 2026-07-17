(function () {
  var trigger = document.querySelector(".back-to-top");
  if (!trigger) return;

  var toggleVisibility = function () {
    if (window.scrollY > 320) {
      trigger.classList.add("is-visible");
    } else {
      trigger.classList.remove("is-visible");
    }
  };

  trigger.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();
})();
