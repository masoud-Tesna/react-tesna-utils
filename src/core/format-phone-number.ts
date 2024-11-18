export const formatPhoneNumber = (phoneNumber: string) => {
  //Filter only numbers from the input
  let cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned?.length < 11) {
    cleaned = cleaned?.replace(/^/, '0');
  } else if (cleaned?.length > 11) {
    if (cleaned?.startsWith('98')) {
      cleaned = cleaned?.replace('98', '0');
    }
  }

  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  return null;
};
