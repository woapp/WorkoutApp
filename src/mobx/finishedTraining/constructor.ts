import { generateId } from '@woap/utils/services/generateId';
import { getType, clone } from 'mobx-state-tree';

import { TrainingSnapshotIn } from '../training';
import { FreeWorkout } from '../freeWorkout';

import { FinishedFreeWorkout } from '.';

export const createFinishedTraining = (training: TrainingSnapshotIn) => {
  if (getType(training) === FreeWorkout) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, tags, exerciseSets, ...otherData } = training;

    return FinishedFreeWorkout.create({
      ...otherData,
      tags: clone(training.tags || []),
      exerciseSets: clone(exerciseSets || []),
      id: generateId(),
      date: Date.now(),
    });
  }

  return null;
};
