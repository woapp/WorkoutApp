import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import { persist } from 'mst-persist';
import { AsyncStorage } from 'react-native';

import { RootModel } from './rootModel';
import { rootActions } from './actions';
import { createExercise } from './exercise/constructor';
import { ExerciseSet } from './exerciseSet';
import { FreeWorkout } from './freeWorkout';

export const RootStore = types.model(RootModel).actions(rootActions);

const exercise = createExercise();
const exerciseSet = ExerciseSet.create({ id: '1', exercise: exercise.id, nbReps: 2, weight: 4 });
const freeWorkout = FreeWorkout.create({ id: '2' });
freeWorkout.addExerciseSets([exerciseSet]);

export const rootStore = RootStore.create({
  trainings: [],
  exercises: [],
});

persist('rootStore', rootStore, {
  storage: AsyncStorage,
}).then(() => console.log('rootStore has been hydrated'));

makeInspectable(rootStore);

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  global.store = rootStore;
}
