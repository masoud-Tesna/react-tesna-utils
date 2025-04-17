import { Ref } from 'react';
/**
 * Merge refs into one ref function to support ref passing.
 */
export declare const composeRef: <T>(...refs: Ref<T>[]) => Ref<T>;
