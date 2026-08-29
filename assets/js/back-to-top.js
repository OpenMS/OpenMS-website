(function () {
  var trigger = document.querySelector(".back-to-top");
  if (!trigger) return;

  var deploy = document.querySelector(".footer-deploy");
  var buttonSize = 40;
  var edgeGap = 16;
  var clearGap = 12;

  var nearDeploy = function () {
    if (!deploy) return false;

    var d = deploy.getBoundingClientRect();
    if (d.bottom <= 0 || d.top >= window.innerHeight) return false;

    var btnLeft = window.innerWidth - edgeGap - buttonSize;
    var btnTop = window.innerHeight - edgeGap - buttonSize;
    var btnRight = window.innerWidth - edgeGap;
    var btnBottom = window.innerHeight - edgeGap;

    return !(
      d.right + clearGap < btnLeft ||
      d.left - clearGap > btnRight ||
      d.bottom + clearGap < btnTop ||
      d.top - clearGap > btnBottom
    );
  };

  var update = function () {
    var shouldShow = window.scrollY > 320;
    trigger.classList.toggle("is-visible", shouldShow);
    trigger.classList.toggle("is-raised", shouldShow && nearDeploy());
  };

  trigger.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
