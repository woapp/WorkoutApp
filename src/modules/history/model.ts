import { types } from 'mobx-state-tree';

import { Workout } from '../workouts';

export const WorkoutDoneModel = {
  workout: types.reference(Workout),
  date: types.Date,
};
