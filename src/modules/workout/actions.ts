import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { WorkoutModel } from './model';

export const workoutActions = (self: ModelInstanceTypeProps<typeof WorkoutModel>) => ({
  setName(newName: string): void {
    self.name = newName;
  },
  addExecise(): void {},
  removeExercise(): void {},
});
