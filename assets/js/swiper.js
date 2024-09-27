$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 55,

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

  const swiperSlides = document.querySelectorAll('.swiper-slide');
  
  /*swiperSlides.forEach(slide => {
      const paragraphs = slide.querySelectorAll('p'); 
      slide.addEventListener('mouseover', () => {
          slide.style.height = '90%';
          paragraphs.forEach(p => {
             p.style.display = 'block';
          });
      });
      slide.addEventListener('mouseout', () => {
          slide.style.height = '65%';
          paragraphs.forEach(p => {
             p.style.display = 'none';
          });
       
      });
  });*/
   swiperSlides.forEach(slide => {
        const paragraphs = slide.querySelectorAll('p');

        slide.addEventListener('mouseover', () => {
            slide.style.height = '90%';
        });

        slide.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'height' && slide.style.height === '90%') {
                paragraphs.forEach(p => {
                    p.style.display = 'block';
                });
            }
        });

        slide.addEventListener('mouseleave', () => {
            slide.style.height = '60%';
            paragraphs.forEach(p => {
                p.style.display = 'none';
            });
        });
        
       slide.addEventListener('click', () => {
            const url = slide.getAttribute('data-url');
            if (url) {
              window.location.href = url;
            }
       });  
    });

})