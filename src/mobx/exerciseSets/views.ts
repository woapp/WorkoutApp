import { ModelInstanceTypeProps } from 'mobx-state-tree';
import _ from 'lodash';

import { ExerciseSetsType } from './index';

export const exerciseSetsViews = (self: ModelInstanceTypeProps<typeof ExerciseSetsType>) => ({
  get maxWeight() {
    return _.maxBy(self.sets, set => set.weight)?.weight;
  },
});
