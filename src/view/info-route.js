import dayjs from 'dayjs';

const ROUTE_POINTS_COUNT = 3;

const convertRoute = (points) => {
  if (points.length === 0) {
    return { route: '', date: '' };
  }

  const routePoints = new Set();
  const startDate = points[0].startTime;
  let endDate = points[0].endTime;

  points.forEach(({ destinationCity, endTime }) => {
    routePoints.add(destinationCity);
    endDate = endDate < endTime ? endTime : endDate;
  });

  const wayPoints = [...routePoints];
  const formattedTimeText = `${dayjs(startDate).format('MMM D')} — ${
    dayjs(startDate).get('M') !== dayjs(endDate).get('M')
      ? dayjs(endDate).format('MMM D')
      : dayjs(endDate).format('D')
  }`;

  return {
    route: wayPoints.length > ROUTE_POINTS_COUNT
      ? `${wayPoints[0]} — ... — ${wayPoints[wayPoints.length - 1]}`
      : wayPoints.join(' — '),
    date: formattedTimeText,
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
