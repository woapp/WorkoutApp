import { generateId } from '@woap/utils/services/generateId';
import { ReferenceIdentifier } from 'mobx-state-tree';

import { ExerciseSet } from '.';

export const createExerciseSet = (exercise: ReferenceIdentifier) =>
  ExerciseSet.create({ exercise, id: generateId(), reps: 10, weight: 0 });

// FreeWorkout--> Training;
// Training has name
// Training has tags
// Training has isFavorite
// FreeWorkout has ExerciseSets
// ExerciseSet has an Exercise
