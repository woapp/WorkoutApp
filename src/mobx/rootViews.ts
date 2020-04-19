import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { RootModel } from './rootModel';
import { TrainingType } from './training';

export const RootViews = (self: ModelInstanceTypeProps<typeof RootModel>) => ({
  get favoriteTrainings() {
    return self.trainings.filter((training: TrainingType) => training.isFavorite);
  },
});
