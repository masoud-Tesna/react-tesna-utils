"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNationalCode = void 0;
const to_en_digit_1 = require("./to-en-digit");
const isValidNationalCode = (value) => {
    const input = (0, to_en_digit_1.toEnDigit)(value === null || value === void 0 ? void 0 : value.toString());
    if (input.length !== 10)
        return false;
    const check = +input[9];
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += +input[i] * (10 - i);
    }
    sum = sum % 11;
    return sum < 2 ? check === sum : check + sum === 11;
};
exports.isValidNationalCode = isValidNationalCode;
