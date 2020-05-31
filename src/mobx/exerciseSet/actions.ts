import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetModel } from './model';

export const exerciseSetActions = (self: ModelInstanceTypeProps<typeof ExerciseSetModel>) => ({
  setReps(reps: number) {
    self.reps = reps;
  },
  setWeight(weight: number) {
    self.weight = weight;
  },
});
