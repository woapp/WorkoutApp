import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { TagType } from '../tag';

import { BaseTrainingModel } from './model';

export const BaseTrainingActions = (self: ModelInstanceTypeProps<typeof BaseTrainingModel>) => ({
  setTags(tags: TagType[]) {
    self.tags.replace(tags);
  },
  setName(name: string) {
    self.name = name;
  },
  toggleFavorite() {
    self.isFavorite = !self.isFavorite;
  },
});
