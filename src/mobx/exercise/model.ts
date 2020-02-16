import { types } from 'mobx-state-tree';

import { MuscleGroup } from '../types';

export const ExerciseModel = {
  name: types.optional(types.string, 'Exercice'),
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.identifier,
};