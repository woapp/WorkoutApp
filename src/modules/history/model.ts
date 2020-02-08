import { types, Instance } from 'mobx-state-tree';

import { WorkoutModel } from '../workouts/model';

export const WorkoutDoneModel = types.model({
  workout: types.reference(WorkoutModel),
  date: types.Date,
});

export interface Exercise extends Instance<typeof WorkoutDoneModel> {}
