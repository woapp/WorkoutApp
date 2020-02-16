import { types, Instance } from 'mobx-state-tree';

import { UserModel } from './model';

export const User = types.model(UserModel);

export interface UserType extends Instance<typeof User> {}
