type TTruncatedMiddleText = {
    text: string | number;
    startLength?: number;
    endLength?: number;
    separator?: string;
};
export declare const truncatedMiddleText: ({ text, startLength, endLength, separator, }: TTruncatedMiddleText) => string;
export {};
