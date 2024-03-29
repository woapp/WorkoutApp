import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseModel } from './model';

export const exerciseViews = (self: ModelInstanceTypeProps<typeof ExerciseModel>) => ({
  get mainMuscleGroup() {
    return self.muscleGroups[0];
  },
  get muscleRatios() {
    return Object.assign({}, ...self.muscleGroups.map(muscleGroup => ({ [muscleGroup]: 1 })));
  },
});
