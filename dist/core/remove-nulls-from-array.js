"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNullsFromArray = void 0;
function removeNullsFromArray(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map((item) => removeNullsFromArray(item));
    }
    else if (typeof obj === 'object' && obj !== null) {
        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = removeNullsFromArray(obj[key]);
            }
        }
        return newObj;
    }
    return obj;
}
exports.removeNullsFromArray = removeNullsFromArray;
