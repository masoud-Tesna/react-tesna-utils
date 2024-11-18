export const isAllPersianCharacters = (input: string): boolean => {
  const persianRegex = /^[\u0600-\u06FF\s\d\p{P}]+$/u; // Allow Persian characters, spaces, digits, and punctuation
  return persianRegex.test(input);
};