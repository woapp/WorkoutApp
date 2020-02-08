import { types, Instance } from 'mobx-state-tree';

import { ExerciseModel } from './model';

export const Exercise = types.model(ExerciseModel);

export interface ExerciseType extends Instance<typeof Exercise> {}
