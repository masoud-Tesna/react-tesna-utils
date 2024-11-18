"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase64 = void 0;
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
exports.getBase64 = getBase64;
