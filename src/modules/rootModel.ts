import { types } from 'mobx-state-tree';

import { UserModel } from './user';

export const RootStore = types.model({
  user: UserModel,
});
