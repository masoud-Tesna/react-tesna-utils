export const isContainsPersianCharacter = (input?: string): boolean => {
  if (!input) return false;
  const persianRegex = /[\u0600-\u06FF]/; // Range for Persian characters in Unicode
  return persianRegex.test(input);
};
