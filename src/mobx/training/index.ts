import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { TrainingModel } from './model';

export const Training = types.model(TrainingModel);

export interface TrainingType extends Instance<typeof Training> {}
export interface TrainingSnapshotIn extends SnapshotIn<typeof Training> {}
export interface TrainingSnapshotOut extends SnapshotOut<typeof Training> {}
