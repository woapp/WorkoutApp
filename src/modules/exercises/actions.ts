import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseModel } from './model';

export const exerciseActions = (self: ModelInstanceTypeProps<typeof ExerciseModel>) => ({
  create(newName: string): void {
    self.name = newName;
  },
});