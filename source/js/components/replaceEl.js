const searchForm = document.querySelector('.catalog-aside__search');
const myAside = document.querySelector('.catalog-aside');
const myAsideTitle = myAside?.querySelector('.catalog-aside__title');
const breakpoint = 1025;
const catalogInner = document.querySelector('.catalog-section__title');

const replaceSearchForm = (element,parentDesktop,parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth < breakpoint) {
    parentMobile.insertAdjacentElement('afterend', element)
  };
  if (containerWidth >= breakpoint) {
    parentDesktop.insertAdjacentElement('afterend', element)
  }
}

if (myAside) {
  window.addEventListener('resize', () => {
    replaceSearchForm(searchForm,myAsideTitle,catalogInner);
  });

  window.addEventListener('DOMContentLoaded', () => {
    replaceSearchForm(searchForm,myAsideTitle,catalogInner);
  });

}

