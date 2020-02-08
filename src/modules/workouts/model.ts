import { types, Instance } from 'mobx-state-tree';

import { MuscleGroup } from '../types';
import { ExerciseModel } from '../exercises/model';

export const WorkoutModel = types.model({
  name: types.string,
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.identifierNumber,
  exercises: types.array(
    types.model({
      exercise: types.reference(ExerciseModel),
      sets: types.array(
        types.model({
          weight: types.number,
          nbReps: types.number,
        })
      ),
    })
  ),
});

export interface Workout extends Instance<typeof WorkoutModel> {}
