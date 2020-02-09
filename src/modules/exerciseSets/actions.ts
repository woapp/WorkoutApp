import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { ExerciseSetsModel } from './model';

export const exerciseSetsActions = (self: ModelInstanceTypeProps<typeof ExerciseSetsModel>) => ({
  setNbReps(setRank, nbReps) {
    self.sets[setRank].nbReps = nbReps;
  },
  setWeight(setRank, weight) {
    self.sets[setRank].weight = weight;
  },
  addNewSet() {
    let weight = 0;
    let nbReps = 10;
    const nbSets = self.sets.length;
    if (nbSets > 0) {
      weight = self.sets[nbSets - 1].weight;
      nbReps = self.sets[nbSets - 1].nbReps;
    }
    self.sets.push({ weight, nbReps });
  },
});
