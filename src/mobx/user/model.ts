import { types } from 'mobx-state-tree';

export const UserModel = {
  email: types.string,
  id: types.identifier,
};
