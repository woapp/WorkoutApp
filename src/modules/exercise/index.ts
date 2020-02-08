import { types, Instance } from 'mobx-state-tree';

import { ExerciseModel } from './model';
import { exerciseActions } from './actions';
import { exerciseViews } from './views';

export const Exercise = types
  .model(ExerciseModel)
  .actions(exerciseActions)
  .views(exerciseViews);

export interface ExerciseType extends Instance<typeof Exercise> {}
