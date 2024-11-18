"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContainsEnglishCharacter = void 0;
const isContainsEnglishCharacter = (input) => {
    const englishRegex = /[a-zA-Z]/; // Range for English characters
    return englishRegex.test(input);
};
exports.isContainsEnglishCharacter = isContainsEnglishCharacter;
