import dayjs from 'dayjs';
import {getRandomInteger} from './util.js';
import {DESTINATION_CITIES, POINT_AND_OFFER_TYPES} from './variables.js';
import {generateAllDestinations} from './destination.js';
import {generateAllOffers} from './offer.js';

const PRICE_MINIMUM = 1;
const PRICE_MAXIMUM = 1000;
const DAY_GAP_LIMIT = 10;
const HOUR_GAP_LIMIT = 1;
const MINUTE_GAP_LIMIT = 60;

const destinationDescriptions = generateAllDestinations();
const offersByTypes = generateAllOffers();

const generateTime = () => {
  const startTime = dayjs()
    .add(-getRandomInteger(0, DAY_GAP_LIMIT), 'd')
    .add(-getRandomInteger(0, HOUR_GAP_LIMIT), 'h')
    .add(-getRandomInteger(0, MINUTE_GAP_LIMIT), 'm');
  const endTime = dayjs().add(getRandomInteger(0, DAY_GAP_LIMIT), 'd')
    .add(getRandomInteger(0, HOUR_GAP_LIMIT), 'h')
    .add(getRandomInteger(0, MINUTE_GAP_LIMIT), 'm');

  return {
    startTime: startTime.toDate(),
    endTime: endTime.toDate(),
  };
};

export const generatePoint = () => {
  const destinationCity = DESTINATION_CITIES[getRandomInteger(0, DESTINATION_CITIES.length - 1)];
  const destination = destinationDescriptions[destinationCity];
  const pointType = POINT_AND_OFFER_TYPES[getRandomInteger(0, POINT_AND_OFFER_TYPES.length - 1)];
  const offers = offersByTypes[pointType];
  const {startTime, endTime} = generateTime();
  return {
    type: pointType,
    destinationCity,
    startTime,
    endTime,
    price: getRandomInteger(PRICE_MINIMUM, PRICE_MAXIMUM),
    offers,
    isFavourite: Boolean(getRandomInteger(0, 1)),
    destination,
  };
};
