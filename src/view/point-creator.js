import {insertButtonsToFormTemplate} from '../util.js';

export const createPointCreatorTemplate = () => insertButtonsToFormTemplate('beforeend',
  `<button class="event__reset-btn" type="reset">
    Cancel
  </button>`);
