import { types } from 'mobx-state-tree';

import { MuscleGroup } from '../types';
import { Exercise } from '../exercises';

export const WorkoutModel = {
  name: types.string,
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.identifierNumber,
  exercises: types.array(
    types.model({
      exercise: types.reference(Exercise),
      sets: types.array(
        types.model({
          weight: types.number,
          nbReps: types.number,
        })
      ),
    })
  ),
};
