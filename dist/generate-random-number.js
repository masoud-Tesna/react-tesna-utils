"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = void 0;
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
exports.generateRandomNumber = generateRandomNumber;
