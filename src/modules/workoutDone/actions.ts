import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { WorkoutDoneModel } from './model';

export const workoutDoneActions = (self: ModelInstanceTypeProps<typeof WorkoutDoneModel>) => ({
  setDate(date: Date): void {
    self.date = date;
  },
});
