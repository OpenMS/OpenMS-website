/*
Configures swipeable cards for features like webapps.
Requires swiper.bundle.js to be loaded from a CDN first.
See layouts/_defaults/base_of.html
*/
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
    slidesPerView: 1,
    breakpoints: {
      700: { slidesPerView: 2 },
      1000: { slidesPerView: 3 },
      1350: { slidesPerView: 4 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Add slide interactivity
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide) => {
    const paragraphs = slide.querySelectorAll("p");

    slide.addEventListener("mouseenter", () => {
      slide.style.height = "90%";
    });
    slide.addEventListener("mouseleave", () => {
      slide.style.height = "60%";
      paragraphs.forEach((p) => (p.style.display = "none"));
    });
    slide.addEventListener("transitionend", (e) => {
      if (e.propertyName === "height" && slide.style.height === "90%") {
        paragraphs.forEach((p) => (p.style.display = "block"));
      }
    });
    slide.addEventListener("click", () => {
      const url = slide.dataset.url;
      if (url) window.location.href = url;
    });
  });
});
