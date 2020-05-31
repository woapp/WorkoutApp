import { generateId } from '@woap/utils/services/generateId';

import { FreeWorkout, FreeWorkoutSnapshotIn } from '.';

export const createFreeWorkout = (data?: Omit<FreeWorkoutSnapshotIn, 'id'>) =>
  FreeWorkout.create({ ...data, id: generateId() });
