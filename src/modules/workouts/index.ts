import { types, Instance } from 'mobx-state-tree';

import { WorkoutModel } from './model';

export const Workout = types.model(WorkoutModel);

export interface WorkoutType extends Instance<typeof Workout> {}
