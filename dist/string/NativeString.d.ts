declare class NativeString {
    protected _value: string;
    constructor(value: string);
    /** Returns the length of a String object. */
    get length(): number;
    /**
     * Returns the character at the specified index.
     *
     * @param {number} pos The zero-based index of the desired character.
     */
    charAt(pos: number): this;
    /**
     * Returns the Unicode value of the character at the specified location.
     *
     * @param {number} index The zero-based index of the desired character. If
     *   there is no character at the specified index, NaN is returned.
     */
    charCodeAt(index: number): number;
    /**
     * Returns a nonnegative integer Number less than 1114112 (0x110000) that is
     * the code point value of the UTF-16 encoded code point starting at the
     * string element at position pos in the String resulting from converting this
     * object to a String. If there is no element at that position, the result is
     * undefined. If a valid UTF-16 surrogate pair does not begin at pos, the
     * result is the code unit at pos.
     *
     * @param {number} pos
     */
    codePointAt(pos: number): number | undefined;
    /**
     * Returns a string that contains the concatenation of two or more strings.
     *
     * @param {string[]} strings The strings to append to the end of the string.
     */
    concat(...strings: any[]): this;
    /**
     * Returns true if the sequence of elements of searchString converted to a
     * String is the same as the corresponding elements of this object (converted
     * to a String) starting at endPosition – length(this). Otherwise returns false.
     *
     * @param {string} searchString
     * @param {number} [endPosition]
     */
    endsWith(searchString: string, endPosition: number | undefined): boolean;
    /**
     * Returns true if searchString appears as a substring of the result of
     * converting this object to a String, at one or more positions that are
     * greater than or equal to position; otherwise, returns false.
     *
     * @param {string} searchString Search string
     * @param {number} [position] If position is undefined, 0 is assumed, so as to
     *   search all of the String.
     */
    includes(searchString: string, position: number | undefined): boolean;
    /**
     * Returns the position of the first occurrence of a substring.
     *
     * @param {string} searchString The substring to search for in the string
     * @param {number} [position] The index at which to begin searching the String
     *   object. If omitted, search starts at the beginning of the string.
     */
    indexOf(searchString: string, position: number | undefined): number;
    /**
     * Returns the last occurrence of a substring in the string.
     *
     * @param {string} searchString The substring to search for.
     * @param {number} [position] The index at which to begin searching. If
     *   omitted, the search begins at the end of the string.
     */
    lastIndexOf(searchString: string, position: number | undefined): number;
    /**
     * Determines whether two strings are equivalent in the current locale.
     *
     * @param {string} value String to compare to target string
     * @returns {number}
     */
    localeCompare(value: string): number;
    /**
     * Matches a string an object that supports being matched against, and returns
     * an array containing the results of that search.
     *
     * @param {{ [Symbol.match](string: string): RegExpMatchArray | null }} matcher
     *   An object that supports being matched against.
     * @returns {RegExpMatchArray | null}
     */
    match(matcher: {
        [Symbol.match](string: string): RegExpMatchArray | null;
    }): RegExpMatchArray | null;
    /**
     * Returns the String value result of normalizing the string into the
     * normalization form named by form as specified in Unicode Standard Annex
     * #15, Unicode Normalization Forms.
     *
     * @param {'NFC' | 'NFD' | 'NFKC' | 'NFKD'} form Applicable values: "NFC",
     *   "NFD", "NFKC", or "NFKD", If not specified default is "NFC"
     */
    normalize(form: string): this;
    /**
     * Pads the current string with a given string (possibly repeated) so that the
     * resulting string reaches a given length. The padding is applied from the
     * end (right) of the current string.
     *
     * @param {number} maxLength The length of the resulting string once the
     *   current string has been padded. If this parameter is smaller than the
     *   current string's length, the current string will be returned as it is.
     * @param {string} [fillString] The string to pad the current string with. If
     *   this string is too long, it will be truncated and the left-most part will
     *   be applied. The default value for this parameter is " " (U+0020).
     */
    padEnd(maxLength: number, fillString: string | undefined): this;
    /**
     * Pads the current string with a given string (possibly repeated) so that the
     * resulting string reaches a given length. The padding is applied from the
     * start (left) of the current string.
     *
     * @param {number} maxLength The length of the resulting string once the
     *   current string has been padded. If this parameter is smaller than the
     *   current string's length, the current string will be returned as it is.
     * @param {string} [fillString] The string to pad the current string with. If
     *   this string is too long, it will be truncated and the left-most part will
     *   be applied. The default value for this parameter is " " (U+0020).
     */
    padStart(maxLength: number, fillString: string | undefined): this;
    /**
     * Returns a String value that is made from count copies appended together. If
     * count is 0, the empty string is returned.
     *
     * @param {number} count Number of copies to append
     */
    repeat(count: number): this;
    /**
     * Replaces text in a string, using a regular expression or search string.
     *
     * @param {string | RegExp} searchValue A string to search for.
     * @param {string} replaceValue A string containing the text to replace for
     *   every successful match of searchValue in this string.
     */
    replace(searchValue: {
        [Symbol.replace](string: string, replaceValue: string): string;
    }, replaceValue: string): this;
    /**
     * Finds the first substring match in a regular expression search.
     *
     * @param {string | RegExp} regexp The regular expression pattern and applicable flags.
     * @returns {number}
     */
    search(regexp: {
        [Symbol.search](string: string): number;
    }): number;
    /**
     * Returns a section of a string.
     *
     * @param {number} [start] The index to the beginning of the specified portion
     *   of stringObj.
     * @param {number} [end] The index to the end of the specified portion of
     *   stringObj. The substring includes the characters up to, but not
     *   including, the character indicated by end. If this value is not
     *   specified, the substring continues to the end of stringObj.
     */
    slice(start: number | undefined, end: number | undefined): this;
    /**
     * Split a string into substrings using the specified separator and return
     * them as an array.
     *
     * @param {string | RegExp} separator A string that identifies character or
     *   characters to use in separating the string. If omitted, a single-element
     *   array containing the entire string is returned.
     * @param {number} [limit] A value used to limit the number of elements
     *   returned in the array.
     * @returns {string[]}
     */
    split(separator: {
        [Symbol.split](string: string, limit?: number | undefined): string[];
    }, limit: number | undefined): string[];
    /**
     * Gets a substring beginning at the specified location and having the specified length.
     *
     * @param {number} from The starting position of the desired substring. The
     *   index of the first character in the string is zero.
     * @param {number} [length] The number of characters to include in the
     *   returned substring.
     */
    substr(from: number, length: number | undefined): this;
    /**
     * Returns the substring at the specified location within a String object.
     *
     * @param {number} start The zero-based index number indicating the beginning
     *   of the substring.
     * @param {number} [end] Zero-based index number indicating the end of the
     *   substring. The substring includes the characters up to, but not
     *   including, the character indicated by end. If end is omitted, the
     *   characters from start through the end of the original string are returned.
     */
    substring(start: number, end: number | undefined): this;
    /**
     * Returns true if the sequence of elements of searchString converted to a
     * String is the same as the corresponding elements of this object (converted
     * to a String) starting at position. Otherwise returns false.
     *
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     */
    startsWith(searchString: string, position: number | undefined): boolean;
    /** Converts all the alphabetic characters in a string to lowercase. */
    toLowerCase(): this;
    /**
     * Converts all alphabetic characters to lowercase, taking into account the
     * host environment's current locale.
     */
    toLocaleLowerCase(): this;
    /** Converts all the alphabetic characters in a string to uppercase. */
    toUpperCase(): this;
    /**
     * Returns a string where all alphabetic characters have been converted to
     * uppercase, taking into account the host environment's current locale.
     */
    toLocaleUpperCase(): this;
    /**
     * Returns a string representation of a TesnaStringType & NativeString Object
     *
     * @returns {string}
     */
    toString(): string;
    /**
     * Removes the leading and trailing white space and line terminator characters
     * from a string.
     */
    trim(): this;
    /** Removes whitespace from the left end of a string. */
    trimLeft(): this;
    /** Removes whitespace from the right end of a string. */
    trimRight(): this;
    /** Returns the primitive value of the specified object. */
    valueOf(): string;
}
export default NativeString;
