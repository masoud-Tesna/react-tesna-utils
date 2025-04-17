"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = exports.useCopy = void 0;
const react_1 = require("react");
const useCopy = () => {
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
    const [isCopyLoading, setIsCopyLoading] = (0, react_1.useState)(false);
    const timeoutRef = (0, react_1.useRef)(null);
    const clearCopyTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };
    (0, react_1.useEffect)(() => () => clearCopyTimeout(), []);
    const copyText = async (text) => {
        setIsCopyLoading(true);
        try {
            const success = await copyToClipboard(text);
            if (success) {
                setIsCopied(true);
                clearCopyTimeout();
                timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
            }
        }
        catch (error) {
            console.error('Error copying text:', error);
        }
        finally {
            setIsCopyLoading(false);
        }
    };
    return {
        isCopied,
        isCopyLoading,
        copyText,
    };
};
exports.useCopy = useCopy;
/**
 * Copies the provided text to the clipboard.
 * @param text - The text to copy to the clipboard.
 * @returns A promise that resolves to `true` if successful, or `false` if an error occurs.
 */
async function copyToClipboard(text) {
    try {
        if (!navigator.clipboard) {
            console.error('Clipboard API is not supported in this browser.');
            return false;
        }
        await navigator.clipboard.writeText(text);
        return true;
    }
    catch (error) {
        console.error('Failed to copy text to clipboard:', error);
        return false;
    }
}
exports.copyToClipboard = copyToClipboard;
