/**
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value
 * @param fractionDigits — Number of digits after the decimal point. Must be in
 *   the range 0 - 20, inclusive.
 */
declare function toFixed(value: string, fractionDigits?: number | undefined): string;
/**
 * Returns the greatest integer less than or equal to its numeric argument.
 *
 * @param x — A numeric expression.
 */
declare function floor(value: string): string;
export { toFixed, floor };
