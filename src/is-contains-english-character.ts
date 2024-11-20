export const isContainsEnglishCharacter = (input: string): boolean => {
  const englishRegex = /[a-zA-Z]/; // Range for English characters
  return englishRegex.test(input);
};
