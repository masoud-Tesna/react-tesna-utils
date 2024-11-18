"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayEqual = void 0;
const lodash_1 = require("lodash");
const isArrayEqual = (x, y) => (0, lodash_1.size)(x) === (0, lodash_1.size)(y) && (0, lodash_1.isEmpty)((0, lodash_1.xorWith)(x, y, lodash_1.isEqual));
exports.isArrayEqual = isArrayEqual;
