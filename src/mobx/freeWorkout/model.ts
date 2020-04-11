import { types } from 'mobx-state-tree';
import { ExerciseSet } from '@woap/mobx/exerciseSet';

export const FreeWorkoutModel = {
  exerciseSets: types.array(ExerciseSet),
};
