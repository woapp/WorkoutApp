import { types } from 'mobx-state-tree';

export const UserModel = types
  .model({
    name: types.optional(types.string, ''),
  })
  .actions(self => ({
    setName(newName: string): void {
      self.name = newName;
    },
  }));
