import { types } from 'mobx-state-tree';

import { Exercise } from '../mobx/exercise';

import { FreeWorkout } from './freeWorkout';
import { Tag } from './tag';
import { Training } from './training';

export const RootModel = {
  newFreeWorkout: types.maybe(FreeWorkout),
  trainings: types.array(Training),
  exercises: types.array(Exercise),
  tags: types.array(Tag),
  ongoingTraining: types.maybe(Training),
};
