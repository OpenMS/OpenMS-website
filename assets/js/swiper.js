$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 50,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      720: {
        slidesPerView: 1
      },
      820: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 4
      }
    }
  });

})