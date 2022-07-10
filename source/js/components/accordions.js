const getAccordions = function(dataName = "[data-id]") {
  return document.querySelectorAll(dataName);
}

const accordions = getAccordions();
let openedAccordion = null;

const closeAccordion = function (accordion) {
  accordion.style.maxHeight = 0;
};

const openAccordion = function (accordion) {
  accordion.style.maxHeight = accordion.scrollHeight + "px";
};

const toggleAccordionButton = function (button, className = "active") {
  button.classList.toggle(className);
};

const checkIsAccordionOpen = function(accordion) {
  return accordion.style.maxHeight && accordion.style.maxHeight !== "0px";
}

const accordionClickHandler = function () {

  let curentDataNumber = this.dataset.id

  toggleAccordionButton(this);

  const accordionContent = document.querySelector(`[data-content="${curentDataNumber}"]`);
  const isAccordionOpen = checkIsAccordionOpen(accordionContent);

  if (isAccordionOpen) {
    closeAccordion(accordionContent);
    openedAccordion = null;
  } else {
    if (openedAccordion != null) {
      closeAccordion(openedAccordion);
      const accordionButton = document.querySelector(`[data-id="${openedAccordion.dataset.content}"]`)
      toggleAccordionButton(accordionButton);
    }
    openAccordion(accordionContent);
    openedAccordion = accordionContent;
  }
}

const activateAccordion = function(accordions, handler) {
  for (const accordion of accordions) {
    accordion.addEventListener('click', handler)
  }
}
activateAccordion(accordions,accordionClickHandler);
