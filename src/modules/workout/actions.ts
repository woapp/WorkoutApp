import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { WorkoutModel } from './model';

export const workoutActions = (self: ModelInstanceTypeProps<typeof WorkoutModel>) => ({
  setName(newName: string): void {
    self.name = newName;
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addExecise(): void {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeExercise(): void {},
});
