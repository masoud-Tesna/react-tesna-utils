"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEnDigit = void 0;
/*
  Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
  Remove the Unicode base(2) range that not match
*/
const toEnDigit = (n) => n === null || n === void 0 ? void 0 : n.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (a) => (a === null || a === void 0 ? void 0 : a.charCodeAt(0)) & 0xf);
exports.toEnDigit = toEnDigit;
