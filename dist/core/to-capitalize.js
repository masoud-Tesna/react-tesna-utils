"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCapitalize = void 0;
const toCapitalize = (str) => { var _a; return ((_a = str[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + (str === null || str === void 0 ? void 0 : str.slice(1)); };
exports.toCapitalize = toCapitalize;
