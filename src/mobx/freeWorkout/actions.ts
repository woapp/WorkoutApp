import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetType } from '../exerciseSet';
import { createExerciseSet } from '../exerciseSet/constructor';

import { FreeWorkoutModel } from './model';

export const FreeWorkoutActions = (self: ModelInstanceTypeProps<typeof FreeWorkoutModel>) => ({
  addExerciseSet(exerciseSet: ExerciseSetType) {
    self.exerciseSets.push(exerciseSet);
  },
  removeExerciseSet(exerciseSet: ExerciseSetType) {
    self.exerciseSets.remove(exerciseSet);
  },
  replaceExerciseSets(exerciseSets: ExerciseSetType[]) {
    self.exerciseSets.replace(exerciseSets);
  },
  duplicateExerciseSet(exerciseSet: ExerciseSetType) {
    const index = self.exerciseSets.indexOf(exerciseSet);
    const newExerciseSet = createExerciseSet(exerciseSet.exercise.id);
    newExerciseSet.setWeight(exerciseSet.weight);
    newExerciseSet.setReps(exerciseSet.reps);
    self.exerciseSets.splice(index + 1, 0, newExerciseSet);
  },
});
