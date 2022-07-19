const myFilters = [...document.querySelectorAll('.catalog-filters__list')];

let step = 1;

const filterClickHandler = function () {
  const myElement = this;
  switch (step) {
    case 1:
      myElement.classList.add('active');
      step += 1;
      break;
    case 2:
      myElement.classList.add('active-mode');
      step += 1;
      break;
    case 3:
      myElement.classList.remove('active-mode');
      myElement.classList.remove('active');
      step = 1;
      break;
  }
}

myFilters.map((myFilter) => {
  const filterItems = [...myFilter.querySelectorAll('.catalog-filters__button')];

  filterItems.map((filterItem) => {
    filterItem.addEventListener('click', filterClickHandler);
  });
});
