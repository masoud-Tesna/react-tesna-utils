"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = exports.security = exports.isValidBankCard = exports.isInteger = exports.halfSpace = exports.digitsToWords = exports.switchKey = exports.decodeURL = exports.arabicNumber = exports.persianNumber = exports.englishNumber = exports.persianChar = void 0;
// Declare Number Arrays in different locales
const regExpArabicNumber = new RegExp(/[\u0660-\u0669]/, 'g'), regExpPersianNumber = new RegExp(/[\u06f0-\u06f9]/, 'g'), regExpEnglishNumber = new RegExp(/[\u0030-\u0039]/, 'g');
/** Used for convert Arabic characters to Persian */
function persianChar(value) {
    if (!value) {
        return '';
    }
    const arabicChars = [
        'ي',
        'ك',
        '‍',
        'دِ',
        'بِ',
        'زِ',
        'ذِ',
        'ِشِ',
        'ِسِ',
        'ى'
    ], persianChars = ['ی', 'ک', '', 'د', 'ب', 'ز', 'ذ', 'ش', 'س', 'ی'];
    for (let i = 0, charsLen = arabicChars.length; i < charsLen; i++) {
        value = value.replace(new RegExp(arabicChars[i], 'g'), persianChars[i]);
    }
    return value;
}
exports.persianChar = persianChar;
/** Used for convert any numbers to English */
function englishNumber(value) {
    if (!value) {
        return value;
    }
    return value.replace(regExpArabicNumber, function (c) {
        return (c.charCodeAt(0) - 0x0660);
    }).replace(regExpPersianNumber, function (c) {
        return (c.charCodeAt(0) - 0x06f0);
    });
}
exports.englishNumber = englishNumber;
/** Used for convert any numbers to Persian */
function persianNumber(value) {
    if (!value) {
        return '';
    }
    return value.replace(regExpArabicNumber, function (c) {
        return String.fromCharCode(parseInt((c.charCodeAt(0) - 0x0660), 10) + 0x06f0);
    }).replace(regExpEnglishNumber, function (c) {
        return String.fromCharCode(parseInt(c, 10) + 0x06f0);
    });
}
exports.persianNumber = persianNumber;
/** Used for convert any numbers to arabic */
function arabicNumber(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.replace(regExpPersianNumber, function (c) {
        return String.fromCharCode(parseInt((c.charCodeAt(0) - 0x06f0), 10) + 0x0660);
    }).replace(regExpEnglishNumber, function (c) {
        return String.fromCharCode(parseInt(c, 10) + 0x0660);
    });
}
exports.arabicNumber = arabicNumber;
/**
 * Used for decode Persian Characters in URL
 * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
 */
function decodeURL(value) {
    if (!value) {
        return '';
    }
    // Replace every %20 with _ to protect them from decodeURI
    let old = '';
    while (old !== value) {
        old = value;
        value = value.replace(/(http\S+?)%20/g, '$1\u200c\u200c\u200c_\u200c\u200c\u200c');
    }
    // Decode URIs
    // NOTE: This would convert all %20's to _'s which could break some links
    // but we will undo that later on
    value = value.replace(/(http\S+)/g, function (s, p) {
        return decodeURI(p);
    });
    // Revive all instances of %20 to make sure no links is broken
    return value.replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g, '%20');
}
exports.decodeURL = decodeURL;
/** Used for Change keyboard layout */
function switchKey(value) {
    if (!value) {
        return '';
    }
    const persianChars = [
        'ض',
        'ص',
        'ث',
        'ق',
        'ف',
        'غ',
        'ع',
        'ه',
        'خ',
        'ح',
        'ج',
        'چ',
        'ش',
        'س',
        'ی',
        'ب',
        'ل',
        'ا',
        'ت',
        'ن',
        'م',
        'ک',
        'گ',
        'ظ',
        'ط',
        'ز',
        'ر',
        'ذ',
        'د',
        'پ',
        'و',
        '؟'
    ], englishChar = [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '[',
        ']',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        '\'',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '?'
    ];
    for (let i = 0, charsLen = persianChars.length; i < charsLen; i++) {
        value = value.replace(new RegExp(persianChars[i], 'g'), englishChar[i]);
    }
    return value;
}
exports.switchKey = switchKey;
/** Used for get persian words representation of a number */
function digitsToWords(value) {
    if (!isFinite(value)) {
        return '';
    }
    if (typeof value !== 'string') {
        value = value.toString();
    }
    const parts = [
        '',
        'هزار',
        'میلیون',
        'میلیارد',
        'تریلیون',
        'کوادریلیون',
        'کویینتیلیون',
        'سکستیلیون'
    ];
    const numbers = {
        0: [
            '',
            'صد',
            'دویست',
            'سیصد',
            'چهارصد',
            'پانصد',
            'ششصد',
            'هفتصد',
            'هشتصد',
            'نهصد'
        ],
        1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
        2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
        two: [
            'ده',
            'یازده',
            'دوازده',
            'سیزده',
            'چهارده',
            'پانزده',
            'شانزده',
            'هفده',
            'هجده',
            'نوزده'
        ],
        zero: 'صفر'
    };
    const delimiter = ' و ';
    const valueParts = value.split('').reverse().join('').replace(/\d{3}(?=\d)/g, '$&,').split('').reverse().join('').split(',').map(function (str) {
        return Array(4 - str.length).join('0') + str;
    });
    let result = (function () {
        const _results = [];
        for (let iThree in valueParts) {
            const three = valueParts[iThree];
            let resultThree = (function () {
                let _i;
                const _results1 = [];
                for (let i = (_i = 0), _len = three.length; _i < _len; i = ++_i) {
                    const digit = three[i];
                    if (i === 1 && digit === '1') {
                        _results1.push(numbers.two[three[2]]);
                    }
                    else if ((i !== 2 || three[1] !== '1') &&
                        numbers[i][digit] !== '') {
                        _results1.push(numbers[i][digit]);
                    }
                }
                return _results1;
            })();
            const resultThreeString = resultThree.join(delimiter);
            const _result = resultThreeString
                ? resultThreeString +
                    ' ' +
                    parts[valueParts.length - parseInt(iThree, 10) - 1]
                : resultThreeString;
            _results.push(_result);
        }
        return _results;
    })();
    result = result.filter(function (x) {
        return x.trim() !== '';
    });
    const resultString = result.join(delimiter).trim();
    if (resultString === '') {
        return numbers.zero;
    }
    return resultString;
}
exports.digitsToWords = digitsToWords;
/** Used for Zero-width non-joiner correction */
function halfSpace(value) {
    if (!value) {
        return '';
    }
    // Replace Zero-width non-joiner between persian MI.
    let pattern = /((\s\u0645\u06CC)+( )+([\u0600-\u06EF]{1,}){1,})/g;
    value = value.replace(new RegExp(pattern), '$2\u200C$4');
    // Replace Zero-width non-joiner between persian De-Yii.
    pattern = /(([\u0600-\u06EF]{1,})+( )+(ای|ایی|اند|ایم|اید|ام){1})/g;
    value = value.replace(new RegExp(pattern), '$2\u200C$4');
    return value;
}
exports.halfSpace = halfSpace;
/** Convert numbers to english number and remove anything expect integer or decimal numbers */
function toNumber(value, { negative = true, decimal = true, max, min } = {}) {
    var _a, _b, _c, _d;
    let num = ((_a = englishNumber(value).match(/(-?\.?\d?)+/g)) === null || _a === void 0 ? void 0 : _a.join('')) || '';
    if (decimal && negative) {
        num = num.replace(/(^.+)(-)/g, '$1');
        num = num.replace(/^\./g, '0.');
        num = num.replace(/^-\./g, '-0.');
        num = ((_b = num.match(/^-?\d*\.?\d*$/g)) === null || _b === void 0 ? void 0 : _b.join('')) || '';
    }
    else {
        if (negative) {
            num = num.replace(/(^.+)(-)/g, '$1');
            num = ((_c = num.match(/^-?(\d?)+$/g)) === null || _c === void 0 ? void 0 : _c.join('')) || '';
        }
        else if (decimal) {
            num = num.replace(/^\./g, '0.');
            num = ((_d = num.match(/\d*\.?\d*$/g)) === null || _d === void 0 ? void 0 : _d.join('')) || '';
        }
        else {
            num = num.replace(/\D/g, '');
        }
    }
    if (typeof max === 'number') {
        if (Number(num) > max) {
            num = String(max);
        }
    }
    if (typeof min === 'number') {
        if (Number(num) < min) {
            num = String(min);
        }
    }
    return num;
}
exports.toNumber = toNumber;
/** Used for validation integer number */
function isInteger(value) {
    return Number.isInteger(Number(value));
}
exports.isInteger = isInteger;
/**
 * Used for validation back card number
 *
 * @param {string} value 16 digit
 */
function isValidBankCard(value) {
    // accept only digits, dashes or spaces
    if (!isInteger(value))
        return false;
    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, '');
    for (let n = value.length - 1; n >= 0; n--) {
        const cDigit = value.charAt(n);
        let nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit *= 2) > 9)
                nDigit -= 9;
        }
        nCheck += nDigit;
        bEven = !bEven;
    }
    return nCheck % 10 === 0;
}
exports.isValidBankCard = isValidBankCard;
/** Convert any char to star ("*") */
function security(value) {
    return '*'.repeat(value.length);
}
exports.security = security;
