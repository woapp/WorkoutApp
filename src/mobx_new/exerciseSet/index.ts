import { types, Instance, SnapshotOut, SnapshotIn } from 'mobx-state-tree';

import { ExerciseSetModel } from './model';
import { exerciseSetActions } from './actions';
import { exerciseSetsViews } from './views';

export const ExerciseSets = types
  .model(ExerciseSetModel)
  .actions(exerciseSetActions)
  .views(exerciseSetsViews);

export interface ExerciseSetType extends Instance<typeof ExerciseSets> {}
export interface ExerciseSetSnapshotIn extends SnapshotIn<typeof ExerciseSets> {}
export interface ExerciseSetSnapshotOut extends SnapshotOut<typeof ExerciseSets> {}
