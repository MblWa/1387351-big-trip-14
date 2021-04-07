import dayjs from 'dayjs';

export const sortByDate = (points) => points.sort((pointA, pointB) => pointA.startTime - pointB.startTime);

export const sortByTime = (points) => points.sort((pointA, pointB) => dayjs(pointB.endTime).diff(pointB.startTime) - dayjs(pointA.endTime).diff(pointA.startTime));

export const sortByPrice = (points) => points.sort((pointA, pointB) => pointB.price - pointA.price);
