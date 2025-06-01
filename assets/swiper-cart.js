document.addEventListener('DOMContentLoaded', () => {
  const cartSwiperContainer = document.querySelector('.cart-swiper-wrapper-container')

  if (cartSwiperContainer) {
    new Swiper('.cartSwiper', {
      spaceBetween: 45,
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: cartSwiperContainer.querySelector('.cart-swiper-button-next'),
        prevEl: cartSwiperContainer.querySelector('.cart-swiper-button-prev'),
      },
    });
  }
});
