import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { BaseTrainingModel } from './model';
import { BaseTrainingActions } from './actions';

export const BaseTraining = types.model(BaseTrainingModel).actions(BaseTrainingActions);

export interface BaseTrainingType extends Instance<typeof BaseTraining> {}
export interface BaseTrainingModelType extends Instance<typeof BaseTrainingModel> {}
export interface BaseTrainingSnapshotIn extends SnapshotIn<typeof BaseTraining> {}
export interface BaseTrainingSnapshotOut extends SnapshotOut<typeof BaseTraining> {}
