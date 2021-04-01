import {createSiteMenuTemplate} from './view/site-menu.js';
import {createSiteFilterTemplate} from './view/site-filter.js';
import {createInfoPriceTemplate} from './view/info-price.js';
import {createInfoRouteTemplate} from './view/info-route.js';
import {createPointsSortTemplate} from './view/points-sort.js';
import {createPointsListTemplate} from './view/points-list.js';
import {createPointCreatorTemplate} from './view/point-creator.js';
import {createPointEditorTemplate} from './view/point-editor.js';
import {createPointTemplate} from './view/point.js';

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.page-header');
const siteMenu = siteHeader.querySelector('.trip-controls__navigation');
render(siteMenu, createSiteMenuTemplate(), 'beforeend');

const siteFilter = siteHeader.querySelector('.trip-controls__filters');
render(siteFilter, createSiteFilterTemplate(), 'beforeend');

const siteInfo = siteHeader.querySelector('.trip-main');
render(siteInfo, createInfoRouteTemplate(), 'afterbegin');

const siteInfoRoute = siteHeader.querySelector('.trip-info');
render(siteInfoRoute, createInfoPriceTemplate(), 'beforeend');

const siteMain = document.querySelector('.page-main');
const siteEvents = siteMain.querySelector('.trip-events');
render(siteEvents, createPointsSortTemplate(), 'beforeend');
render(siteEvents, createPointsListTemplate(),'beforeend');

const siteEventsList = siteMain.querySelector('.trip-events__list');
render(siteEventsList, createPointCreatorTemplate(), 'beforeend');

for (let i = 0; i < POINT_COUNT; i++) {
  render(siteEventsList, createPointTemplate(), 'beforeend');
}

render(siteEventsList, createPointEditorTemplate(), 'beforeend');
