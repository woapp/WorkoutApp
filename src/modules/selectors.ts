import { RootStoreType } from './types';

export const exercisesSelector = (store: RootStoreType) => store.exercises;
export const workoutsSelector = (store: RootStoreType) => store.workouts;
export const historySelector = (store: RootStoreType) => store.history;
export const storeSelector = (store: RootStoreType) => store;
