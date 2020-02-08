import { generateId } from '../../utils/services/generateId';
import { ExerciseType } from '../exercise';

import { ExerciseSets } from '.';

export const createExerciseSets = (exercise: ExerciseType) =>
  ExerciseSets.create({ exercise, sets: [], id: generateId() });
