import { types, Instance } from 'mobx-state-tree';

import { ExerciseModel } from './model';
import { exerciseActions } from './actions';

export const Exercise = types.model(ExerciseModel).actions(exerciseActions);

export interface ExerciseType extends Instance<typeof Exercise> {}
