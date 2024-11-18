"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllPersianCharacters = void 0;
const isAllPersianCharacters = (input) => {
    const persianRegex = /^[\u0600-\u06FF\s\d\p{P}]+$/u; // Allow Persian characters, spaces, digits, and punctuation
    return persianRegex.test(input);
};
exports.isAllPersianCharacters = isAllPersianCharacters;
