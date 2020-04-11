import { Instance } from 'mobx-state-tree';

import { RootStore } from './rootStore';

export interface RootStoreType extends Instance<typeof RootStore> {}

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
