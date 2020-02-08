import { types, Instance } from 'mobx-state-tree';
import { WorkoutDoneModel } from './model';

export const WorkoutDone = types.model(WorkoutDoneModel);

export interface WorkoutDoneType extends Instance<typeof WorkoutDone> {}
