import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import { persist } from 'mst-persist';
import { AsyncStorage } from 'react-native';
import { i18n } from '@woap/i18n';
import { t } from '@lingui/macro';

import { RootModel } from './rootModel';
import { rootActions } from './actions';
import { MuscleGroup } from './types';
import { createWorkout } from './workout/constructor';
import { createExercise } from './exercise/constructor';

export const RootStore = types.model(RootModel).actions(rootActions);

const e1 = createExercise();
e1.setName(i18n._(t`Crunch`));
e1.setMuscleGroups([MuscleGroup.Abs]);
const e2 = createExercise();
e2.setName(i18n._(t`Squat`));
e2.setMuscleGroups([MuscleGroup.Legs, MuscleGroup.Calves]);
const e3 = createExercise();
e3.setName(i18n._(t`Push up`));
e3.setMuscleGroups([MuscleGroup.Chest, MuscleGroup.Triceps]);
const e4 = createExercise();
e4.setName(i18n._(t`Curl biceps`));
e4.setMuscleGroups([MuscleGroup.Biceps]);

const w1 = createWorkout();
w1.setName(i18n._(t`My super workout`));
w1.addExercise(e1);
w1.addExercise(e2);

const w2 = createWorkout();
w2.setName(i18n._(t`Best workout ever`));
w2.addExercise(e1);

export const rootStore = RootStore.create({
  workouts: [w1, w2],
  exercises: [e1, e2, e3, e4],
  history: [],
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
