import { types, Instance } from 'mobx-state-tree';

import { ExerciseSetsModel } from './model';
import { exerciseSetsActions } from './actions';

export const ExerciseSets = types.model(ExerciseSetsModel).actions(exerciseSetsActions);

export interface ExerciseSetsType extends Instance<typeof ExerciseSets> {}
