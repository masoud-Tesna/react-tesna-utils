"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCompareAndRemove = void 0;
function deepCompareAndRemove(obj1, obj2) {
    // If obj2 is undefined, return the entire obj1
    if (!obj2)
        return obj1;
    // We make a copy of obj1 to apply the changes to it
    const result = Array.isArray(obj1) ? [...obj1] : Object.assign({}, obj1);
    for (const key in result) {
        if (key in obj2) {
            if (typeof result[key] === 'object' &&
                typeof obj2[key] === 'object' &&
                result[key] !== null &&
                obj2[key] !== null) {
                // If both keys are objects or arrays, we call the function again
                const nestedResult = deepCompareAndRemove(result[key], obj2[key]);
                if (Array.isArray(nestedResult) && nestedResult.length === 0) {
                    delete result[key]; // If the result is empty, we delete the key
                }
                else if (Object.keys(nestedResult).length === 0) {
                    delete result[key]; // If the result is an empty object, we delete the key
                }
                else {
                    result[key] = nestedResult;
                }
            }
            else if (result[key] === obj2[key]) {
                // If the value of two keys are equal, we delete the key
                delete result[key];
            }
        }
    }
    // Remove empty top-level objects or arrays
    if (Array.isArray(result)) {
        return result.filter((item) => !(typeof item === 'object' && Object.keys(item).length === 0));
    }
    return result;
}
exports.deepCompareAndRemove = deepCompareAndRemove;
