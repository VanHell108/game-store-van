document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.cartSwiper', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.cart-swiper-button-next',
      prevEl: '.cart-swiper-button-prev',
    },
  });
});
