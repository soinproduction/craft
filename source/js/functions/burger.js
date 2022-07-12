import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('mobile-menu--active');
    overlay?.classList.toggle('active');

    if (menu?.classList.contains('mobile-menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', function() {

    if (overlay?.classList.contains('active')) {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('mobile-menu--active');
      overlay?.classList.remove('active');
      filterBtn?.classList.remove('mobile-filters--active')
      filterMenu?.classList.remove('active');
      enableScroll();
    }


  });

  const filterBtn = document.querySelector(".mobile-filters");
  const filterBack = document.querySelector(".catalog-aside__back");
  const filterMenu = document.querySelector(".catalog-aside");



  filterBtn?.addEventListener('click', function(){
    filterBtn?.classList.toggle('mobile-filters--active')
    filterMenu?.classList.toggle('active');
    overlay?.classList.toggle('active');
  });


  filterBack?.addEventListener('click', function(){
    filterMenu?.classList.remove('active');
    overlay?.classList.remove('active');
  });

  //   window.addEventListener('click', function(e) {
  //     if (e.target.classList.contains('catalog-aside.active')) {
  //         console.log('123')
  //     }
  // });



  // menuItems?.forEach(el => {
  //   el.addEventListener('click', () => {
  //     burger?.setAttribute('aria-expanded', 'false');
  //     burger?.setAttribute('aria-label', 'Открыть меню');
  //     burger.classList.remove('burger--active');
  //     menu.classList.remove('mobile-menu--active');
  //     enableScroll();
  //   });
  // });
})();
