import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { Training } from '../training';

import { FreeWorkoutModel } from './model';
import { FreeWorkoutActions } from './actions';
import { FreeWorkoutViews } from './views';

/**
 * Workout with no precise exercise planning
 * You can reorganize exercise sets as you like
 */
export const FreeWorkout = types
  .compose(
    Training,
    types.model(FreeWorkoutModel)
  )
  .actions(FreeWorkoutActions)
  .views(FreeWorkoutViews);

export interface FreeWorkoutType extends Instance<typeof FreeWorkout> {}
export interface FreeWorkoutModelType extends Instance<typeof FreeWorkoutModel> {}
export interface FreeWorkoutSnapshotIn extends SnapshotIn<typeof FreeWorkout> {}
export interface FreeWorkoutSnapshotOut extends SnapshotOut<typeof FreeWorkout> {}
