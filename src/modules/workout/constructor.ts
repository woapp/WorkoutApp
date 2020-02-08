import { Workout } from '.';
import { generateId } from '../../utils/services/generateId';

export const createWorkout = () =>
  Workout.create({ id: generateId(), name: '', exercises: [], muscleGroups: [] });
