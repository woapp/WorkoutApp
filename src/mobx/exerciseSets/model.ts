import { types } from 'mobx-state-tree';

import { Exercise } from '../exercise';

export const ExerciseSetsModel = {
  exercise: types.reference(Exercise),
  id: types.identifier,
  sets: types.array(
    types.model({
      weight: types.number,
      nbReps: types.number,
    })
  ),
};
