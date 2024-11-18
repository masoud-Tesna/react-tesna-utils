"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimStringsStructure = void 0;
function trimStringsStructure(input) {
    if (Array.isArray(input)) {
        return input === null || input === void 0 ? void 0 : input.map(item => {
            if (typeof item === 'string') {
                return item === null || item === void 0 ? void 0 : item.trim();
            }
            else if (typeof item === 'object' && item !== null) {
                return trimStringsStructure(item);
            }
            return item;
        });
    }
    else if (typeof input === 'object' && input !== null) {
        const trimmedObject = {};
        for (const key in input) {
            if (input.hasOwnProperty(key)) {
                const value = input[key];
                if (typeof value === 'string') {
                    trimmedObject[key] = value === null || value === void 0 ? void 0 : value.trim();
                }
                else if (typeof value === 'object' && value !== null) {
                    trimmedObject[key] = trimStringsStructure(value);
                }
                else {
                    trimmedObject[key] = value;
                }
            }
        }
        return trimmedObject;
    }
    return input;
}
exports.trimStringsStructure = trimStringsStructure;
