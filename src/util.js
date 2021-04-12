export const PointFormMode = {
  EDIT: 'EDIT',
  ADD: 'ADD',
};

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

//Перемешивание массива методом Дурштенфельда
export const shuffleArray = (inputArray) => {
  const shallowCopy = inputArray.slice();

  for (let i = shallowCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shallowCopy[i], shallowCopy[j]] = [shallowCopy[j], shallowCopy[i]];
  }

  return shallowCopy;
};

export const capitalize = (inputText) => {
  return inputText && inputText[0].toUpperCase() + inputText.slice(1);
};
