import { types } from 'mobx-state-tree';

export const userModel = {
  name: types.optional(types.string, ''),
};
