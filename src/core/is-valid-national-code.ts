import { toEnDigit } from "./to-en-digit";

export const isValidNationalCode = (value: number | string) => {
  const input = toEnDigit(value?.toString());

  if (input.length !== 10) return false;

  const check = +input[9];

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += +input[i] * (10 - i);
  }
  sum = sum % 11;

  return sum < 2 ? check === sum : check + sum === 11;
};
