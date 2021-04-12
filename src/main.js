import {createSiteMenuTemplate} from './view/site-menu.js';
import {createSiteFilterTemplate} from './view/site-filter.js';
import {createInfoPriceTemplate} from './view/info-price.js';
import {createInfoRouteTemplate} from './view/info-route.js';
import {createPointsSortTemplate} from './view/points-sort.js';
import {createPointsListTemplate} from './view/points-list.js';
import {createPointFormTemplate} from './view/point-form.js';
import {createPointTemplate} from './view/point.js';
import {generatePoint} from './mock/point.js';
import {sortByDate} from './mock/sort.js';
import {PointFormMode} from './util.js';

const POINT_COUNT = 15;

const points = new Array(POINT_COUNT).fill().map(generatePoint);
sortByDate(points);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector('.page-header');
const siteMenu = siteHeader.querySelector('.trip-controls__navigation');
render(siteMenu, createSiteMenuTemplate(), 'beforeend');

const siteFilter = siteHeader.querySelector('.trip-controls__filters');
render(siteFilter, createSiteFilterTemplate(points), 'beforeend');

const siteInfo = siteHeader.querySelector('.trip-main');
render(siteInfo, createInfoRouteTemplate(points), 'afterbegin');

const siteInfoRoute = siteHeader.querySelector('.trip-info');
render(siteInfoRoute, createInfoPriceTemplate(points), 'beforeend');

const siteMain = document.querySelector('.page-main');
const siteEvents = siteMain.querySelector('.trip-events');
render(siteEvents, createPointsSortTemplate(), 'beforeend');
render(siteEvents, createPointsListTemplate(),'beforeend');

const siteEventsList = siteMain.querySelector('.trip-events__list');
render(siteEventsList, createPointFormTemplate(PointFormMode.ADD), 'beforeend');

for (let i = 1; i < POINT_COUNT; i++) {
  render(siteEventsList, createPointTemplate(points[i]), 'beforeend');
}

render(siteEventsList, createPointFormTemplate(PointFormMode.EDIT, points[0]), 'beforeend');
