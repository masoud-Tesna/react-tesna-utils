import {Ref} from 'react';

const fillRef = <T, >(ref: Ref<T>, node: T) => {
  if (typeof ref === 'function') {
    ref(node);
  }
  else if (typeof ref === 'object' && ref && 'current' in ref) {
    (ref as any).current = node;
  }
};

/**
 * Merge refs into one ref function to support ref passing.
 */
export const composeRef = <T, >(...refs: Ref<T>[]): Ref<T> => {
  const refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return (node: T) => {
    refs.forEach(ref => {
      fillRef(ref, node);
    });
  };
};