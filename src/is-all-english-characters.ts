export const isAllEnglishCharacters = (input: string): boolean => {
  const englishRegex = /^[a-zA-Z\s\d\p{P}]+$/u; // Allow English characters, spaces, digits, and punctuation
  return englishRegex.test(input);
};