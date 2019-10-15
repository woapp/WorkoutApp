import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { userModel } from './model';

export const userActions = (self: ModelInstanceTypeProps<typeof userModel>) => ({
  setName(newName: string): void {
    self.name = newName;
  },
});
