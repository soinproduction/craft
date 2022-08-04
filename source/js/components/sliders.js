import Swiper from '../vendor/swiper';

const mySlider = document.querySelector('.main-slider__box');

for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
  if (mobileSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1024px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(mobileSlider, {
        slidesPerView: "auto",
        spaceBetween: 10,
        observer: true,
        observeParents: true
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}


if (mySlider) {
  let mainSlider = new Swiper(mySlider, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    fadeEffect: {
      crossFade: true
    },
    effect: "fade",
    pagination: {
      el: ".main-slider__pagination",
      clickable: true,
    },
    speed: 1200,
    autoplay: {
      delay: 15000,
    },
  });
}


const sectionRecomendation = document.querySelector('.section-recomendation');

if (sectionRecomendation) {
  const recomendItem = [...sectionRecomendation.querySelectorAll('.product-list__item')]
  if (recomendItem.length < 4) {
    sectionRecomendation.querySelector('.product-list').classList.add('mode');
  }
}


