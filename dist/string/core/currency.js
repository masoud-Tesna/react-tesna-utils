"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCurrency = void 0;
/** Used for convert english number to currency mode */
function toCurrency(value, formatCurrency) {
    if (!value)
        return '';
    value = value.replace(/[^\d.-]/g, '');
    let [integer, decimal] = value.split('.');
    if (integer) {
        integer = integer.split('').reverse().reduce((acc, cur, index) => {
            if (index % 3 === 0 && index !== 0) {
                acc.push(',');
            }
            acc.push(cur);
            return acc;
        }, []).reverse().join('').replace(/^([-]{0,1}),/, '$1');
    }
    if (decimal && formatCurrency) {
        decimal = decimal.replace(/[^\d.-]/g, '').replace(/(\d{3})/g, '$1,');
    }
    return `${integer}${value.includes('.') ? '.' + decimal : ''}`;
}
exports.toCurrency = toCurrency;
