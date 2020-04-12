import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetType } from '../exerciseSet';

import { FreeWorkoutModel } from './model';

export const freeWorkoutActions = (self: ModelInstanceTypeProps<typeof FreeWorkoutModel>) => ({
  addExerciseSets(exerciseSets: ExerciseSetType[]) {
    self.exerciseSets.concat(exerciseSets);
  },
});
