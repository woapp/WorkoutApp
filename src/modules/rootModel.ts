import { types } from 'mobx-state-tree';

import { Workout } from './workout';
import { Exercise } from './exercise';
import { WorkoutDone } from './workoutDone';

export const RootModel = {
  workouts: types.array(Workout),
  exercises: types.array(Exercise),
  history: types.array(WorkoutDone),
};
