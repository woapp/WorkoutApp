import { generateId } from '../../utils/services/generateId';
import { ExerciseType } from '../exercise';

import { ExerciseSets } from '.';

export const createExerciseSets = (exercise: ExerciseType) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  ExerciseSets.create({ exercise, sets: [], id: generateId() });
