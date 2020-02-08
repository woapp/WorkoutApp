import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseType } from '../exercise';

import { WorkoutModel } from './model';

export const workoutActions = (self: ModelInstanceTypeProps<typeof WorkoutModel>) => ({
  setName(newName: string): void {
    self.name = newName;
  },
  addExercise(exercise: ExerciseType): void {
    self.exercises.push({ exercise, sets: [] });
  },
  // @typescript-eslint/no-empty-function
  // removeExercise(exercise: ExerciseType): void {
  //   self.exercises.remove({ exercise, sets: [] });
  // },
});
