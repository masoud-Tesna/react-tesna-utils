export const formatNumber = (number: number) => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 10
  });
};
