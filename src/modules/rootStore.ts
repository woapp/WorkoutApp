import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

import { generateId } from '../utils/services/generateId';

import { RootModel } from './rootModel';
import { rootActions } from './actions';
import { MuscleGroup } from './types';
import { Workout } from './workout';
import { createWorkout } from './workout/constructor';
import { createExercise } from './exercise/constructor';

export const RootStore = types.model(RootModel).actions(rootActions);

const e1 = createExercise();
e1.setName('Crunch');
const e2 = createExercise();
e2.setName('Squat');

const w1 = createWorkout();
w1.setName('My super workout');
w1.addExercise(e1);
w1.addExercise(e2);

const w2 = createWorkout();
w2.setName('Best workout ever');
w2.addExercise(e1);

export const rootStore = RootStore.create({
  workouts: [w1, w2],
  exercises: [e1, e2],
  history: [],
});

makeInspectable(rootStore);
