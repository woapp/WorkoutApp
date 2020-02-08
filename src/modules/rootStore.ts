import { types } from 'mobx-state-tree';

import { RootModel } from './rootModel';

export const RootStore = types.model(RootModel);

export const rootStore = RootStore.create({
  workouts: [],
  exercises: [],
  history: [],
});
