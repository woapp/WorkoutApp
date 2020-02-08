import { types } from 'mobx-state-tree';

import { MuscleGroup } from '../types';
import { generateId } from '../../utils/services/generateId';

export const ExerciseModel = {
  name: types.optional(types.string, 'Exercice'),
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.optional(types.identifier, generateId()),
};
