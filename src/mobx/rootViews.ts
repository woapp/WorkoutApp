import { ModelInstanceTypeProps } from 'mobx-state-tree';
import { isSameDay, endOfDay, isAfter } from 'date-fns';
import _ from 'lodash';
import { Ratios } from '@woap/components/BodyVisualisation/index';

import { ExerciseSetType } from './exerciseSet/index';
import { MuscleGroup } from './types';
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
  getStatisticsBodyRatios(startDate: Date): Ratios {
    const numberOfRepsForEachMuscleGroup = new Map<MuscleGroup, number>();
    self.finishedTrainings
      .filter((training: FinishedTrainingType) => isAfter(training.date, startDate))
      .forEach((training: FinishedTrainingType) => {
        training.exerciseSets.forEach((set: ExerciseSetType) => {
          set.exercise.muscleGroups.forEach((muscleGroup: MuscleGroup) => {
            const actualNumberOfReps = numberOfRepsForEachMuscleGroup.get(muscleGroup) || 0;
            numberOfRepsForEachMuscleGroup.set(muscleGroup, actualNumberOfReps + set.reps);
          });
        });
      });
    const maxRepsForOneMuscleGroup = Math.max(...numberOfRepsForEachMuscleGroup.values());
    const bodyRatios: Ratios = {};
    for (const [muscleGroup, numberOfReps] of numberOfRepsForEachMuscleGroup.entries()) {
      bodyRatios[muscleGroup] = numberOfReps / maxRepsForOneMuscleGroup;
    }

    return bodyRatios;
  },
});
