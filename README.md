[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/masoud-Tesna/react-tesna-utils)

# `convertTimeToMilliseconds`

## Description:

The `convertTimeToMilliseconds` function takes a time value and a unit (`s` for seconds, `m` for minutes, or `h` for hours) and converts the time into
milliseconds. This
is useful for standardizing time values across various formats.

## Example:

```typescript
import { convertTimeToMilliseconds } from 'react-tesna-utils';

// Convert 5 seconds to milliseconds
const timeInMilliseconds1 = convertTimeToMilliseconds(5, 's'); // Output: 5000

// Convert 2 hours to milliseconds
const timeInMilliseconds3 = convertTimeToMilliseconds(2, 'h'); // Output: 7200000
```

## Parameters:

- `time` (`number`): The time value you want to convert.
- `unit` (`TTimeUnit`): The unit of time, which can be:
  -`'s'` for seconds,
  -`'m'` for minutes,
- `'h'` for hours.

## Returns:

- `number`: The equivalent time in milliseconds.

## Notes:

- If an invalid unit is provided, the function throws an error indicating an invalid time unit.

***

# `fn_deadline`

Calculates a deadline timestamp based on the current time and a provided time duration in the format `hh:mm:ss`.

## Usage

```typescript
import { fn_deadline } from 'react-tesna-utils';

// Calculate a deadline 2 hours, 30 minutes, and 45 seconds from the current time
const deadlineTimestamp = fn_deadline("02:30:45");

// Calculate a deadline 15 minutes from the current time
const shortDeadline = fn_deadline("00:15:00");
```

***

# `formatCadNumber`

Formats a credit card or similar numeric string by adding hyphens every four digits for improved readability.

## Usage

```typescript
import { formatCadNumber } from 'react-tesna-utils';

// Format a 16-digit card number
const formattedCardNumber = formatCadNumber("1234567812345678");
// Output: "1234 - 5678 - 1234 - 5678"

// Format a 9-digit number
const formattedShortNumber = formatCadNumber("123456789");
// Output: "1234 - 5678 - 9"
```

***

# `formatNumber`

Formats a number as a localized string with up to 10 decimal places, using the user's locale for number formatting.

## Usage

```typescript
import { formatNumber } from 'react-tesna-utils';

// Format a number
const formattedNumber = formatNumber(1234567.890123);
// Output: "1,234,567.890123"

// Format a large number with no decimals
const formattedLargeNumber = formatNumber(9876543210);
// Output: "9,876,543,210"
```

***

# `formatPhoneNumber`

Formats a phone number string by cleaning non-numeric characters and arranging it in a standardized format.

## Usage

```typescript
import { formatPhoneNumber } from 'react-tesna-utils';

// Format a phone number with extra characters
const formattedPhoneNumber = formatPhoneNumber('0912-345-6789');
// Output: "(0912) 345-6789"

// Format a phone number with country code
const formattedPhoneNumberWithCountryCode = formatPhoneNumber('+989123456789');
// Output: "(0912) 345-6789"

// Invalid phone number
const invalidPhoneNumber = formatPhoneNumber('12345');
// Output: null
```

***

# `generateRandomNumber`

Generates a random integer between the specified minimum and maximum values (inclusive).

## Usage

```typescript
import { generateRandomNumber } from 'react-tesna-utils';

// Generate a random number between 1 and 10
const randomNum = generateRandomNumber(1, 10);
// Example output: 3

// Generate a random number between 100 and 200
const randomNumInRange = generateRandomNumber(100, 200);
// Example output: 142
```

***

# `getBase64`

The `getBase64` function takes a file object (e.g., an instance of `File`) and returns a `Promise` that resolves with the Base64-encoded string
representation of the file. This function is particularly useful for encoding files (e.g., images or documents) into Base64 format for tasks like
uploading or inline embedding.

## Parameters:

- `file: T`
    - Type: `T` (defaults to `TFile`, which extends `File` with a `uid` property).
    - The file object to be converted to Base64.

## Returns

- `Promise<string>`
    - Resolves to the Base64-encoded string representation of the file.
    - Rejects if an error occurs while reading the file.

## Usage

```typescript
import { getBase64 } from 'react-tesna-utils';

// Example usage
const handleFile = async (file: File) => {
  try {
    const base64String = await getBase64(file);
    console.log('Base64:', base64String);
  }
  catch (error) {
    console.error('Error converting file to Base64:', error);
  }
};
```

This function is a clean and reusable utility for Base64 encoding files, particularly in scenarios where files need to be serialized for APIs or
inline usage.

***

# `getChunksFromString`

Splits a string into an array of substrings, each of a specified chunk size.

## Parameters:

- `str` (`string`): The string to be split into chunks.
- `chunkSize` (`number`): The maximum size of each chunk.

## Returns

- `string[] | null`: An array of substrings split by the specified chunk size. If the string does not match the regular expression, it will return
  `null`.

## Usage

```typescript
import { getChunksFromString } from 'react-tesna-utils';

const longString = "This is a long string that needs to be chunked.";
const chunked = getChunksFromString(longString, 10);

console.log(chunked);
// Output: [ 'This is a ', 'long strin', 'g that ne', 'eds to be', ' chunked.' ]
```

## Notes:

- The function uses a regular expression to match chunks of the specified size. It can handle strings of varying lengths and will return the string
  split into as many
  chunks as necessary.
- If the `str` is shorter than the `chunkSize`, it will return the entire string as a single element in the array.
- If the input string is empty or `null`, the function will return `null`.

***

# `isAllEnglishCharacters`

Checks if the given string contains only English characters, spaces, digits, and punctuation.

## Parameters:

- `input` (`string`): The string to check.

## Returns

- `boolean`: `true` if the input string contains only English characters (both uppercase and lowercase), spaces, digits, or punctuation. Otherwise,
  returns false.

## Usage

```typescript
import { isAllEnglishCharacters } from 'react-tesna-utils';

const input1 = "Hello, World!";
const input2 = "مرحبا بالعالم";

console.log(isAllEnglishCharacters(input1));  // Output: true
console.log(isAllEnglishCharacters(input2));  // Output: false
```

## Notes:

- The function uses a regular expression (`/^[a-zA-Z\s\d\p{P}]+$/u`) to ensure that the string contains only English letters (both lowercase and
  uppercase), spaces,
  digits,
  and punctuation characters.
- This function will return `false` if the string contains any non-English characters (such as Arabic, Chinese, etc.) or other symbols not allowed by
  the regex.
- The regex considers punctuation characters using the Unicode property `\p{P}`.
-

***

# `isAllPersianCharacters`

Checks if the given string contains only Persian characters, spaces, digits, and punctuation.

## Parameters:

- `input` (`string`): The string to check.

## Returns

- `boolean`: `true` if the input string contains only English characters (both uppercase and lowercase), spaces, digits, or punctuation. Otherwise,
  returns false.

## Usage

```typescript
import { isAllPersianCharacters } from 'react-tesna-utils';

const input1 = "سلام دنیا!";
const input2 = "Hello World!";

console.log(isAllPersianCharacters(input1));  // Output: true
console.log(isAllPersianCharacters(input2));  // Output: false
```

## Notes:

- The function uses a regular expression (`/^[\u0600-\u06FF\s\d\p{P}]+$/u`) to ensure that the string contains only Persian characters (Unicode range
  `\u0600-\u06FF`),
  spaces, digits, and punctuation characters.
- This function will return `false` if the string contains any non-Persian characters (such as English, Arabic, etc.) or other symbols not allowed by
  the regex.
- The regex considers punctuation characters using the Unicode property `\p{P}`.

***

# `isArrayEqual`

Compares two arrays to determine if they are equal, taking into account both their size and content.

## Parameters:

- `x` (`unknown[]`): The first array to compare.
- `y` (`unknown[]`): The second array to compare.

## Returns

- `boolean`: `true` if the arrays have the same size and identical elements (compared by value). Otherwise, returns false.

## Usage

```typescript
import { isArrayEqual } from 'react-tesna-utils';

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [4, 5, 6];

console.log(isArrayEqual(array1, array2));  // Output: true
console.log(isArrayEqual(array1, array3));  // Output: false
```

## Notes:

This function uses lodash methods size, xorWith, and isEqual to compare the arrays:

- `size`: Ensures both arrays are of the same length.
- `xorWith`: Compares the elements of both arrays and checks if any elements are different.
- `isEqual`: Compares array elements by value, checking for deep equality.

It returns true if the arrays have the same number of elements and all corresponding elements are equal by value.

***

# `isContainsEnglishCharacter`

Checks if the given string contains at least one English character.

## Parameters:

- `input` (`string`): The string to check for English characters.

## Returns

- `boolean`: `true` if the string contains at least one English character (either lowercase or uppercase). Otherwise, returns `false`.

## Usage

```typescript
import { isContainsEnglishCharacter } from 'react-tesna-utils';

const str1 = "Hello, world!";
const str2 = "مرحبا بالعالم";

console.log(isContainsEnglishCharacter(str1));  // Output: true
console.log(isContainsEnglishCharacter(str2));  // Output: false
```

## Notes:

- The function uses a regular expression `/[a-zA-Z]/` to search for English alphabetic characters (both lowercase and uppercase).
- It returns `true` if the string contains at least one English letter and `false` otherwise.

***

# `isContainsPersianCharacter`

Checks if the given string contains at least one Persian character.

## Parameters:

- `input` (`string`): The string to check for English characters.

## Returns

- `boolean`: `true` if the string contains at least one English character (either lowercase or uppercase). Otherwise, returns `false`.

## Usage

```typescript
import { isContainsPersianCharacter } from 'react-tesna-utils';

const str1 = "سلام دنیا";
const str2 = "Hello World";

console.log(isContainsPersianCharacter(str1));  // Output: true
console.log(isContainsPersianCharacter(str2));  // Output: false
console.log(isContainsPersianCharacter(undefined));  // Output: false
```

## Notes:

- The function uses a regular expression `/[\u0600-\u06FF]/` to search for Persian characters within the Unicode range for Persian script.
- It returns `true` if the string contains at least one Persian character and `false` otherwise.

***

# `isJson`

Checks if the provided string is a valid JSON string.

## Parameters:

- `str` (`string`): The string to check if it's a valid JSON.

## Returns

- `boolean`: `true` if the string is a valid JSON, otherwise `false`.

## Usage

```typescript
import { isJson } from 'react-tesna-utils';

const validJson = '{"name": "John", "age": 30}';
const invalidJson = '{name: John, age: 30}';

console.log(isJson(validJson));  // Output: true
console.log(isJson(invalidJson));  // Output: false
```

## Notes:

- This function attempts to parse the string using `JSON.parse()`. If it successfully parses the string, it returns `true`, indicating the string is
  valid JSON.
  Otherwise,
  it
  catches the error and returns `false`.

***

# `isNumber`

Checks if the provided value is a valid number.

## Parameters:

- `val` (`any`): The value to check if it is a number.

## Returns

- `boolean`: `true` if the value is a valid number, otherwise `false`.

## Usage

```typescript
import { isNumber } from 'react-tesna-utils';

console.log(isNumber(123));      // Output: true
console.log(isNumber('123'));    // Output: true
console.log(isNumber('abc'));    // Output: false
console.log(isNumber(NaN));      // Output: false
console.log(isNumber(null));     // Output: false
```

## Notes:

- This function uses `parseFloat` to check if the value can be converted into a number, and it also checks for numeric values by subtracting zero (
  `val - 0`).
- Non-numeric values like strings that cannot be parsed into numbers will return `false`.

***

# `isValidEmail`

Validates if the provided string is a valid email address.

## Parameters:

- `value` (`string`): The email address to validate.

## Returns

- `boolean`: `true` if the value is a valid email address, otherwise `false`.

## Usage

```typescript
import { isValidEmail } from 'react-tesna-utils';

console.log(isValidEmail('test@example.com'));    // Output: true
console.log(isValidEmail('invalid-email.com'));   // Output: false
console.log(isValidEmail('user@domain.co.uk'));   // Output: true
console.log(isValidEmail('example@domain'));      // Output: false
```

## Notes:

- The function uses a regular expression to validate the email format, ensuring the email contains a local part, an "@" symbol, and a valid domain
  part.
- It considers common cases of valid email formats, but some less common ones might be missed.

***

# `isValidNationalCode`

Validates if the provided number or string is a valid Iranian national code (ID).

## Parameters:

- `value` (`number | string`): The national code (ID) to validate.

## Returns

- `boolean`: `true` if the value is a valid Iranian national code, otherwise `false`.

## Usage

```typescript
import { isValidNationalCode } from 'react-tesna-utils';

console.log(isValidNationalCode('1234567890'));  // Output: false (example invalid code)
console.log(isValidNationalCode('1234567891'));  // Output: true  (example valid code)
console.log(isValidNationalCode(9876543210));   // Output: true  (example valid code)
```

## Notes:

- The function first converts any input to English digits using `toEnDigit` to ensure proper validation.
- The Iranian national code must be exactly 10 digits long.
- The last digit is a checksum calculated from the first 9 digits based on a mathematical formula.

***

# `removeEmptyKeys`

Removes empty keys and values from an object or array. Empty keys are those with `null`, `undefined`, or empty string values, and empty objects are
replaced by empty
objects.

## Parameters:

- `obj` (`AnyObject | AnyArray`): The object or array to process.

## Returns

- `AnyObject | AnyArray`: A new object or array with empty keys removed. Empty objects inside arrays are replaced by empty objects.

## Usage

```typescript
import { removeEmptyKeys } from 'react-tesna-utils';

// Example with an object
const obj = {
  name: 'John',
  age: null,
  address: {},
  country: 'USA'
};

const cleanedObj = removeEmptyKeys(obj);
console.log(cleanedObj);
// Output: { name: 'John', country: 'USA' }

// Example with an array
const arr = [{}, 'hello', { name: 'Alice' }, ''];

const cleanedArr = removeEmptyKeys(arr);
console.log(cleanedArr);
// Output: [{}, 'hello', { name: 'Alice' }]
```

## Notes:

- For objects, it removes properties where the value is an empty string, `null`, `undefined`, or an empty object.
- For arrays, it recursively cleans items and removes any empty objects.
- Nested objects and arrays are also processed recursively.

***

# `removeNullsFromArray`

Removes all `null` values from an object or array. This function recursively traverses the object or array and filters out `null` values, applying the
filtering to nested
structures as well.

## Parameters:

- `obj` (`any`): The object or array to process, which may contain `null` values.

## Returns

- `any`: A new object or array with all `null` values removed. If the input is an object, the properties with `null` values will be removed. If the
  input is an array,
  `null`
  values are removed from the array.

## Usage

```typescript
import { removeNullsFromArray } from 'react-tesna-utils';

// Example with an object
const obj = {
  name: 'John',
  age: null,
  address: { city: 'New York', zip: null },
  country: 'USA'
};

const cleanedObj = removeNullsFromArray(obj);
console.log(cleanedObj);
// Output: { name: 'John', address: { city: 'New York' }, country: 'USA' }

// Example with an array
const arr = [null, 'hello', null, [null, 'world'], { key: null, value: 'test' }];

const cleanedArr = removeNullsFromArray(arr);
console.log(cleanedArr);
// Output: ['hello', ['world'], { value: 'test' }]
```

## Notes:

- The function recursively cleans nested arrays and objects.`undefined`, or an empty object.
- All `null` values, regardless of their position (whether in objects, arrays, or nested structures), will be removed.
- Non-`null` values are retained in the returned structure.

***

# `truncatedMiddleText`

Truncates a string by removing the middle portion and replacing it with a separator (`...`). This function is useful for displaying shortened versions
of longer texts
where only the start and end portions are needed.

## Parameters:

- `text` (`string`): The input string to be truncated.
- `startLength` (`number`, optional): The number of characters to retain from the start of the string. Default is `5`.
- `endLength` (`number`, optional): The number of characters to retain from the end of the string. Default is `15`..
- `separator` (`string`, optional): The separator to use in the middle of the truncated string. Default is `...`.

## Returns

- `string`: A truncated string with the middle portion replaced by the separator if the length exceeds the combined `startLength` and `endLength`.

## Usage

```typescript
import { truncatedMiddleText } from 'react-tesna-utils';

// Example 1: Basic usage
const result1 = truncatedMiddleText({ text: 'This is a very long sentence that needs truncation.' });
console.log(result1);
// Output: 'This ...n.' (5 characters from the start and 15 characters from the end)

// Example 2: Custom start and end lengths
const result2 = truncatedMiddleText({
  text: 'The quick brown fox jumps over the lazy dog.',
  startLength: 3,
  endLength: 4
});
console.log(result2);
// Output: 'The ...dog.' (3 characters from the start and 4 characters from the end)

// Example 3: Custom separator
const result3 = truncatedMiddleText({
  text: 'A very long text example that needs truncation.',
  separator: '***'
});
console.log(result3);
// Output: 'A v***tion.' (Default start and end lengths with custom separator)
```

## Notes:

- If the `text` is shorter than the combined lengths of `startLength` and `endLength`, the function returns the original text.
- If the `text` is empty or undefined, it returns the text as is.

***

# `wait`

Creates a delay by returning a promise that resolves after a specified duration. This function is useful for adding pauses or delays in asynchronous
code.

## Parameters:

- `duration` (`number`): The amount of time (in milliseconds) to wait before resolving the promise.

## Returns

- `Promise<void>`: A promise that resolves after the specified duration.

## Usage

```typescript
import { wait } from 'react-tesna-utils';

// Example 1: Using wait for a delay in an async function
async function example() {
  console.log('Start');

  await wait(2000);  // Wait for 2 seconds

  console.log('End');
}

example();
// Output:
// Start
// (After 2 seconds)
// End
```

## Notes:

- The `duration` is in milliseconds, so `1000` represents a 1-second delay.
- The function returns a `Promise`, making it useful for chaining with `async/await` or `.then()` for handling asynchronous flows.

***

# `deepCompareAndRemove`

This function compares two objects or arrays deeply. It removes keys from the first object (`obj1`) if their values match in the second object (
`obj2`). If `obj2` is not
provided, the function returns the entire `obj1`. The function can handle nested objects and arrays.

## Parameters:

- `obj1`: The main object or array to process.
- `obj2` (optional): The reference object or array to compare against.

## Returns

- A new object or array with keys or elements removed from `obj1` based on the comparison with `obj2`.

## Features

- Recursively compares nested objects and arrays.
- Deletes keys or elements if they are deeply equal.
- Removes top-level empty objects or arrays from the result.

## Usage

```typescript
import { deepCompareAndRemove } from 'react-tesna-utils';

const obj1 = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    zip: 10001,
    additional: {
      info: "Apartment 12B",
      details: null,
    },
  },
  hobbies: ["reading", "sports", "coding"],
};

const obj2 = {
  name: "Alice",
  address: {
    city: "New York",
    additional: {
      info: "Apartment 12B",
    },
  },
  hobbies: ["reading", "sports"],
};

const result = deepCompareAndRemove(obj1, obj2);

console.log(result);
/*
{
  age: 30,
  address: {
    zip: 10001,
    additional: {
      details: null,
    },
  },
  hobbies: ["coding"],
}
*/
```

## How It Works:

1. Compares obj1 and obj2 key by key.
2. If the value of a key in `obj1` matches the corresponding value in `obj2`, the key is removed.
3. For nested objects or arrays, it calls itself recursively.
4. Cleans up empty objects or arrays after processing.

## Note:

This utility is helpful for scenarios where you need to filter out unchanged or duplicate data in hierarchical structures, such as processing
configuration files or
response data.

***

# `useCopy`

The `useCopy` custom hook simplifies copying text to the clipboard in a React application. It handles the logic for copying, loading states, and
resetting the state after
a
delay.

## Features

- Loading State: Indicates when the copy action is in progress.
- Copied State: Tracks if the text was successfully copied.
- Timeout Handling: Automatically resets the copied state after 2 seconds.
- Clipboard API Integration: Uses the browser's Clipboard API for copying text.

## Hook API

- `isCopied`: A `boolean` indicating whether the text has been successfully copied.
- `isCopyLoading`: A `boolean` indicating if the copying process is in progress.
- `copyText`: A function that takes a string (`text`) and attempts to copy it to the clipboard.

## Usage

```tsx
import { useCopy } from 'react-tesna-utils';

const CopyExample = () => {
  const { isCopied, isCopyLoading, copyText } = useCopy();

  return (
    <div>
      <button
        onClick={() => copyText('Hello, World!')}
        disabled={isCopyLoading}
      >
        {isCopyLoading ? 'Copying...' : isCopied ? 'Copied!' : 'Copy Text'}
      </button>
    </div>
  );
};

export default CopyExample;
```

#### Additional Notes:

- Clipboard Support: The hook uses the `navigator.clipboard` API, which is supported in most modern browsers. If the Clipboard API is not supported,
  it logs an error to
  the
  console and returns `false`.
- Automatic Cleanup: The hook ensures the timeout is cleared when the component is unmounted to prevent memory leaks.

This utility is perfect for creating user-friendly interactions, such as "Copy to Clipboard" buttons.

***

# `useLockBodyScroll`

React side-effect hook that locks scrolling on the body element. Useful for modal and other overlay components.

Accepts ref object pointing to any HTML element as second parameter. Parent body element will be found and it's scroll will be locked/unlocked. It is
needed to proper
iFrame handling.  
By default it uses body element of script's parent window.

> Note: To improve performance you can pass body's or iframe's ref object, thus no parent lookup will be performed

## Usage

```jsx
import { useLockBodyScroll } from 'react-tesna-utils';
import { useState } from 'react';

const Demo = () => {
  const [ locked, setLocked ] = useState(false)
  
  useLockBodyScroll(locked);
  
  return (
    <div>
      <button onClick={ () => setLocked(current => !current) }>
        { locked ? 'Unlock' : 'Lock' }
      </button>
    </div>
  );
};
```

## Reference

```typescript
useLockBodyScroll(locked /* true or false*/, elementRef /*RefObject<HTMLElement>*/);
```

- `locked` &mdash; Hook will lock scrolling on the body element if `true`, defaults to `true`
- `elementRef` &mdash; The element ref object to find the body element. Can be either a ref to body or iframe element.

***

# `useKeyPress`

The `useKeyPress()` hook listens for a specific combination of keys and runs a callback when they are all pressed. It normalizes keys for
case-insensitive matching and handles cases like key holding or focus loss to ensure smooth behavior.

## Usage

```jsx
import { useKeyPress } from 'react-tesna-utils';
import { useState } from 'react';

const Demo = () => {
  const [ didKeyPress, setDidKeyPress ] = useState(false);
  useKeyPress([ 'Control', 'Shift', 'A' ], (e) => {
    setDidKeyPress(true);
  });
  
  return (
    <div>
      <p>Press Control + Shift + A</p>
      { didKeyPress && <p>{ `You pressed : Control + Shift + A` }</p> }
    </div>
  );
};
```

- `keys` - An array of key names (case-insensitive) that should be pressed to trigger the callback
- `callback` - The function to be executed when specified keys are pressed.

## Returns

- `void` - This hook does not return anything.

***

# `getMobileOperator`

This is a TypeScript function that takes an Iranian mobile number as input and identifies the corresponding mobile operator by examining
the number's prefix. If the prefix matches one of the predefined mappings, the function returns the operator's name (e.g., Hamrah Aval, Irancell,
Shatel or Rightel). Otherwise, it returns an error message such as "Invalid mobile number" or "Unknown operator".

## Features

- Input Cleanup:
  The function removes any non-numeric characters (like spaces or hyphens) from the input number.

- Format Conversion:
  If the number is provided in international format (e.g., starting with 98 and having 12 digits), it converts the number into the local format (
  beginning with 0).

- Validation:
  The mobile number must consist of exactly 11 digits and start with 09. If not, the function returns an error message indicating the number is
  invalid.

- Operator Detection:
  The function extracts the first four digits of the cleaned number and uses a predefined mapping to determine the corresponding mobile operator.

## Operator Mapping

The following mappings are defined in the example:

- Hamrah Aval:
  Mobile numbers starting with any of the prefixes from 0910 to 0919.

- Rightel:
  Mobile numbers starting with any of the prefixes from 0920 to 0929.

- Irancell:
  Mobile numbers starting with one of the following prefixes: 0930, 0933, 0935, 0936, 0937, 0938, or 0939.

## Usage

```jsx
import { getMobileOperator } from 'react-tesna-utils';

console.log(getMobileOperator("09121234567")); // Hamrah Aval
console.log(getMobileOperator("+989351234567")); // Irancell
console.log(getMobileOperator("09211234567")); // Rightel
console.log(getMobileOperator("09001234567")); // Unknown operator or Invalid mobile number
// ;
```

***

# `convertColor`

The `convertColor` function adjusts the brightness of a hex color string by a given percentage. It takes a hex color (e.g., `#aabbcc`) and increases or
decreases its brightness based on the provided percentage. A positive percentage brightens the color, while a negative percentage darkens it. The function
ensures that the resulting RGB values do not exceed 255.

## Parameters

- ### color: `string`
  A string representing the color in hex format (e.g., `#ff0000` for red). The function assumes the color string starts with a hash (`#`) followed by six
  hexadecimal characters.
- ### percent: `number`
  A number indicating the percentage by which to adjust the brightness. A positive value increases brightness, while a negative value decreases it.

## Return Value

- ### Returns: `string`
  A new hex color string in the format `#RRGGBB` representing the adjusted color.

## How It Works

1. #### Hex to Decimal Conversion:
   The function extracts the red, green, and blue components from the input hex string and converts them into decimal numbers.

2. #### Brightness Adjustment:
   Each color component is scaled by (100 + percent) / 100 and then rounded to the nearest integer. The value is capped at 255 using Math.min to avoid exceeding
   the maximum RGB value.

3. #### Decimal to Hex Conversion:
   The adjusted decimal values are converted back into two-character hexadecimal strings using a helper function. The padStart method is used to ensure each
   component is represented by exactly two digits.

4. #### Return New Color:
   The function then concatenates the new hex values with a leading # and returns the resulting hex color string.

## Usage

```jsx
import { convertColor } from 'react-tesna-utils';

// Example: Increase brightness by 20%
const originalColor = "#6699cc";
const adjustedColor = convertColor(originalColor, 20);
console.log(adjustedColor); // Output might be: "#7ab0e0"

// Example: Decrease brightness by 10%
const darkerColor = convertColor(originalColor, -10);
console.log(darkerColor); // Output might be: "#5c8ab8"
```

***

# `composeRef`

`composeRef` is a function that merges multiple refs into a single ref callback. This is useful when you need to assign the same DOM element or component
instance to more than one ref (e.g., an external ref and a local ref within a component).

* It filters out any falsy refs from the input.
* If only one valid ref remains, it returns that ref.
* Otherwise, it returns a new ref callback that, when invoked, assigns the provided node to all the refs using the fillRef function.

## Example Usage

The following example demonstrates how to use composeRef in a functional component with forwardRef:

```tsx
import React, { useRef, forwardRef } from 'react';
import { composeRef } from 'react-tesna-utils';

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

// A custom input component that supports both internal and external refs.
const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
  // Internal ref for internal operations.
  const localRef = useRef<HTMLInputElement>(null);

  // Combine the external ref and the internal ref.
  const combinedRef = composeRef(ref, localRef);

  return <input ref={combinedRef} {...props} />;
});

const ParentComponent = () => {
  // External ref that will be passed to MyInput.
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;

```

### Explanation

* #### MyInput Component:
    * Use forwardRef to allow passing an external ref.
    * Define a local ref (localRef) for internal operations.
    * Combines both refs using composeRef so that when the input mounts, both refs are updated with the DOM node
* #### ParentComponent:
    * Creates an external ref (inputRef) and passes it to MyInput.
    * Use a button to trigger focus on the input by accessing the DOM node via inputRef.

***

# `enterFullScreen` And `exitFullScreen`

### `enterFullScreen`

**Purpose:**  
This function is designed to switch a specified HTML element into full-screen mode. It checks for various browser-specific implementations of the full-screen
API to ensure cross-browser compatibility.

**How It Works:**

* **Standard Method:**  
  If the element supports the standard `requestFullscreen` method, it calls it.
* **Firefox Support:**  
  If the element does not support the standard method, it checks for Firefox’s alternative `mozRequestFullScreen` method.
* **Chrome, Safari & Opera Support:**  
  For browsers like Chrome, Safari, and Opera, it checks for `webkitRequestFullscreen`.
* **IE/Edge Support:**  
  Lastly, it checks for the `msRequestFullscreen` method used by IE/Edge.

**Example Usage:**

```typescript
import { enterFullScreen } from 'react-tesna-utils';
// Assume you have an HTML element you want to display in full-screen mode.
const videoElement = document.getElementById('myVideo') as HTMLElement;
enterFullScreen(videoElement);
```

In this example, when `enterFullScreen(videoElement)` is called, the function will attempt to make the `videoElement` display in full-screen mode using the
appropriate method based on the browser being used.

### `exitFullScreen`

**Purpose:**  
This function is used to exit full-screen mode. It similarly handles cross-browser compatibility by checking which method is available on the document object.

**How It Works:**

* **Standard Method:**  
  If the document supports the standard `exitFullscreen` method, it is called to exit full-screen mode.
* **Firefox Support:**  
  If not available, it checks for Firefox’s alternative `mozCancelFullScreen`.
* **Chrome, Safari & Opera Support:**  
  It then checks for `webkitExitFullscreen` for browsers like Chrome, Safari, and Opera.
* **IE/Edge Support:**  
  Finally, it checks for `msExitFullscreen` for IE/Edge.

**Example Usage:**

```typescript
import { exitFullScreen } from 'react-tesna-utils';
// When you want to exit full-screen mode, simply call the function.
exitFullScreen();
```

***

### `trimStringsStructure`

The `trimStringsStructure` function is a generic TypeScript utility that traverses a nested data structure (either an array or an object) and trims whitespace
from any string values. It handles deeply nested structures by recursively processing objects and arrays.

### How It Works

1. **Array Handling**:

* **Check if the input is an array** using `Array.isArray(input)`.
* **Mapping Over Array Elements**:
    * If an element is a string, it uses the built-in `trim()` method to remove leading and trailing whitespace.
    * If an element is an object (and not null), it calls itself recursively to process that object.
    * Otherwise, the element is returned unchanged.

2. **Object Handling**:

* **Check if the input is a non-null object**.
* **Iterate through Object Properties**:
    * For each property, if the value is a string, it trims the string.
    * If the value is an object (and not null), it processes the object recursively.
    * Other data types are copied directly without modification.

3. **Base Case**:

* If the input is neither an array nor a non-null object, the function simply returns the input unchanged.

### Example Usage

```typescript
import { trimStringsStructure } from 'react-tesna-utils';

// Example input object with nested arrays and objects
const data = {
  name: '  John Doe  ',
  details: {
    email: '  john@example.com  ',
    hobbies: ['  Reading  ', '  Coding  ', '  Hiking  '],
    address: {
      street: '  123 Main St  ',
      city: '  Anytown  ',
    },
  },
  notes: [
    '  Note 1  ',
    { info: '  Additional Info  ' }
  ]
};

// Process the data to trim all string values
const trimmedData = trimStringsStructure(data);

console.log(trimmedData);

/* The output will be:
{
  name: 'John Doe',
  details: {
    email: 'john@example.com',
    hobbies: ['Reading', 'Coding', 'Hiking'],
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  },
  notes: [
    'Note 1',
    { info: 'Additional Info' }
  ]
}
*/

```

### Summary

* **Purpose**: The function cleans up a data structure by removing extra spaces from all string values.
* **Recursion**: It processes nested objects and arrays recursively.
* **Type Safety**: By using generics, it ensures that the output retains the same type as the input.

***

### useWindowSize

The `useWindowSize` hook is a custom React hook designed to track and provide the current dimensions of the browser window. When you use this hook, it returns
an object containing the window's width and height.

**How It Works:**

* **Initial State:**  
  The hook initializes the state with the current `window.innerWidth` and `window.innerHeight`.

* **Effect Hook:**  
  Inside a `useEffect` hook, an event listener is added to the `resize` event of the window. This listener calls a function (`handleResize`) every time the
  window is resized.

* **State Update:**  
  The `handleResize` function updates the state with the new window dimensions by calling `setWindowSize`.

* **Cleanup:**  
  The effect returns a cleanup function that removes the `resize` event listener when the component using this hook is unmounted, preventing memory leaks.

### Example Usage

Below is an example of a functional component that uses the `useWindowSize` hook to display the current window dimensions.

```tsx
'use client';

import { useWindowSize } from 'react-tesna-utils';

const WindowSizeDisplay = () => {
  const { width, height } = useWindowSize();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Window Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default WindowSizeDisplay;
```
