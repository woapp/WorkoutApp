import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { ExerciseModel } from './model';
import { exerciseActions } from './actions';
import { exerciseViews } from './views';

export const Exercise = types
  .model(ExerciseModel)
  .actions(exerciseActions)
  .views(exerciseViews);

export interface ExerciseType extends Instance<typeof Exercise> {}
export interface ExerciseModelType extends Instance<typeof ExerciseModel> {}
export interface ExerciseSnapshotIn extends SnapshotIn<typeof Exercise> {}
export interface ExerciseSnapshotOut extends SnapshotOut<typeof Exercise> {}
