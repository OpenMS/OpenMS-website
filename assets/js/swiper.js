/*
 * Featured WebApps carousel (Swiper 11).
 * Requires swiper-bundle.js from CDN (see layouts/_default/baseof.html).
 */
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.querySelector(".webapps-featured__carousel");
  if (!carousel || typeof Swiper === "undefined") {
    return;
  }

  new Swiper(carousel, {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
      el: carousel.querySelector(".swiper-pagination"),
      clickable: true,
    },
    navigation: {
      nextEl: carousel.querySelector(".swiper-button-next"),
      prevEl: carousel.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    a11y: {
      enabled: true,
    },
  });
});
