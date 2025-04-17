"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = void 0;
const isJson = (str) => {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isJson = isJson;
