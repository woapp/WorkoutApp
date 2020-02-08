import { rootStore } from './rootStore';

export type RootStoreType = typeof rootStore;
export type SelectorFunction<T> = (store: RootStoreType) => T;

export enum MuscleGroup {
  Biceps = 'BICEPS',
  Triceps = 'TRICEPS',
  Chest = 'CHEST',
  Back = 'BACK',
  Calves = 'CALVES',
  Forearms = 'FOREARMS',
  Shoulders = 'SHOULDERS',
  Abs = 'ABS',
  Legs = 'LEGS',
}
