/*
  Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
  Remove the Unicode base(2) range that not match
*/
export const toEnDigit = (n: string) => n?.replace(
  /[\u0660-\u0669\u06f0-\u06f9]/g,
  (a: string): number | any => a?.charCodeAt(0) & 0xf
);
