export const getWinners = (getCarsInfo) => {
  const carsInfoEntries = Object.entries(getCarsInfo());
  const maxDistance = Math.max(...carsInfoEntries.map(([_, distance]) => distance));
  const winners = carsInfoEntries.filter(([_, distance]) => distance === maxDistance).map(([key]) => key.split("-")[1]);

  return winners.join(", ");
};
