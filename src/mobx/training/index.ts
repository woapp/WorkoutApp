import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { TrainingModel } from './model';
import { TrainingActions } from './actions';

export const Training = types.model(TrainingModel).actions(TrainingActions);

export interface TrainingType extends Instance<typeof Training> {}
export interface TrainingModelType extends Instance<typeof TrainingModel> {}
export interface TrainingSnapshotIn extends SnapshotIn<typeof Training> {}
export interface TrainingSnapshotOut extends SnapshotOut<typeof Training> {}
