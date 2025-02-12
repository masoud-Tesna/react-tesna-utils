// mci: for MCI (Hamrahe Aval),
// mtn: for MTN (irancell),
// rightel: for Rightel,
// shatel: for Shatel

const mobileOperators: { [key: string]: string } = {
  '0990': 'mci',
  '0991': 'mci',
  '0992': 'mci',
  '0993': 'mci',
  '0994': 'mci',
  '0910': 'mci',
  '0911': 'mci',
  '0912': 'mci',
  '0913': 'mci',
  '0914': 'mci',
  '0915': 'mci',
  '0916': 'mci',
  '0917': 'mci',
  '0918': 'mci',
  '0919': 'mci',
  '0900': 'mtn',
  '0930': 'mtn',
  '0933': 'mtn',
  '0935': 'mtn',
  '0936': 'mtn',
  '0937': 'mtn',
  '0938': 'mtn',
  '0939': 'mtn',
  '0901': 'mtn',
  '0902': 'mtn',
  '0903': 'mtn',
  '0904': 'mtn',
  '0905': 'mtn',
  '0941': 'mtn',
  '0920': 'rightel',
  '0921': 'rightel',
  '0922': 'rightel',
  '0923': 'rightel',
  '0924': 'rightel',
  '0925': 'rightel',
  '0926': 'rightel',
  '0927': 'rightel',
  '0928': 'rightel',
  '0929': 'rightel',
  '0998': 'shatel',
  '0999': 'shatel'
};

export const getMobileOperator = (mobile: string): string => {
  // Removing non -numeric characters (such as distance, dash, etc.)
  let cleaned = mobile.replace(/\D/g, '');

  // Mobile Number Review: Must be 11 digits and start with "09"
  if (!cleaned.startsWith("09")) {
    return '';
  }

  // Extraction of pre -number (first 4 digits)
  const prefix = cleaned.substring(0, 4);

  if (mobileOperators.hasOwnProperty(prefix)) {
    return mobileOperators[prefix];
  }

  return '';
};
