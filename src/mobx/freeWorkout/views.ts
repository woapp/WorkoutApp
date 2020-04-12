import { ModelInstanceTypeProps } from 'mobx-state-tree';
import _ from 'lodash';

import { FreeWorkoutModel } from './model';

export const workoutViews = (self: ModelInstanceTypeProps<typeof FreeWorkoutModel>) => ({
  get mainMuscleGroups() {
    return _.uniq(self.exerciseSets.map(exerciseSet => exerciseSet.exercise.mainMuscleGroup));
  },
});
