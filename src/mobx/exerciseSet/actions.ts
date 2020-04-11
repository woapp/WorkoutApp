import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetModel } from './model';

export const exerciseSetActions = (self: ModelInstanceTypeProps<typeof ExerciseSetModel>) => ({
  setNbReps(nbReps: number) {
    self.nbReps = nbReps;
  },
  setWeight(weight: number) {
    self.weight = weight;
  },
});
