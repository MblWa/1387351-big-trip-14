import dayjs from 'dayjs';
import {capitalize} from '../util.js';

const formatDateText = (time, formatText) => {
  return time !== 0
    ? `${time.toString().padStart(2, '0')}${formatText}`
    : '';
};

const calculateDuration = (startTime, endTime) => {
  const day = Math.floor(dayjs(endTime).diff(startTime, 'd'));
  const hour = Math.floor(dayjs(endTime).diff(startTime, 'h') % 24);
  const minute = Math.floor(dayjs(endTime).diff(startTime, 'm') % 60);

  return [
    formatDateText(day, 'D'),
    formatDateText(hour, 'H'),
    formatDateText(minute, 'm'),
  ].join(' ');
};

const addToFavourite = (isFavourite) => (
  isFavourite
    ? 'event__favorite-btn--active'
    : ''
);

const createOffersTemplate = (offers) => {
  if (offers.length === 0) {
    return '';
  }

  const offerText = offers.map(({ title, price, isSelected }) => (
    isSelected
      ? `<li class="event__offer">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
        </li>`
      : ''),
  ).join('');

  return `<ul class="event__selected-offers">
      ${offerText}
    </ul>`;
};

export const createPointTemplate = ({ startTime, endTime, isFavourite, type, price, destinationCity, offers }) => (
  `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${startTime.toISOString()}">${dayjs(startTime).format('MMM D')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${capitalize(type)} ${destinationCity}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${startTime.toISOString()}">${dayjs(startTime).format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${endTime.toISOString()}">${dayjs(endTime).format('HH:mm')}</time>
        </p>
        <p class="event__duration">${calculateDuration(startTime, endTime)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${createOffersTemplate(offers)}
      <button class="event__favorite-btn ${addToFavourite(isFavourite)}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
);
