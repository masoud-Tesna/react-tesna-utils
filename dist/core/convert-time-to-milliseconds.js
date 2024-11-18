"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimeToMilliseconds = void 0;
const timeConverter = {
    s: (time) => time * 1000,
    m: (time) => timeConverter.s(time * 60),
    h: (time) => timeConverter.m(time * 60)
};
const convertTimeToMilliseconds = (time, unit) => {
    const convert = timeConverter[unit];
    if (!convert) {
        throw new Error(`Invalid time unit: ${unit}`);
    }
    return convert(time);
};
exports.convertTimeToMilliseconds = convertTimeToMilliseconds;
