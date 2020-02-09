import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetsModel } from './model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const exerciseSetsActions = (self: ModelInstanceTypeProps<typeof ExerciseSetsModel>) => ({
  setNbReps(setRank, nbReps) {
    console.log('setRank', setRank);
    console.log('setRank', setRank);
    console.log('nbReps', nbReps);
    self.sets[setRank].nbReps = nbReps;
  },
  setWeight(setRank, weight) {
    self.sets[setRank].weight = weight;
  },
  addNewSet() {
    // TODO: refacto, use preivous value
    self.sets.push({ weight: 0, nbReps: 10 });
  },
});
