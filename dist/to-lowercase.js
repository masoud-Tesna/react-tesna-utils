"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowercase = void 0;
const toLowercase = (str) => { var _a; return ((_a = str[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) + (str === null || str === void 0 ? void 0 : str.slice(1)); };
exports.toLowercase = toLowercase;
