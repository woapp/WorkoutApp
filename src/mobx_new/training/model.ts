import { types } from 'mobx-state-tree';

import { MuscleGroup } from '../types';
import { Tag } from '../tag';

export const TrainingModel = {
  name: types.optional(types.string, 'Entrainement'),
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.identifier,
  isFavorite: types.optional(types.boolean, false),
  tags: types.array(Tag),
};
