import { types } from 'mobx-state-tree';

import { MuscleGroup } from '../../mobx_new/types';
import { ExerciseSets } from '../exerciseSets';

export const WorkoutDoneModel = {
  name: types.string,
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  exercises: types.array(ExerciseSets),
  date: types.Date,
  id: types.identifier,
};
