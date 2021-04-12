import dayjs from 'dayjs';
import {POINT_AND_OFFER_TYPES, DESTINATION_CITIES} from '../mock/variables.js';
import {capitalize, PointFormMode} from '../util.js';

const generatePointTypeList = (currentType) => {
  let pointTypesList = '';

  POINT_AND_OFFER_TYPES.forEach((item) => {
    pointTypesList += `<div class="event__type-item">
      <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${item} ${item === currentType ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${capitalize(item)}</label>
    </div>`;
  });

  return pointTypesList;
};

const generateDestinationCityOptions = () => {
  let optionsText = '';

  DESTINATION_CITIES.forEach((item) => {
    optionsText += `<option value=${item}></option>`;
  });

  return optionsText;
};

const generateOffersSection = (offers) => {
  if (offers.length === 0) {
    return '';
  }

  const offerText = offers.map(({ name, title, price, isSelected }) => (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isSelected ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-${name}-1">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>`
  )).join('');

  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offerText}
      </div>
    </section>`
  );
};

const generateDestinationSection = (destination) => {
  const { description, photos } = destination;
  if (description.length === 0 && photos.length === 0) {
    return '';
  }

  let photosSlider = '';
  if (photos.length !== 0) {
    photosSlider += `<div class="event__photos-container">
      <div class="event__photos-tape">`;
    photosSlider += photos.map((photoLink) => (
      `<img class="event__photo" src="${photoLink}" alt="Event photo">`
    )).join('');
    photosSlider += '</div></div>';
  }

  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      ${description.length !== 0 ? `<p class="event__destination-description">${description}</p>` : ''}
      ${photosSlider}
    </section>`
  );
};

export const createPointFormTemplate = (mode, point = {}) => {
  const deleteButton = 'Delete';
  const cancelButton = 'Cancel';
  const rollupButton = `<button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>`;
  const {
    startTime = dayjs().toDate(),
    endTime = dayjs().toDate(),
    type = POINT_AND_OFFER_TYPES[0],
    price = 0,
    destinationCity = DESTINATION_CITIES[0],
    destination = {description: '', photos: []},
    offers = [],
  } = point;

  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${generatePointTypeList(type)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${destinationCity} list="destination-list-1">
          <datalist id="destination-list-1">
            ${generateDestinationCityOptions()}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${dayjs(startTime).format('YY/MM/DD&#160;HH:mm')}>
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value=${dayjs(endTime).format('YY/MM/DD&#160;HH:mm')}>
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${price}>
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">
          ${mode === PointFormMode.ADD ? cancelButton : deleteButton}
        </button>
        ${mode === PointFormMode.EDIT ? rollupButton : ''}
      </header>
      <section class="event__details">
      ${generateOffersSection(offers)}
      ${generateDestinationSection(destination)}
      </section>
    </form>
  </li>`;
};
