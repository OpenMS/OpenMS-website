/* Partner logo rows ("Adopted by labs and institutions worldwide."): both rows scroll at the
   same speed in px/s. The rows hold different logos, so equal durations would make one faster. */
(function () {
  var SPEED = 40; // px per second

  function setDurations() {
    document.querySelectorAll('.uni-partners__marquee').forEach(function (marquee) {
      var track = marquee.querySelector('.uni-partners__track');
      var row = track && track.querySelector('.uni-partners__row');
      if (!row) return;
      var loop = row.getBoundingClientRect().width; // one row = one loop (the track holds 3 copies)
      if (loop < 1) return;
      var seconds = (loop / SPEED).toFixed(2) + 's';
      if (track.dataset.marqueeDuration === seconds) return;
      track.dataset.marqueeDuration = seconds;
      track.style.setProperty('animation-duration', seconds, 'important');
    });
  }

  function init() {
    setDurations();
    var rows = document.querySelectorAll('.uni-partners__marquee .uni-partners__row');
    if ('ResizeObserver' in window) {
      var observer = new ResizeObserver(setDurations);
      rows.forEach(function (row) { observer.observe(row); });
    }
    window.addEventListener('load', setDurations);
    window.addEventListener('resize', setDurations);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
