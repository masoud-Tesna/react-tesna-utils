"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn_deadline = void 0;
/**
 * Calculate the deadline based on the provided time.
 * @param time Time string in the format 'hh:mm:ss'.
 * @returns The deadline timestamp in milliseconds.
 */
const fn_deadline = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(parseFloat);
    const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000;
    return Date.now() + totalMilliseconds;
};
exports.fn_deadline = fn_deadline;
