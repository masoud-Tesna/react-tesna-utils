import { TTrimStringsStructureInput } from '../types';

export function trimStringsStructure<T extends TTrimStringsStructureInput>(input: T): T {
  if (Array.isArray(input)) {
    return input?.map(item => {
      if (typeof item === 'string') {
        return item?.trim();
      }
      else if (typeof item === 'object' && item !== null) {
        return trimStringsStructure(item);
      }
      return item;
    }) as T;
  }
  else if (typeof input === 'object' && input !== null) {
    const trimmedObject: TTrimStringsStructureInput = {};
    
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        const value = input[ key ];
        
        if (typeof value === 'string') {
          trimmedObject[ key ] = value?.trim();
        }
        else if (typeof value === 'object' && value !== null) {
          trimmedObject[ key ] = trimStringsStructure(value);
        }
        else {
          trimmedObject[ key ] = value;
        }
      }
    }
    return trimmedObject as T;
  }
  return input;
}
