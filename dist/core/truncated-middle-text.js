"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncatedMiddleText = void 0;
const truncatedMiddleText = ({ text, startLength = 5, endLength = 15, separator = '...' }) => {
    var _a;
    const stringText = (_a = text === null || text === void 0 ? void 0 : text.toString()) === null || _a === void 0 ? void 0 : _a.trim();
    if (!stringText || (stringText === null || stringText === void 0 ? void 0 : stringText.length) <= startLength + endLength) {
        return stringText;
    }
    const startWords = stringText.slice(0, startLength);
    const endWords = stringText.slice(-endLength);
    return startWords + separator + endWords;
};
exports.truncatedMiddleText = truncatedMiddleText;
