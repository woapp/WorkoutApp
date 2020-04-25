import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

import { RootModel } from './rootModel';
import { rootActions } from './rootActions';
import { RootViews } from './rootViews';
import { exerciseSeeds } from './exercise/seeds';
import { defaultTags } from './tag/defaultTags';
import { trainingSeeds } from './training/seeds';

export const RootStore = types
  .model(RootModel)
  .actions(rootActions)
  .views(RootViews);

export const rootStore = RootStore.create({
  trainings: trainingSeeds,
  exercises: exerciseSeeds,
  archivedExercises: [],
  tags: defaultTags,
});

// TODO: reactivate persistence
// persist('rootStore', rootStore, {
//   storage: AsyncStorage,
//   blacklist: ['newFreeWorkout'],
// }).then(() => console.log('rootStore has been hydrated'));

makeInspectable(rootStore);

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  global.store = rootStore;
}
