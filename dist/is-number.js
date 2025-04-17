"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
const isNumber = (val) => !isNaN(parseFloat(val)) && !isNaN(val - 0);
exports.isNumber = isNumber;
