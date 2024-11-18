"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floor = exports.toFixed = void 0;
/**
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value
 * @param fractionDigits — Number of digits after the decimal point. Must be in
 *   the range 0 - 20, inclusive.
 */
function toFixed(value, fractionDigits) {
    if (!value)
        return '';
    return Number(value).toFixed(fractionDigits);
}
exports.toFixed = toFixed;
/**
 * Returns the greatest integer less than or equal to its numeric argument.
 *
 * @param x — A numeric expression.
 */
function floor(value) {
    if (!value)
        return '';
    return Math.floor(Number(value)).toString();
}
exports.floor = floor;
