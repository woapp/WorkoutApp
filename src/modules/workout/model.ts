import { types } from 'mobx-state-tree';

import { generateId } from '../../utils/services/generateId';
import { MuscleGroup } from '../types';
import { Exercise } from '../exercise';

export const WorkoutModel = {
  name: types.optional(types.string, 'Entrainement'),
  muscleGroups: types.array(types.enumeration<MuscleGroup>(Object.values(MuscleGroup))),
  id: types.optional(types.identifier, generateId()),
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