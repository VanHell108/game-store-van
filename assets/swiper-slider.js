document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.swiper-wrapper-container');

  if (swiperContainer) {
    new Swiper('.mySwiper', {
      spaceBetween: 30,
      slidesPerView: 'auto',
      loop: true,
      breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1000: { slidesPerView: 3 }
      },
      navigation: {
        nextEl: swiperContainer.querySelector('.swiper-button-next'),
        prevEl: swiperContainer.querySelector('.swiper-button-prev'),
      },
      scrollbar: {
        el: swiperContainer.querySelector(".swiper-scrollbar"),
        draggable: true,
        hide: true,
      },
    });
  }
});