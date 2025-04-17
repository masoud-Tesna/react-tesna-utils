"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContainsPersianCharacter = void 0;
const isContainsPersianCharacter = (input) => {
    if (!input)
        return false;
    const persianRegex = /[\u0600-\u06FF]/; // Range for Persian characters in Unicode
    return persianRegex.test(input);
};
exports.isContainsPersianCharacter = isContainsPersianCharacter;
