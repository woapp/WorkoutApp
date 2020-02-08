import { types, Instance } from 'mobx-state-tree';

import { WorkoutModel } from './model';
import { workoutActions } from './actions';
import { workoutViews } from './views';

export const Workout = types
  .model(WorkoutModel)
  .actions(workoutActions)
  .views(workoutViews);

export interface WorkoutType extends Instance<typeof Workout> {}
