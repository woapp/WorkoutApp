import { types, Instance, SnapshotOut, SnapshotIn } from 'mobx-state-tree';

import { ExerciseSetModel } from './model';
import { exerciseSetActions } from './actions';
import { exerciseSetViews } from './views';

export const ExerciseSet = types
  .model(ExerciseSetModel)
  .actions(exerciseSetActions)
  .views(exerciseSetViews);

export interface ExerciseSetType extends Instance<typeof ExerciseSet> {}
export interface ExerciseSetSnapshotIn extends SnapshotIn<typeof ExerciseSet> {}
export interface ExerciseSetSnapshotOut extends SnapshotOut<typeof ExerciseSet> {}
