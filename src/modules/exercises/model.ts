import { types, Instance } from 'mobx-state-tree';

import { MuscleGroup } from '../types';

export const ExerciseModel = types.model({
  name: types.string,
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.identifierNumber,
});

export interface Exercise extends Instance<typeof ExerciseModel> {}
