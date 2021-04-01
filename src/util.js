import {createPointFormTemplate} from './view/point-form.js';

export const insertButtonsToFormTemplate = (place, string) => {
  const template = document.createElement('template');
  template.innerHTML = createPointFormTemplate();

  const formHeader = template.content.childNodes[0].querySelector('.event__header');
  formHeader.insertAdjacentHTML(place, string);

  return template.innerHTML;
};
