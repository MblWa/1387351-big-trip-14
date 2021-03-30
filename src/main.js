import {createSiteMenuTemplate} from './view/site-menu.js';
import {createSiteFilterTemplate} from './view/site-filter.js';
import {createTripInfoPriceTemplate} from './view/trip-info-price.js';
import {createTripInfoRouteTemplate} from './view/trip-info-route.js';
import {createEventsSortTemplate} from './view/events-sort.js';
import {createEventsListTemplate} from './view/events-list.js';
import {createNewEventTemplate} from './view/event-create.js';
import {createEditEventTemplate} from './view/event-edit.js';
import {createEventTemplate} from './view/event.js';

const EVENTS_QTY = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header');
const siteMenuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
render(siteMenuElement, createSiteMenuTemplate(), 'beforeend');

const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
render(siteFilterElement, createSiteFilterTemplate(), 'beforeend');

const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');
render(siteTripInfoElement, createTripInfoRouteTemplate(), 'afterbegin');

const siteTripInfoRouteElement = siteHeaderElement.querySelector('.trip-info');
render(siteTripInfoRouteElement, createTripInfoPriceTemplate(), 'beforeend');

const siteMainElement = document.querySelector('.page-main');
const siteEventsElement = siteMainElement.querySelector('.trip-events');
render(siteEventsElement, createEventsSortTemplate(), 'beforeend');
render(siteEventsElement, createEventsListTemplate(),'beforeend');

const siteEventsListElement = siteMainElement.querySelector('.trip-events__list');
render(siteEventsListElement, createEditEventTemplate(), 'beforeend');

for (let i = 0; i < EVENTS_QTY; i += 1) {
  render(siteEventsListElement, createEventTemplate(), 'beforeend');
}

render(siteEventsListElement, createNewEventTemplate(), 'beforeend');
