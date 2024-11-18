export const isNumber = (val: any) => !isNaN(parseFloat(val)) && !isNaN(val - 0);
