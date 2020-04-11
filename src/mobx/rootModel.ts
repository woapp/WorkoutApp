import { types } from 'mobx-state-tree';

import { Workout } from '../mobx/workout';
import { Exercise } from '../mobx/exercise';
import { WorkoutDone } from '../mobx/workoutDone';
import { User } from '../mobx/user';

export const RootModel = {
  user: types.maybe(User),
  workouts: types.array(Workout),
  exercises: types.array(Exercise),
  archivedExercises: types.array(Exercise),
  history: types.array(WorkoutDone),
  ongoingWorkout: types.maybe(types.reference(Workout)),
};
