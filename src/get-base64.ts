interface TFile extends File {
  uid: string;
}

export const getBase64 = <T = TFile>(file: T): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file as TFile);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });