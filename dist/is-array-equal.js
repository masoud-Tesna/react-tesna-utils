"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayEqual = void 0;
const lodash_size_1 = __importDefault(require("lodash.size"));
const lodash_isempty_1 = __importDefault(require("lodash.isempty"));
const lodash_xorwith_1 = __importDefault(require("lodash.xorwith"));
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const isArrayEqual = (x, y) => (0, lodash_size_1.default)(x) === (0, lodash_size_1.default)(y) && (0, lodash_isempty_1.default)((0, lodash_xorwith_1.default)(x, y, lodash_isequal_1.default));
exports.isArrayEqual = isArrayEqual;
