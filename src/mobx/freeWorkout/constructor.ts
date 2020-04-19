import { generateId } from '@woap/utils/services/generateId';

import { FreeWorkout, FreeWorkoutSnapshotIn } from '.';

export const createFreeWorkout = (data?: FreeWorkoutSnapshotIn) =>
  FreeWorkout.create({ ...data, id: generateId() });
