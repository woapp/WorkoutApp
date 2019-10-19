import { rootStore } from './rootStore';

export type RootStoreType = typeof rootStore;
export type SelectorFunction<T> = (store: RootStoreType) => T;
