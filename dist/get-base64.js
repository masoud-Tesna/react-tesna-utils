"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase64 = void 0;
const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});
exports.getBase64 = getBase64;
