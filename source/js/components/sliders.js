import Swiper from '../vendor/swiper';
console.log('12345')

const mySlider = document.querySelector('.main-slider__box');
const mobileSlider = document.querySelector('.mobile-slider');

if (mobileSlider) {
  (function () {
    "use strict";

    const breakpoint = window.matchMedia("(min-width:1024px)");
    let slider;


    console.log('12345')


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


if (mySlider) {
  let mainSlider = new Swiper(mySlider, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    effect: "fade",
    pagination: {
      el: ".main-slider__pagination",
      clickable: true,
    }
  });
}


