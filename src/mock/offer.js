import {POINT_AND_OFFER_TYPES} from './variables.js';
import {getRandomInteger, shuffleArray} from './util.js';

const OFFER_TITLES = [
  { name: 'luggage', title: 'Add luggage' },
  { name: 'comfort', title: 'Switch to comfort class' },
  { name: 'meal', title: 'Add meal' },
  { name: 'seats', title: 'Choose seats'},
  { name: 'train', title: 'Travel by train' },
];
const OFFER_PRICE_MINIMUM = 10;
const OFFER_PRICE_MAXIMUM = 300;

const generateOffer = () => {
  return shuffleArray(OFFER_TITLES)
    .slice(0, getRandomInteger(0, OFFER_TITLES.length))
    .map(({name, title}) => {
      return {
        name,
        title,
        price: getRandomInteger(OFFER_PRICE_MINIMUM, OFFER_PRICE_MAXIMUM),
        isSelected: Boolean(getRandomInteger(0, 1)),
      };
    });
};

export const generateAllOffers = () => {
  const offers = {};

  POINT_AND_OFFER_TYPES.forEach((item) => {
    offers[item] = generateOffer();
  });

  return offers;
};
