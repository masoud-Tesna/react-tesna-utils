"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeRef = void 0;
const fillRef = (ref, node) => {
    if (typeof ref === 'function') {
        ref(node);
    }
    else if (typeof ref === 'object' && ref && 'current' in ref) {
        ref.current = node;
    }
};
/**
 * Merge refs into one ref function to support ref passing.
 */
const composeRef = (...refs) => {
    const refList = refs.filter(Boolean);
    if (refList.length <= 1) {
        return refList[0];
    }
    return (node) => {
        refs.forEach(ref => {
            fillRef(ref, node);
        });
    };
};
exports.composeRef = composeRef;
