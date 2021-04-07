import dayjs from 'dayjs';

const isCurrentTimeOfPoint = (point) => point.startTime < dayjs() && point.endTime > dayjs();
const isPastPoint = (point) => point.endTime < dayjs();
const isFuturePoint = (point) => point.startTime > dayjs();

const pointsToFilterMap = {
  everything: (points) => points.filter(true),
  future: (points) => points.filter(isFuturePoint || isCurrentTimeOfPoint),
  past: (points) => points.filter(isPastPoint || isCurrentTimeOfPoint),
};

export const createSiteFilterTemplate = () => (
  `<form class="trip-filters" action="#" method="get">
    ${Object.keys(pointsToFilterMap).map((filter) => (
    `<div class="trip-filters__filter">
      <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${filter === 'everything' ? 'checked' : 'disabled'}>
      <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
    </div>`
  )).join('')
  }
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);
