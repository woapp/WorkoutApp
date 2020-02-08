import { types } from 'mobx-state-tree';

import { WorkoutModel } from './workouts/model';
import { ExerciseModel } from './exercises/model';
import { WorkoutDoneModel } from './history/model';

export const RootModel = {
  workouts: types.array(WorkoutModel),
  exercises: types.array(ExerciseModel),
  history: types.array(WorkoutDoneModel),
};
