import { generateId } from '@woap/utils/services/generateId';
import { Exercise } from '../exercise';

export const createExercise = () =>
  Exercise.create({ id: generateId(), name: '', muscleGroups: [] });
