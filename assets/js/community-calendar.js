(function () {
  "use strict";

  var root = document.querySelector("[data-community-calendar]");
  if (!root) return;

  var dataEl = document.getElementById("community-events-data");
  var gridEl = root.querySelector("[data-calendar-grid]");
  var monthLabel = root.querySelector("[data-calendar-month-label]");
  var eventList = root.querySelector("[data-calendar-event-list]");
  var hintEl = root.querySelector("[data-calendar-hint]");
  var prevBtn = root.querySelector("[data-calendar-prev]");
  var nextBtn = root.querySelector("[data-calendar-next]");
  var todayBtn = root.querySelector("[data-calendar-today]");

  if (!dataEl || !gridEl || !monthLabel || !eventList) return;

  var events = [];
  try {
    var raw = JSON.parse(dataEl.textContent || "[]");
    if (typeof raw === "string") {
      raw = JSON.parse(raw);
    }
    events = Array.isArray(raw) ? raw : raw.events || [];
  } catch (e) {
    events = [];
  }

  var view = new Date();
  view.setDate(1);
  var selected = null;

  function parseDate(str) {
    if (!str) return null;
    var parts = String(str).split("-");
    if (parts.length < 3) return null;
    return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  }

  function dateKey(d) {
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }

  function eventOnDay(ev, day) {
    var start = parseDate(ev.start);
    if (!start) return false;
    var end = parseDate(ev.end || ev.start);
    var t = day.getTime();
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return t >= start.getTime() && t <= end.getTime();
  }

  function eventsForDay(day) {
    return events.filter(function (ev) {
      return eventOnDay(ev, day);
    });
  }

  function upcomingEvents() {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return events
      .filter(function (ev) {
        var end = parseDate(ev.end || ev.start);
        return end && end.getTime() >= today.getTime();
      })
      .sort(function (a, b) {
        return parseDate(a.start) - parseDate(b.start);
      });
  }

  function formatRange(ev) {
    var start = parseDate(ev.start);
    if (!start) return "";
    var opts = { year: "numeric", month: "short", day: "numeric" };
    var s = start.toLocaleDateString(undefined, opts);
    if (ev.end && ev.end !== ev.start) {
      var end = parseDate(ev.end);
      if (end) {
        return s + " – " + end.toLocaleDateString(undefined, opts);
      }
    }
    return s;
  }

  function renderEventItem(ev) {
    var li = document.createElement("li");
    li.className = "community-calendar__event";
    if (ev.category) {
      li.classList.add("community-calendar__event--" + ev.category);
    }

    var title = document.createElement("h3");
    title.className = "community-calendar__event-title";
    if (ev.url) {
      var a = document.createElement("a");
      a.href = ev.url;
      a.textContent = ev.title || "Event";
      if (/^https?:\/\//.test(ev.url)) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      title.appendChild(a);
    } else if (ev.news_url) {
      var link = document.createElement("a");
      link.href = ev.news_url;
      link.textContent = ev.title || "Event";
      title.appendChild(link);
    } else {
      title.textContent = ev.title || "Event";
    }
    li.appendChild(title);

    var meta = document.createElement("p");
    meta.className = "community-calendar__event-meta";
    var bits = [formatRange(ev)];
    if (ev.location) bits.push(ev.location);
    meta.textContent = bits.filter(Boolean).join(" · ");
    li.appendChild(meta);

    if (ev.summary) {
      var sum = document.createElement("p");
      sum.className = "community-calendar__event-summary";
      sum.textContent = ev.summary;
      li.appendChild(sum);
    }

    if (ev.news_url && ev.url) {
      var more = document.createElement("p");
      more.className = "community-calendar__event-more";
      var newsLink = document.createElement("a");
      newsLink.href = ev.news_url;
      newsLink.textContent = "News post →";
      more.appendChild(newsLink);
      li.appendChild(more);
    }

    return li;
  }

  function renderList(list, emptyText) {
    eventList.innerHTML = "";
    if (!list.length) {
      var empty = document.createElement("li");
      empty.className = "community-calendar__event community-calendar__event--empty";
      empty.textContent = emptyText || "No events.";
      eventList.appendChild(empty);
      return;
    }
    list.forEach(function (ev) {
      eventList.appendChild(renderEventItem(ev));
    });
  }

  function renderMonth() {
    var year = view.getFullYear();
    var month = view.getMonth();
    monthLabel.textContent = view.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
    });

    gridEl.innerHTML = "";
    var first = new Date(year, month, 1);
    var startPad = (first.getDay() + 6) % 7;
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var todayKey = dateKey(new Date());

    for (var i = 0; i < startPad; i++) {
      var pad = document.createElement("div");
      pad.className = "community-calendar__day community-calendar__day--pad";
      pad.setAttribute("aria-hidden", "true");
      gridEl.appendChild(pad);
    }

    for (var d = 1; d <= daysInMonth; d++) {
      var day = new Date(year, month, d);
      var key = dateKey(day);
      var dayEvents = eventsForDay(day);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "community-calendar__day";
      btn.setAttribute("role", "gridcell");
      btn.dataset.date = key;
      btn.setAttribute(
        "aria-label",
        day.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }) + (dayEvents.length ? ", " + dayEvents.length + " event(s)" : "")
      );

      if (key === todayKey) btn.classList.add("is-today");
      if (dayEvents.length) btn.classList.add("has-events");
      if (selected === key) btn.classList.add("is-selected");

      var num = document.createElement("span");
      num.className = "community-calendar__day-num";
      num.textContent = String(d);
      btn.appendChild(num);

      if (dayEvents.length) {
        var dots = document.createElement("span");
        dots.className = "community-calendar__day-dots";
        dots.setAttribute("aria-hidden", "true");
        dayEvents.slice(0, 3).forEach(function () {
          var dot = document.createElement("span");
          dot.className = "community-calendar__day-dot";
          dots.appendChild(dot);
        });
        btn.appendChild(dots);
      }

      btn.addEventListener("click", function () {
        selected = key;
        if (hintEl) hintEl.hidden = true;
        renderList(dayEvents, "No events on this day.");
        renderMonth();
      });

      gridEl.appendChild(btn);
    }
  }

  function showUpcoming() {
    selected = null;
    if (hintEl) {
      hintEl.hidden = false;
      hintEl.textContent = "Upcoming community events.";
    }
    renderList(upcomingEvents(), "No upcoming events scheduled.");
    renderMonth();
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      view.setMonth(view.getMonth() - 1);
      renderMonth();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      view.setMonth(view.getMonth() + 1);
      renderMonth();
    });
  }

  if (todayBtn) {
    todayBtn.addEventListener("click", function () {
      view = new Date();
      view.setDate(1);
      showUpcoming();
    });
  }

  showUpcoming();
})();
