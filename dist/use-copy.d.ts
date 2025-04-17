export declare const useCopy: () => {
    isCopied: boolean;
    isCopyLoading: boolean;
    copyText: (text: string) => Promise<void>;
};
/**
 * Copies the provided text to the clipboard.
 * @param text - The text to copy to the clipboard.
 * @returns A promise that resolves to `true` if successful, or `false` if an error occurs.
 */
export declare function copyToClipboard(text: string): Promise<boolean>;
