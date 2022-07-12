import Swiper from '../vendor/swiper';


(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let slider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (slider !== undefined) slider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    slider = new Swiper(".third-section__item", {
      slidesPerView: "auto",
      spaceBetween: 20,
      observer: true,
      observeParents: true,
      // pagination: {
      //   el: ".third-section__pagination",
      //   clickable: true,
      // },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

let mainSlider = new Swiper(".main-slider__box", {
  spaceBetween: 0,
  slidesPerView: 1,
  // breakpointsInverse: true,
  loop: true,

  fadeEffect: {
    crossFade: true
  },
  effect: "fade",

  pagination: {
    el: ".main-slider__pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".table-section__next",
  //   prevEl: ".table-section__prev",
  // }
});
