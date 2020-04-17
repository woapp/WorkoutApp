import { types } from 'mobx-state-tree';

import { Exercise } from '../mobx/exercise';

import { FreeWorkout } from './freeWorkout';
import { Tag } from './tag';

export const RootModel = {
  newFreeWorkout: types.maybe(FreeWorkout),
  trainings: types.array(FreeWorkout),
  exercises: types.array(Exercise),
  tags: types.array(Tag),
};
