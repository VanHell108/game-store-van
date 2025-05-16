document.addEventListener('DOMContentLoaded', () => {
   new Swiper('.mySwiper', {
     spaceBetween: 30,
     slidesPerView: 'auto',
     breakpoints: {
       0: { slidesPerView: 1 },
       600: { slidesPerView: 2 },
       1000: { slidesPerView: 3 }
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: true,
      },
   });
 });
