import { types } from 'mobx-state-tree';

import { Exercise } from '../exercise';

export const ExerciseSetModel = {
  exercise: types.reference(Exercise),
  id: types.identifier,
  weight: types.number,
  nbReps: types.number,
};
