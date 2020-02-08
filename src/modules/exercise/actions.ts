import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { MuscleGroup } from '../types';

import { ExerciseModel } from './model';

export const exerciseActions = (self: ModelInstanceTypeProps<typeof ExerciseModel>) => ({
  setName(newName: string): void {
    self.name = newName;
  },
  setMuscleGroups(muscleGroups: MuscleGroup[]): void {
    self.muscleGroups.replace(muscleGroups);
  },
});
