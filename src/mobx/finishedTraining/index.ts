import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { FreeWorkoutModel } from '../freeWorkout/model';
import { BaseTrainingModel } from '../baseTraining/model';

import { FinishedTrainingModel } from './model';

export const FinishedFreeWorkout = types.compose(
  types.model(BaseTrainingModel),
  types.model(FreeWorkoutModel),
  types.model(FinishedTrainingModel)
);

export const FinishedTraining = types.union(FinishedFreeWorkout);

export interface FinishedFreeWorkoutType extends Instance<typeof FinishedFreeWorkout> {}
export interface FinishedFreeWorkoutSnapshotIn extends SnapshotIn<typeof FinishedFreeWorkout> {}
export interface FinishedFreeWorkoutSnapshotOut extends SnapshotOut<typeof FinishedFreeWorkout> {}

export type FinishedTrainingType = FinishedFreeWorkoutType;
export type FinishedTrainingSnapshotIn = FinishedFreeWorkoutSnapshotIn;
export type FinishedTrainingSnapshotOut = FinishedFreeWorkoutSnapshotOut;
