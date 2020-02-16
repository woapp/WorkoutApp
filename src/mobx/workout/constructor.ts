import { generateId } from '@woap/utils/services/generateId';

import { Workout } from '../workout';

export const createWorkout = () =>
  Workout.create({ id: generateId(), name: '', exercises: [], muscleGroups: [] });
