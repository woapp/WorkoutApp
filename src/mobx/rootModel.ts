import { types } from 'mobx-state-tree';

import { Exercise } from '../mobx/exercise';
// import { WorkoutDone } from '../mobx/workoutDone';
// import { User } from '../mobx/user';

import { Training } from './training';

export const RootModel = {
  trainings: types.array(Training),
  exercises: types.array(Exercise),
  // user: types.maybe(User),
  // archivedExercises: types.array(Exercise),
  // history: types.array(WorkoutDone),
  // ongoingWorkout: types.maybe(types.reference(Workout)),
};
