const menuIcon = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');
if (menuIcon) {
   menuIcon.addEventListener('click', function (e) {
      document.body.classList.toggle('lock');
      menuIcon.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

         if (menuIcon.classList.contains('_active')) {
            document.body.classList.remove('lock');
            menuIcon.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}