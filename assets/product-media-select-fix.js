document.addEventListener('DOMContentLoaded', () => {
   const visibleThumbs = document.querySelectorAll('.thumbnail-list__item.slider__slide');
   for (let thumb of visibleThumbs) {
      if (getComputedStyle(thumb).display !== 'none') {
         thumb.querySelector('button, a')?.click();
         break;
      }
   }
});
