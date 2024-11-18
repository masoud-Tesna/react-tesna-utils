"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPhoneNumber = void 0;
const formatPhoneNumber = (phoneNumber) => {
    //Filter only numbers from the input
    let cleaned = phoneNumber.replace(/\D/g, '');
    if ((cleaned === null || cleaned === void 0 ? void 0 : cleaned.length) < 11) {
        cleaned = cleaned === null || cleaned === void 0 ? void 0 : cleaned.replace(/^/, '0');
    }
    else if ((cleaned === null || cleaned === void 0 ? void 0 : cleaned.length) > 11) {
        if (cleaned === null || cleaned === void 0 ? void 0 : cleaned.startsWith('98')) {
            cleaned = cleaned === null || cleaned === void 0 ? void 0 : cleaned.replace('98', '0');
        }
    }
    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
};
exports.formatPhoneNumber = formatPhoneNumber;
