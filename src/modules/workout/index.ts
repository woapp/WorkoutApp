import { types, Instance } from 'mobx-state-tree';

import { WorkoutModel } from './model';
import { workoutActions } from './actions';

export const Workout = types.model(WorkoutModel).actions(workoutActions);

export interface WorkoutType extends Instance<typeof Workout> {}
