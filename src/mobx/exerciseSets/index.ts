import { types, Instance } from 'mobx-state-tree';

import { ExerciseSetsModel } from './model';
import { exerciseSetsActions } from './actions';
import { exerciseSetsViews } from './views';

export const ExerciseSets = types
  .model(ExerciseSetsModel)
  .actions(exerciseSetsActions)
  .views(exerciseSetsViews);

export interface ExerciseSetsType extends Instance<typeof ExerciseSets> {}
