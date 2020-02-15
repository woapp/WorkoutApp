import { generateId } from '../../utils/services/generateId';
import { Workout } from '../workout';

export const createWorkout = () =>
  Workout.create({ id: generateId(), name: '', exercises: [], muscleGroups: [] });
