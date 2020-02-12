import { ModelInstanceTypeProps } from 'mobx-state-tree';
import _ from 'lodash';

import { WorkoutModel } from './model';

export const workoutViews = (self: ModelInstanceTypeProps<typeof WorkoutModel>) => ({
  get nbExercises() {
    return self.exercises.length;
  },
  get mainMuscleGroups() {
    return _.uniq(self.exercises.map(exerciseSet => exerciseSet.exercise.mainMuscleGroup));
  },
});
