// import './_vendor';
// import vars from './_vars';
import './_functions';
import './_components';









// console.log(burgerBtn)



// getHeaderHeight()

// const mobileMenuInit = function() {
//   burgerBtn.classList.toggle('active')
//   mobileMenu.classList.toggle('active');
// }

// burgerBtn.addEventListener('click', mobileMenuInit)





// const profile = document.querySelectorAll(".profile-links");
// const replaceElement = [...document.querySelectorAll(".data-replace")];
// const replaceNav = document.querySelectorAll(".replace-navigation");
// const topInner = document.querySelector(".top-parrent");
// const bottomInner = document.querySelector(".bottom-parrent");

// const breakpoint = 1024;
// const breakpointSecond = 767;
// const body = document.body;

// let header = document.querySelector('header');
// let headerTop = document.querySelector('.header-top');
// let sticky = headerTop.clientHeight;


// function setHeaderHeight() { // переменная высоты header
//     let headerHeight = header.clientHeight + 'px';
//     let headerTopHeight = headerTop.clientHeight + 'px';
//     body.style.setProperty('--header-min-height', headerHeight);
//     body.style.setProperty('--header-top-height', headerTopHeight);
// }

// const changeLocation = (elements, parentMobile, parentDesktop) => { // перемещение необходимых эллементов
//     let containerWidth = document.documentElement.clientWidth;
//     for (const element of elements) {
//         if (containerWidth <= breakpoint) {
//             parentMobile.insertAdjacentElement("beforeend", element);
//         };
//         if (containerWidth > breakpoint) {
//             parentDesktop.insertAdjacentElement("beforeend", element);
//         }
//     }
// };

// const profileLocation = (elements, parentMobile, parentDesktop) => { // перемещение необходимых эллементов
//     let containerWidth = document.documentElement.clientWidth;
//     for (const element of elements) {
//         if (containerWidth <= breakpointSecond) {
//             parentMobile.insertAdjacentElement("beforeend", element);
//         };
//         if (containerWidth >= breakpointSecond) {
//             parentDesktop.insertAdjacentElement("beforeend", element);
//         }
//     }
// };

// window.addEventListener("DOMContentLoaded", () => {
//     profileLocation(profile, mobileInner, bottomInner);
//     changeLocation(replaceElement, mobileInner, bottomInner);
//     changeLocation(replaceNav, mobileInner, topInner);
//     setHeaderHeight();
//     stickyHeaderFunction();
// });

// window.addEventListener("resize", () => {
//     profileLocation(profile, mobileInner, bottomInner);
//     changeLocation(replaceElement, mobileInner, bottomInner);
//     changeLocation(replaceNav, mobileInner, topInner);
//     setHeaderHeight();
//     stickyHeaderFunction();
// });

// const toggleClassOnClick = function(element, button) {
//     element.classList.toggle('active');
//     button.classList.toggle('active');
// };

// burgerBtn.addEventListener('click', function() {
//     toggleClassOnClick(mobileInner, burgerBtn)
//     body.classList.toggle('menu-open')
// });


// window.addEventListener('click', function(e) {
//     if (e.target.classList.contains('menu-open')) {
//         toggleClassOnClick(mobileInner, burgerBtn)
//         body.classList.toggle('menu-open')
//     }
// });


// const stickyHeaderFunction = () => {
//     window.onscroll = function() { myFunction() };
//     let containerWidth = document.documentElement.clientWidth;
//     if (containerWidth <= breakpointSecond) {
//         sticky = 0
//     }

//     function myFunction() {
//         if (window.pageYOffset > sticky) {
//             header.classList.add('sticky')
//         } else {
//             header.classList.remove('sticky')
//         }
//     }

// };


