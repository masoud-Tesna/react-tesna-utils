"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDecimalPrecision = void 0;
const toDecimalPrecision = (input, allLength) => {
    var _a;
    const inputArray = input.split('.');
    const integer = inputArray[0];
    const decimal = (_a = inputArray[1]) === null || _a === void 0 ? void 0 : _a.slice(0, allLength - inputArray[0].length);
    return `${integer}${decimal ? '.' : ''}${decimal || ''}`;
};
exports.toDecimalPrecision = toDecimalPrecision;
