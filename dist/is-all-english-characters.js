"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllEnglishCharacters = void 0;
const isAllEnglishCharacters = (input) => {
    const englishRegex = /^[a-zA-Z\s\d\p{P}]+$/u; // Allow English characters, spaces, digits, and punctuation
    return englishRegex.test(input);
};
exports.isAllEnglishCharacters = isAllEnglishCharacters;
