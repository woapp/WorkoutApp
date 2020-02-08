import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseType } from '../exercise';
import { createExerciseSets } from '../exerciseSets/constructor';

import { WorkoutModel } from './model';

export const workoutActions = (self: ModelInstanceTypeProps<typeof WorkoutModel>) => ({
  setName(newName: string): void {
    self.name = newName;
  },
  addExercise(exercise: ExerciseType): void {
    self.exercises.push(createExerciseSets(exercise));
  },
  removeExercise(exerciseToRemove: ExerciseType): void {
    self.exercises = self.exercises.filter(
      exerciseSets => exerciseSets.exercise.id !== exerciseToRemove.id
    );
  },
});
