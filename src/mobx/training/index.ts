import { types } from 'mobx-state-tree';

import {
  FreeWorkout,
  FreeWorkoutType,
  FreeWorkoutSnapshotIn,
  FreeWorkoutSnapshotOut,
} from '../freeWorkout';

export const Training = types.union(FreeWorkout);

export type TrainingType = FreeWorkoutType;
export type TrainingSnapshotIn = FreeWorkoutSnapshotIn;
export type TrainingSnapshotOut = FreeWorkoutSnapshotOut;
