"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertColor = void 0;
const convertColor = (color, percent) => {
    const hexToDecimal = (hex) => Number(`0x${hex}`);
    const decimalToHex = (dec) => { var _a; return (_a = dec === null || dec === void 0 ? void 0 : dec.toString(16)) === null || _a === void 0 ? void 0 : _a.padStart(2, '0'); };
    const R = hexToDecimal(color[1] + color[2]);
    const G = hexToDecimal(color[3] + color[4]);
    const B = hexToDecimal(color[5] + color[6]);
    const updatedR = Math.min(Math.round(R * (100 + percent) / 100), 255);
    const updatedG = Math.min(Math.round(G * (100 + percent) / 100), 255);
    const updatedB = Math.min(Math.round(B * (100 + percent) / 100), 255);
    const RR = decimalToHex(updatedR);
    const GG = decimalToHex(updatedG);
    const BB = decimalToHex(updatedB);
    return `#${RR}${GG}${BB}`;
};
exports.convertColor = convertColor;
