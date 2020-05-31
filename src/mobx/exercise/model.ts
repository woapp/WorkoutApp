import { types } from 'mobx-state-tree';

import { MuscleGroup } from '../../mobx/types';

export const ExerciseModel = {
  name: types.optional(types.string, 'Exercice'),
  description: types.optional(types.string, ''),
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.identifier,
};
