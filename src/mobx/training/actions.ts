import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { TagType } from '../tag';

import { TrainingModel } from './model';

export const TrainingActions = (self: ModelInstanceTypeProps<typeof TrainingModel>) => ({
  setTags(tags: TagType[]) {
    self.tags.replace(tags);
  },
  setName(name: string) {
    self.name = name;
  },
});
