"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChunksFromString = void 0;
const getChunksFromString = (str, chunkSize) => {
    const regexChunk = new RegExp(`.{1,${chunkSize}}`, 'g'); // '.' represents any character
    return str.match(regexChunk);
};
exports.getChunksFromString = getChunksFromString;
