const myFilters = [...document.querySelectorAll('.catalog-filters__list')];

let step = 1;

const filterClickHandler = function () {
  const myElement = this;

  function removeClassForAllEl() {
    const myElementSiblings = document.querySelectorAll('.catalog-filters__button');
    for (let myElementSibling of myElementSiblings) {
      myElementSibling.classList.remove('active-mode');
      myElementSibling.classList.remove('active');
    }
  }



  switch (step) {
    case 1:
      removeClassForAllEl()
      myElement.classList.add('active');
      step += 1;

      break;
    case 2:
      removeClassForAllEl()
      myElement.classList.add('active-mode');
      step += 1;

      break;
    case 3:
      myElement.classList.remove('active-mode');
      myElement.classList.remove('active');
      step = 1;
      break;
  }

  // item.classList.remove('active');
}

myFilters.map((myFilter) => {
  const filterItems = [...myFilter.querySelectorAll('.catalog-filters__button')];

  filterItems.map((filterItem) => {
    filterItem.addEventListener('click', filterClickHandler);
  });
});
