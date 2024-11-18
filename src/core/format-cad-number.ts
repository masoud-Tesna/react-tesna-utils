export const formatCadNumber = (cardNumber: string) => cardNumber?.replace(/\d{4}(?=.)/g, '$& - ');
