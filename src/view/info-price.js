const calculatePrice = (points) => {
  return points.reduce((routePrice, { price, offers }) => {
    return routePrice + price + offers.reduce((offerPrice, {price, isSelected}) => {
      return offerPrice + isSelected ? price : 0;
    }, 0);
  }, 0);
};

export const createInfoPriceTemplate = (points) => (
  `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${calculatePrice(points)}</span>
  </p>`
);
