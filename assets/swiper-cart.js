let cartSwiperInstance;

initializeSwiper = () => {
  const cartSwiperContainer = document.querySelector('.cart-swiper-wrapper-container');
  if (cartSwiperContainer) {
    cartSwiperInstance = new Swiper('.cartSwiper', {
      spaceBetween: 45,
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: cartSwiperContainer.querySelector('.cart-swiper-button-next'),
        prevEl: cartSwiperContainer.querySelector('.cart-swiper-button-prev'),
      },
    });
  }
}

destroyAndRenewSwiper = () => {
  if (cartSwiperInstance) {
    cartSwiperInstance.destroy(true, true);
  }
  initializeSwiper();
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper();
});