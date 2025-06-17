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

animatedDestroyAndRenewSwiper = async () => {
  const container = document.querySelector('.cart-swiper-wrapper-container');
  
  if (container) {
    container.classList.add('reinitializing');

    await new Promise(resolve => setTimeout(resolve, 50));
  }

  if (cartSwiperInstance) {
    cartSwiperInstance.destroy(true, true);
  }

  initializeSwiper();

  setTimeout(() => {
    if (container) {
      container.classList.remove('reinitializing');
    }
  }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper();
});