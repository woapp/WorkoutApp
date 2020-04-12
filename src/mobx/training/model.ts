import { types } from 'mobx-state-tree';

import { Tag } from '../tag';

export const TrainingModel = {
  name: types.optional(types.string, 'Entrainement'),
  id: types.identifier,
  isFavorite: types.optional(types.boolean, false),
  tags: types.array(Tag),
};
