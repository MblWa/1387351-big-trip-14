import {getRandomInteger, shuffleArray} from '../util.js';
import {DESTINATION_CITIES} from './variables.js';

const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus';
const SENTENCES_MINIMUM = 1;
const SENTENCES_MAXIMUM = 5;
const PHOTOS_MINIMUM = 1;
const PHOTOS_MAXIMUM = 5;
const PLACEHOLDER_COUNT_MAXIMUM = 10000;
const PLACEHOLDER_IMG_URL = 'http://picsum.photos/248/152?r=';

const getRandomDescription = (descriptionText) => {
  const sentences = descriptionText.split('. ');
  const lowerBound = sentences.length < SENTENCES_MINIMUM
    ? sentences.length
    : SENTENCES_MINIMUM;
  const upperBound = sentences.length > SENTENCES_MAXIMUM
    ? SENTENCES_MAXIMUM
    : sentences.length;

  return shuffleArray(sentences).slice(0, getRandomInteger(lowerBound, upperBound)).join('. ') + '.';
};

const generateImgURLArray = () => {
  const upperBound = getRandomInteger(PHOTOS_MINIMUM, PHOTOS_MAXIMUM);
  const resultArray = [];

  for (let i = 0; i < upperBound; i++) {
    resultArray.push(`${PLACEHOLDER_IMG_URL}${getRandomInteger(0, PLACEHOLDER_COUNT_MAXIMUM)}`);
  }
  return resultArray;
};

const generateDestination = () => {
  return {
    description: getRandomDescription(DESCRIPTION),
    photos: generateImgURLArray(),
  };
};

export const generateAllDestinations = () => {
  const destinations = {};

  DESTINATION_CITIES.forEach((item) => {
    destinations[item] = generateDestination();
  });

  return destinations;
};
