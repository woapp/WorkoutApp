import { ModelInstanceTypeProps } from 'mobx-state-tree';
import { isSameDay, endOfDay } from 'date-fns';
import _ from 'lodash';

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
  getFinishedTrainingsForAGivenDate(date: Date) {
    return this.sortedFinishedTrainings.filter((finishedTraining: FinishedTrainingType) =>
      isSameDay(finishedTraining.date, date)
    );
  },
  get numberOfFinishedTrainingsPerDay() {
    return _.countBy(this.sortedFinishedTrainings, (finishedTraining: FinishedTrainingType) =>
      endOfDay(finishedTraining.date)
    );
  },
});
