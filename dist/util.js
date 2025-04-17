"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNavigator = exports.isBrowser = exports.off = exports.on = exports.noop = void 0;
const noop = () => { };
exports.noop = noop;
function on(obj, ...args) {
    if (obj && obj.addEventListener) {
        obj.addEventListener(...args);
    }
}
exports.on = on;
function off(obj, ...args) {
    if (obj && obj.removeEventListener) {
        obj.removeEventListener(...args);
    }
}
exports.off = off;
exports.isBrowser = typeof window !== 'undefined';
exports.isNavigator = typeof navigator !== 'undefined';
