import { types } from 'mobx-state-tree';

import { Workout } from '../workout';

export const WorkoutDoneModel = {
  workout: Workout,
  date: types.Date,
};
