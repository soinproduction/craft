import Swiper from '../vendor/swiper';



// let teamSlider = new Swiper(".team-slider", {
//   spaceBetween: 0,
//   slidesPerView: 4,
//   breakpointsInverse: true,
//   loop: true,
//   navigation: {
//     nextEl: ".team-next",
//     prevEl: ".team-prev",
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     576: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1025: {
//       slidesPerView: 4,
//     }
//   }
// });

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
