"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = void 0;
const formatNumber = (number) => {
    return number.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 10
    });
};
exports.formatNumber = formatNumber;
