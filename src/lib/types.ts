export type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
