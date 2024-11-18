"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration));
exports.wait = wait;
