import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { Training } from '../training';

import { FreeWorkoutModel } from './model';
import { freeWorkoutActions } from './actions';

/**
 * Workout with no precise exercise planning
 * You can reorganize exercise sets as you like
 */
export const FreeWorkout = types
  .compose(
    Training,
    types.model(FreeWorkoutModel)
  )
  .actions(freeWorkoutActions);

export interface FreeWorkoutType extends Instance<typeof FreeWorkout> {}
export interface FreeWorkoutSnapshotIn extends SnapshotIn<typeof FreeWorkout> {}
export interface FreeWorkoutSnapshotOut extends SnapshotOut<typeof FreeWorkout> {}
