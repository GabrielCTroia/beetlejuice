export declare class Exception extends Error {
    constructor(msg?: string);
}
export declare class NoChangesException extends Exception {
    constructor(msg?: string);
}
export declare class UncommitedChanges extends Exception {
    constructor(msg?: string);
}
