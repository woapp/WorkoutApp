import { types } from 'mobx-state-tree';

import { Exercise } from '../mobx/exercise';

import { FreeWorkout } from './freeWorkout';
import { Tag } from './tag';
import { Training } from './training';
import { FinishedTraining } from './finishedTraining';

export const RootModel = {
  newFreeWorkout: types.maybe(FreeWorkout),
  newExercise: types.maybe(Exercise),
  trainings: types.array(Training),
  finishedTrainings: types.array(FinishedTraining),
  exercises: types.array(Exercise),
  archivedExercises: types.array(Exercise),
  tags: types.array(Tag),
};
