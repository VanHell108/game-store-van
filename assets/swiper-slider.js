document.addEventListener('DOMContentLoaded', () => {
   new Swiper('.swiper', {
     slidesPerView: 3,
     spaceBetween: 10,
     breakpoints: {
       750: { slidesPerView: 1 },
       1000: { slidesPerView: 3 }
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
   });
 });
