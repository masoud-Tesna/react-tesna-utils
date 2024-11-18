export const getBase64 = <T = Blob>(img: T, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img as Blob);
};
