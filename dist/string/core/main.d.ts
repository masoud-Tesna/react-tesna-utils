/** Used for convert Arabic characters to Persian */
declare function persianChar(value: string): string;
/** Used for convert any numbers to English */
declare function englishNumber(value: string): string;
/** Used for convert any numbers to Persian */
declare function persianNumber(value: string): string;
/** Used for convert any numbers to arabic */
declare function arabicNumber(value: string): string;
/**
 * Used for decode Persian Characters in URL
 * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
 */
declare function decodeURL(value: string): string;
/** Used for Change keyboard layout */
declare function switchKey(value: string): string;
/** Used for get persian words representation of a number */
declare function digitsToWords(value: number | string): string;
/** Used for Zero-width non-joiner correction */
declare function halfSpace(value: string): string;
/** Convert numbers to english number and remove anything expect integer or decimal numbers */
declare function toNumber(value: string, { negative, decimal, max, min }?: {
    /** Default is true */
    negative?: boolean;
    /** Default is true */
    decimal?: boolean;
    max?: number;
    min?: number;
}): string;
/** Used for validation integer number */
declare function isInteger(value: string): boolean;
/**
 * Used for validation back card number
 *
 * @param {string} value 16 digit
 */
declare function isValidBankCard(value: string): boolean;
/** Convert any char to star ("*") */
declare function security(value: string): string;
export { persianChar, englishNumber, persianNumber, arabicNumber, decodeURL, switchKey, digitsToWords, halfSpace, isInteger, isValidBankCard, security, toNumber };
