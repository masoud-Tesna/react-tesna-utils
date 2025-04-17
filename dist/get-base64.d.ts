interface TFile extends File {
    uid: string;
}
export declare const getBase64: <T = TFile>(file: T) => Promise<string>;
export {};
