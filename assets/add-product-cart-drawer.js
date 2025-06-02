document.addEventListener('DOMContentLoaded', function () {
   const productForms = document.querySelectorAll('product-form form');

   productForms.forEach(form => {
      const quickAddBtn = form.querySelector('.quick-add__submit');
      if (!quickAddBtn) return;

      form.addEventListener('submit', function (e) {
         e.preventDefault();

         const formData = new FormData(form);
         const spinner = quickAddBtn.querySelector('.loading__spinner');

         quickAddBtn.classList.add('loading');
         if (spinner) spinner.classList.remove('hidden');

         fetch('/cart/add.js', {
            method: 'POST',
            body: formData
         })
            .then(response => response.json())
            .then(item => {
               document.dispatchEvent(new CustomEvent('cart:item-added', { detail: item }));

               const cartDrawer = document.querySelector('cart-drawer');
               const cartNotification = document.querySelector('cart-notification');

               if (cartDrawer) {
                  fetch('/?section_id=cart-drawer')
                     .then(response => response.text())
                     .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        const newContent = doc.querySelector('cart-drawer');
                        if (newContent) {
                           cartDrawer.innerHTML = newContent.innerHTML;
                        }
                     });
               } else if (cartNotification) {
                  cartNotification.style.display = 'block';
               }
            })
            .catch(error => {
               console.error('Error:', error);
               form.removeEventListener('submit', arguments.callee);
               form.submit();
            })
            .finally(() => {
               quickAddBtn.classList.remove('loading');
               if (spinner) spinner.classList.add('hidden');
            });
      });
   });
});