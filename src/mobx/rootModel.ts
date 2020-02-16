import { types } from 'mobx-state-tree';

import { Workout } from './workout';
import { Exercise } from './exercise';
import { WorkoutDone } from './workoutDone';
import { User } from './user';

export const RootModel = {
  user: types.maybe(User),
  workouts: types.array(Workout),
  exercises: types.array(Exercise),
  archivedExercises: types.array(Exercise),
  history: types.array(WorkoutDone),
  ongoingWorkout: types.maybe(types.reference(Workout)),
};
