import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import { AsyncStorage } from 'react-native';
import { persist } from 'mst-persist';

import { RootModel } from './rootModel';
import { rootActions } from './rootActions';
import { RootViews } from './rootViews';
import { defaultTags } from './tag/defaultTags';

export const RootStore = types
  .model(RootModel)
  .actions(rootActions)
  .views(RootViews);

export const rootStore = RootStore.create({
  trainings: [],
  exercises: [],
  archivedExercises: [],
  tags: defaultTags,
  finishedTrainings: [],
});

persist('rootStore', rootStore, {
  storage: AsyncStorage,
  blacklist: ['newFreeWorkout'],
}).then(() => console.log('rootStore has been hydrated'));

makeInspectable(rootStore);

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  global.store = rootStore;
}
