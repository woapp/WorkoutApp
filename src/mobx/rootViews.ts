import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { FinishedTrainingType } from './finishedTraining/index';
import { RootModel } from './rootModel';
import { TrainingType } from './training';

export const RootViews = (self: ModelInstanceTypeProps<typeof RootModel>) => ({
  get favoriteTrainings() {
    return self.trainings.filter((training: TrainingType) => training.isFavorite);
  },
  get sortedFinishedTrainings() {
    return self.finishedTrainings
      .slice()
      .sort(
        (training1: FinishedTrainingType, training2: FinishedTrainingType) =>
          training1.date.getMilliseconds() - training2.date.getMilliseconds()
      );
  },
});
