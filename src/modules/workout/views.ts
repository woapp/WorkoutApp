import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { WorkoutModel } from './model';

export const workoutViews = (self: ModelInstanceTypeProps<typeof WorkoutModel>) => ({
  get nbExercises() {
    return self.exercises.length;
  },
});
