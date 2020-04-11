import { types } from 'mobx-state-tree';

export const TagModel = {
  name: types.string,
  id: types.identifier,
};
