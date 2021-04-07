import {sortByDate, sortByTime, sortByPrice} from '../mock/sort.js';

const pointsToSortMap = {
  day: (points) => sortByDate(points),
  event: () => {},
  time: (points) => sortByTime(points),
  price: (points) => sortByPrice(points),
  offer: () => {},
};

export const createPointsSortTemplate = () => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${Object.keys(pointsToSortMap).map((sort) => (
    `<div class="trip-sort__item  trip-sort__item--${sort}">
      <input id="sort-${sort}"
        class="trip-sort__input
        visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${sort}"
        ${sort === 'event' || sort === 'offer'? 'disabled' : ''}
        ${sort === 'day' ? 'checked' : ''}
        >
      <label class="trip-sort__btn" for="sort-${sort}">${sort}</label>
    </div>`
  )).join('')}
  </form>`
);
