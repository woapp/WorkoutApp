import { types } from 'mobx-state-tree';

import { userModel } from './model';
import { userActions } from './actions';

export const User = types.model(userModel).actions(userActions);

export const initialUser = User.create({ name: 'toto' });
