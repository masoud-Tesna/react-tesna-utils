"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCadNumber = void 0;
const formatCadNumber = (cardNumber) => cardNumber === null || cardNumber === void 0 ? void 0 : cardNumber.replace(/\d{4}(?=.)/g, '$& - ');
exports.formatCadNumber = formatCadNumber;
