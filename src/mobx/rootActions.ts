import { ModelInstanceTypeProps, clone, destroy, castToSnapshot } from 'mobx-state-tree';
import { createExercise } from '@woap/mobx/exercise/constructor';

import { RootModel } from './rootModel';
import { ExerciseType } from './exercise';
import { createFreeWorkout } from './freeWorkout/constructor';
import { TagType } from './tag';
import { TrainingType } from './training';
import { defaultTags } from './tag/defaultTags';
import { createFinishedTraining } from './finishedTraining/constructor';

export const rootActions = (self: ModelInstanceTypeProps<typeof RootModel>) => ({
  addTag(tag: TagType): void {
    self.tags.push(tag);
  },
  addDefaultTags() {
    if (self.tags.length === 0) {
      self.tags.replace(defaultTags);
    }
  },
  initializeNewExercise(): void {
    self.newExercise = createExercise();
  },
  saveNewExercise(): void {
    if (self.newExercise) {
      self.exercises.push(clone(self.newExercise));
      self.newExercise = undefined;
    }
  },
  initializeNewFreeWorkout(): void {
    self.newFreeWorkout = createFreeWorkout();
  },
  saveNewFreeWorkout(): void {
    if (self.newFreeWorkout) {
      self.trainings.push(clone(self.newFreeWorkout));
      self.newFreeWorkout = undefined;
    }
  },
  deleteTraining(training: TrainingType): void {
    destroy(training);
  },
  /**
   * if the exercise is used in other trainings
   * we only archive so that it remains in those trainings
   * otherwise we delete it completely from the mobx tree
   */
  deleteExercise(exercise: ExerciseType): void {
    const exerciseClone = clone(exercise);
    const shouldArchiveExercise = self.trainings.some((training: TrainingType) =>
      training.exercisesId.includes(exerciseClone.id)
    );
    if (shouldArchiveExercise) {
      self.exercises.remove(exercise);
      self.archivedExercises.push(exerciseClone);
    } else {
      destroy(exercise);
    }
  },
  finishTraining(training: TrainingType): void {
    const finishedTraining = createFinishedTraining(castToSnapshot(clone(training)));
    self.finishedTrainings.push(finishedTraining);
  },
});
