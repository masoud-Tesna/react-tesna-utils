"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyPress = void 0;
const react_1 = require("react");
const normalizeKey = (key) => {
    return key.toLowerCase();
};
function useKeyPress(keys, callback) {
    const lastKeyPressed = (0, react_1.useRef)(new Set([]));
    const keysSet = (0, react_1.useMemo)(() => {
        return new Set(keys.map((key) => normalizeKey(key)));
    }, [keys]);
    const handleKeyDown = (e) => {
        var _a;
        if (e.repeat)
            return; // To prevent this function from triggering on key hold e.g. Ctrl hold
        (_a = lastKeyPressed.current) === null || _a === void 0 ? void 0 : _a.add(normalizeKey(e.key));
        // To bypass TypeScript check for the new ECMAScript method `isSubset`
        if (keysSet.isSubsetOf(lastKeyPressed.current)) {
            e.preventDefault();
            callback(e);
        }
    };
    const handleKeyUp = (e) => {
        var _a;
        (_a = lastKeyPressed.current) === null || _a === void 0 ? void 0 : _a.delete(normalizeKey(e.key));
    };
    const handleBlur = () => {
        var _a;
        (_a = lastKeyPressed.current) === null || _a === void 0 ? void 0 : _a.clear();
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('blur', handleBlur);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('blur', handleBlur);
        };
    }, [keysSet, callback]);
}
exports.useKeyPress = useKeyPress;
