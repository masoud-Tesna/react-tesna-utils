import { TTruncatedMiddleText } from '../types';

export const truncatedMiddleText = ({
  text,
  startLength = 5,
  endLength = 15,
  separator = '...'
}: TTruncatedMiddleText) => {
  const stringText = text?.toString()?.trim();
  
  if (!stringText || stringText?.length <= startLength + endLength) {
    return stringText;
  }
  
  const startWords = stringText.slice(0, startLength);
  const endWords = stringText.slice(-endLength);
  
  return startWords + separator + endWords;
};