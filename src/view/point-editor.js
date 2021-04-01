import {insertButtonsToFormTemplate} from '../util.js';

export const createPointEditorTemplate = () => insertButtonsToFormTemplate('beforeend',
  `<button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>`);
