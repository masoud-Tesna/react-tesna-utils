export const formatNumber = (number: number, options?: Intl.NumberFormatOptions) => {
  return number.toLocaleString(undefined, {
    ...options,
    minimumFractionDigits: options?.minimumFractionDigits || 0,
    maximumFractionDigits: options?.maximumFractionDigits || 10
  });
};