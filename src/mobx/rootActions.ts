import { ModelInstanceTypeProps, clone } from 'mobx-state-tree';

import { RootModel } from './rootModel';
import { ExerciseType } from './exercise';
import { createFreeWorkout } from './freeWorkout/constructor';
import { TagType } from './tag';

export const rootActions = (self: ModelInstanceTypeProps<typeof RootModel>) => ({
  addExercise(exercise: ExerciseType): void {
    self.exercises.push(exercise);
  },
  addTag(tag: TagType): void {
    self.tags.push(tag);
  },
  initializeNewFreeWorkout(): void {
    self.newFreeWorkout = createFreeWorkout();
  },
  saveNewFreeWorkout(): void {
    if (self.newFreeWorkout) {
      self.trainings.push(clone(self.newFreeWorkout));
      this.initializeNewFreeWorkout();
    }
  },
});
