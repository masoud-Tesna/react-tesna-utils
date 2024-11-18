"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tesnaString = void 0;
const core_1 = require("./core");
const NativeString_1 = __importDefault(require("./NativeString"));
/** TesnaString constructor */
function tesnaString(value) {
    if (typeof value === 'number' || typeof value === 'string') {
        value = String(value);
    }
    else if (Array.isArray(value)) {
        value = value.join('');
    }
    else if (value === undefined || value === null) {
        value = '';
    }
    else {
        throw new Error(`TesnaString value must be type of string, number or Array<string|number> instead of ${typeof value}`);
    }
    return new TesnaString(value);
}
exports.tesnaString = tesnaString;
class TesnaString extends NativeString_1.default {
    constructor(value) {
        super(value);
    }
    /** Returns a copy of a TesnaString Object */
    clone() {
        return tesnaString(this._value);
    }
    /** Used for set new string */
    set(value) {
        this._value = String(value);
        return this;
    }
    /** Used for convert Arabic characters to Persian */
    persianChar() {
        this._value = (0, core_1.persianChar)(this.toString());
        return this;
    }
    /** Used for convert any numbers to English */
    englishNumber() {
        this._value = (0, core_1.englishNumber)(this._value);
        return this;
    }
    /** Used for convert Arabic numbers to Persian */
    persianNumber() {
        this._value = (0, core_1.persianNumber)(this._value);
        return this;
    }
    /** Used for convert English numbers to arabic */
    arabicNumber() {
        this._value = (0, core_1.arabicNumber)(this._value);
        return this;
    }
    /**
     * Used for Normalize url
     * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
     */
    fixURL() {
        if (!this._value) {
            return this;
        }
        if (/^(wss?(:|\/))/i.test(this._value)) {
            this._value = this._value.replace(/^(ws)?(s)?(:*)(\/+)?/i, `ws$2://`);
        }
        else if (/^(ftps?(:|\/))/i.test(this._value)) {
            this._value = this._value.replace(/^(ftp)?(s)?(:*)(\/+)?/i, `ftp$2://`);
        }
        else {
            this._value = this._value.replace(/^(http)?(s)?(:*)(\/+)?/i, `http$2://`);
        }
        this._value = this._value.replace(/(\/?)$/i, `/`);
        return this;
    }
    /**
     * Used for decode Persian Characters in URL
     * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
     */
    decodeURL() {
        this._value = (0, core_1.decodeURL)(this._value);
        return this;
    }
    /** Used for Change keyboard layout */
    switchKey() {
        this._value = (0, core_1.switchKey)(this._value);
        return this;
    }
    /** Used for get persian words representation of a number */
    digitsToWords() {
        this._value = (0, core_1.digitsToWords)(this._value);
        return this;
    }
    /** Used for Zero-width non-joiner correction */
    halfSpace() {
        this._value = (0, core_1.halfSpace)(this._value);
        return this;
    }
    /** Return true if value is Integer */
    isInteger() {
        return (0, core_1.isInteger)(this._value);
    }
    /** Used for validation back card number */
    isValidBankCard() {
        return (0, core_1.isValidBankCard)(this._value);
    }
    /**
     * Used to convert scientific notations to decimal
     *
     * @example
     *   tesnaString(`5.2e-8`).scientificNotationToDecimal(); //`0.000000052`
     */
    scientificNotationToDecimal() {
        this._value = (0, core_1.scientificNotationToDecimal)(this._value);
        return this;
    }
    /** Used for convert to price mode */
    toCurrency(formatCurrency = false) {
        this._value = (0, core_1.toCurrency)(this._value, formatCurrency);
        return this;
    }
    /** Remove anything expect numbers */
    parseNumber(options) {
        this.englishNumber();
        this._value = (0, core_1.toNumber)(this._value, options);
        return this;
    }
    /** Convert any char to star ("*") */
    security() {
        this._value = (0, core_1.security)(this._value);
        return this;
    }
    /** Convert any string to number */
    toStringNumber(options) {
        this.parseNumber(options);
        return this._value;
    }
    /**
     * Precision decimal number with all number length for
     *
     * @example
     *   tesnaString(`12.3456`).paddingDecimal(3); //`12.3`
     *   tesnaString(`123456`).paddingDecimal(3); //`123456`
     */
    toDecimalPrecision(allLength) {
        this._value = (0, core_1.toDecimalPrecision)(this._value, allLength);
        return this;
    }
    /** Convert any string to number */
    toNumber(options) {
        this.parseNumber(options);
        return Number(this._value);
    }
    /**
     * Convert to string representing a number in fixed-point notation.
     *
     * @param value
     * @param fractionDigits — Number of digits after the decimal point. Must be
     *   in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits) {
        this._value = (0, core_1.toFixed)(this._value, fractionDigits);
        return this;
    }
    /**
     * Convert to string representing a number in fixed-point notation and trim .
     *
     * @param value
     * @param fractionDigits — Number of digits after the decimal point. Must be
     *   in the range 0 - 20, inclusive.
     */
    toFixedNumber(fractionDigits) {
        this._value = Number((0, core_1.toFixed)(this._value, fractionDigits)).toString();
        return this;
    }
    floor() {
        this._value = (0, core_1.floor)(this._value);
        return this;
    }
}
// eslint-disable-next-line no-extend-native
Object.defineProperties(String.prototype, {
    tesnaString: {
        get: function () {
            return tesnaString(this);
        },
    },
});
