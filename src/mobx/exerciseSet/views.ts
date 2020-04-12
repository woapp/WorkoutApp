import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetModel } from './model';

export const exerciseSetsViews = (self: ModelInstanceTypeProps<typeof ExerciseSetModel>) => ({
  get name() {
    return self.exercise.name;
  },
});
