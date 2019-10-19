import { types } from 'mobx-state-tree';

import { RootModel } from './rootModel';
import { initialUser } from './user';

export const RootStore = types.model(RootModel);

export const rootStore = RootStore.create({
  user: initialUser,
});
