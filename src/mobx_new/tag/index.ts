import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';

import { TagModel } from './model';

export const Tag = types.model(TagModel);

export interface TagType extends Instance<typeof Tag> {}
export interface TagSnapshotIn extends SnapshotIn<typeof Tag> {}
export interface TagSnapshotOut extends SnapshotOut<typeof Tag> {}
