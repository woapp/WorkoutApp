import { generateId } from '@woap/utils/services/generateId';

import { Exercise } from '../exercise';
import { MuscleGroup } from '../types';

export const createExercise = (name = '', muscleGroups: MuscleGroup[] = []) =>
  Exercise.create({ id: generateId(), name, muscleGroups });
