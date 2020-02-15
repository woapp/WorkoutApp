import { types, Instance } from 'mobx-state-tree';

import { WorkoutDoneModel } from './model';
import { workoutDoneActions } from './actions';

export const WorkoutDone = types.model(WorkoutDoneModel).actions(workoutDoneActions);

export interface WorkoutDoneType extends Instance<typeof WorkoutDone> {}
