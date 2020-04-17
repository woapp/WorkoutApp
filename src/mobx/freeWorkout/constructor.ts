import { generateId } from '@woap/utils/services/generateId';

import { FreeWorkout } from '.';

export const createFreeWorkout = () => FreeWorkout.create({ id: generateId() });
