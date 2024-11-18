import { toNumber } from './core';
import NativeString from './NativeString';
/** TesnaString constructor */
declare function tesnaString(value: string | number | (string | number)[]): TesnaString;
declare class TesnaString extends NativeString {
    constructor(value: string);
    /** Returns a copy of a TesnaString Object */
    clone(): TesnaString;
    /** Used for set new string */
    set(value: string): TesnaString;
    /** Used for convert Arabic characters to Persian */
    persianChar(): TesnaString;
    /** Used for convert any numbers to English */
    englishNumber(): TesnaString;
    /** Used for convert Arabic numbers to Persian */
    persianNumber(): TesnaString;
    /** Used for convert English numbers to arabic */
    arabicNumber(): TesnaString;
    /**
     * Used for Normalize url
     * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
     */
    fixURL(): TesnaString;
    /**
     * Used for decode Persian Characters in URL
     * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
     */
    decodeURL(): TesnaString;
    /** Used for Change keyboard layout */
    switchKey(): TesnaString;
    /** Used for get persian words representation of a number */
    digitsToWords(): TesnaString;
    /** Used for Zero-width non-joiner correction */
    halfSpace(): TesnaString;
    /** Return true if value is Integer */
    isInteger(): boolean;
    /** Used for validation back card number */
    isValidBankCard(): boolean;
    /**
     * Used to convert scientific notations to decimal
     *
     * @example
     *   tesnaString(`5.2e-8`).scientificNotationToDecimal(); //`0.000000052`
     */
    scientificNotationToDecimal(): TesnaString;
    /** Used for convert to price mode */
    toCurrency(formatCurrency?: boolean): TesnaString;
    /** Remove anything expect numbers */
    parseNumber(options?: Parameters<typeof toNumber>[1]): TesnaString;
    /** Convert any char to star ("*") */
    security(): TesnaString;
    /** Convert any string to number */
    toStringNumber(options?: Parameters<typeof toNumber>[1]): string;
    /**
     * Precision decimal number with all number length for
     *
     * @example
     *   tesnaString(`12.3456`).paddingDecimal(3); //`12.3`
     *   tesnaString(`123456`).paddingDecimal(3); //`123456`
     */
    toDecimalPrecision(allLength: number): TesnaString;
    /** Convert any string to number */
    toNumber(options?: Parameters<typeof toNumber>[1]): number;
    /**
     * Convert to string representing a number in fixed-point notation.
     *
     * @param value
     * @param fractionDigits — Number of digits after the decimal point. Must be
     *   in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits?: number | undefined): TesnaString;
    /**
     * Convert to string representing a number in fixed-point notation and trim .
     *
     * @param value
     * @param fractionDigits — Number of digits after the decimal point. Must be
     *   in the range 0 - 20, inclusive.
     */
    toFixedNumber(fractionDigits?: number | undefined): TesnaString;
    floor(): TesnaString;
}
declare global {
    interface String {
        tesnaString: TesnaString;
    }
}
export { tesnaString };
export type { TesnaString };
