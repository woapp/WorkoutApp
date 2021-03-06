import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { MuscleGroup } from '../../mobx/types';

import { ExerciseModel } from './model';

export const exerciseActions = (self: ModelInstanceTypeProps<typeof ExerciseModel>) => ({
  setName(newName: string): void {
    self.name = newName;
  },
  setDescription(newDescription: string): void {
    self.description = newDescription;
  },
  addMuscleGroup(muscleGroup: MuscleGroup): void {
    self.muscleGroups.push(muscleGroup);
  },
  removeMuscleGroup(muscleGroup: MuscleGroup): void {
    self.muscleGroups.remove(muscleGroup);
  },
  setMuscleGroups(muscleGroups: MuscleGroup[]): void {
    self.muscleGroups.replace(muscleGroups);
  },
});
