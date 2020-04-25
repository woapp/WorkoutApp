import { Instance } from 'mobx-state-tree';

import { RootStore } from './rootStore';

export interface RootStoreType extends Instance<typeof RootStore> {}

export type SelectorFunction<T> = (store: RootStoreType) => T;

export enum MuscleGroup {
  Trapezius = 'TRAPEZIUS',
  Shoulders = 'SHOULDERS',
  Biceps = 'BICEPS',
  Triceps = 'TRICEPS',
  Forearms = 'FOREARMS',
  Chest = 'CHEST',
  Back = 'BACK',
  Lombar = 'LOMBAR',
  Abs = 'ABS',
  Obliques = 'OBLIQUES',
  Buttock = 'BUTTOCK',
  Adductors = 'ADDUCTORS',
  Quadriceps = 'QUADRICEPS',
  Ischios = 'ISCHIOS',
  Calves = 'CALVES',
}
