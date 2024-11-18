export const getChunksFromString = (str: string, chunkSize: number) => {
  const regexChunk = new RegExp(`.{1,${chunkSize}}`, 'g');   // '.' represents any character
  return str.match(regexChunk);
};
