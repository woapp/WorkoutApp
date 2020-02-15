import { types } from 'mobx-state-tree';

import { MuscleGroup } from '../types';
import { ExerciseSets } from '../exerciseSets';

export const WorkoutModel = {
  name: types.optional(types.string, 'Entrainement'),
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.identifier,
  exercises: types.array(ExerciseSets),
};
