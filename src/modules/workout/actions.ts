import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { WorkoutModel } from './model';

export const workoutActions = (self: ModelInstanceTypeProps<typeof WorkoutModel>) => ({
  create(newName: string): void {
    self.name = newName;
  },
});
