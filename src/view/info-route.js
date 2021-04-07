import dayjs from 'dayjs';

const convertRoute = (points) => {
  if (points.length === 0) {
    return { route: '', date: '' };
  }

  const routePoints = new Set;
  const startDate = points[0].startTime;
  let endDate = points[0].endTime;

  points.forEach(({ destinationCity, endTime }) => {
    routePoints.add(destinationCity);
    endDate = endDate < endTime ? endTime : endDate;
  });

  const routeArray = [...routePoints];
  const formattedTimeString = `${dayjs(startDate).format('MMM D')}&nbsp;&mdash;&nbsp;${
    dayjs(startDate).get('M') !== dayjs(endDate).get('M')
      ? dayjs(endDate).format('MMM D')
      : dayjs(endDate).format('D')
  }`;

  return {
    route: routeArray.length > 3
      ? `${routeArray[0]} &mdash; ... &mdash; ${routeArray[routeArray.length - 1]}`
      : routeArray.join(' &mdash '),
    date: formattedTimeString,
  };
};


export const createInfoRouteTemplate = (points) => {
  const { route, date } = convertRoute(points);

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${route}</h1>

      <p class="trip-info__dates">${date}</p>
    </div>
  </section>`;
};
