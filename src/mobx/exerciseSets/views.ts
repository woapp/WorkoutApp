import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetsModel } from './model';

export const exerciseSetsViews = (self: ModelInstanceTypeProps<typeof ExerciseSetsModel>) => ({
  get nbSets() {
    return self.sets.length;
  },
});
