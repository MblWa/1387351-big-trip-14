const calculatePrice = (points) => {
  let routePrice = 0;

  points.forEach(({ price, offers }) => {
    routePrice += price;
    offers.forEach(({price, isSelected}) => {
      routePrice += isSelected ? price : 0;
    });
  });

  return routePrice;
};

export const createInfoPriceTemplate = (points) => (
  `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${calculatePrice(points)}</span>
  </p>`
);
