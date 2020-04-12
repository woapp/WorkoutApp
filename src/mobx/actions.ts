import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { RootModel } from './rootModel';
import { ExerciseType } from './exercise';

export const rootActions = (self: ModelInstanceTypeProps<typeof RootModel>) => ({
  addExercise(exercise: ExerciseType): void {
    self.exercises.push(exercise);
  },
});
