(function () {
  var counters = Array.prototype.filter.call(
    document.querySelectorAll(".hero-modern__stat-number[data-count-value]"),
    function (counter) {
      return counter.offsetParent !== null;
    }
  );
  if (!counters.length) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function formatValue(value, decimals) {
    return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  }

  function setFinal(counter) {
    var target = parseFloat(counter.getAttribute("data-count-value"));
    var suffix = counter.getAttribute("data-count-suffix") || "";
    var decimals = parseInt(counter.getAttribute("data-count-decimals") || "0", 10);
    counter.textContent = formatValue(target, decimals) + suffix;
  }

  function animateCounter(counter) {
    if (counter.dataset.countAnimated === "true") return;
    counter.dataset.countAnimated = "true";

    var target = parseFloat(counter.getAttribute("data-count-value"));
    var suffix = counter.getAttribute("data-count-suffix") || "";
    var decimals = parseInt(counter.getAttribute("data-count-decimals") || "0", 10);
    var duration = 2000;
    var start = performance.now();

    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = target * eased;
      counter.textContent = formatValue(current, decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = formatValue(target, decimals) + suffix;
      }
    }

    requestAnimationFrame(tick);
  }

  if (prefersReducedMotion) {
    counters.forEach(setFinal);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach(function (counter) {
    observer.observe(counter);
  });
})();
