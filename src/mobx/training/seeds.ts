// @ts-nocheck
import { createFreeWorkout } from '../freeWorkout/constructor';
import { defaultTags } from '../tag/defaultTags';
import { createExerciseSet } from '../exerciseSet/constructor';
import { exerciseSeeds } from '../exercise/seeds';

export const trainingSeeds = [
  createFreeWorkout({
    tags: [defaultTags[0].id],
    name: 'Half upper body',
    isFavorite: true,
    exerciseSets: [
      createExerciseSet(exerciseSeeds[0].id),
      createExerciseSet(exerciseSeeds[0].id),
      createExerciseSet(exerciseSeeds[0].id),
      createExerciseSet(exerciseSeeds[1].id),
      createExerciseSet(exerciseSeeds[1].id),
      createExerciseSet(exerciseSeeds[1].id),
      createExerciseSet(exerciseSeeds[2].id),
      createExerciseSet(exerciseSeeds[2].id),
      createExerciseSet(exerciseSeeds[2].id),
    ],
  }),
  createFreeWorkout({
    tags: [defaultTags[0].id, defaultTags[1].id, defaultTags[2].id],
    name: 'Half lower body',
    isFavorite: true,
    exerciseSets: [
      createExerciseSet(exerciseSeeds[3].id),
      createExerciseSet(exerciseSeeds[3].id),
      createExerciseSet(exerciseSeeds[3].id),
      createExerciseSet(exerciseSeeds[4].id),
      createExerciseSet(exerciseSeeds[4].id),
      createExerciseSet(exerciseSeeds[4].id),
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[5].id),
    ],
  }),
  createFreeWorkout({
    tags: [defaultTags[1].id],
    name: 'Full body',
    isFavorite: false,
    exerciseSets: [
      createExerciseSet(exerciseSeeds[0].id),
      createExerciseSet(exerciseSeeds[0].id),
      createExerciseSet(exerciseSeeds[0].id),
      createExerciseSet(exerciseSeeds[3].id),
      createExerciseSet(exerciseSeeds[1].id),
      createExerciseSet(exerciseSeeds[4].id),
      createExerciseSet(exerciseSeeds[2].id),
      createExerciseSet(exerciseSeeds[1].id),
      createExerciseSet(exerciseSeeds[2].id),
    ],
  }),
  createFreeWorkout({
    tags: [defaultTags[2].id],
    name: 'Split chest',
    isFavorite: false,
    exerciseSets: [
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[6].id),
      createExerciseSet(exerciseSeeds[6].id),
      createExerciseSet(exerciseSeeds[6].id),
      createExerciseSet(exerciseSeeds[7].id),
      createExerciseSet(exerciseSeeds[7].id),
      createExerciseSet(exerciseSeeds[7].id),
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[5].id),
      createExerciseSet(exerciseSeeds[6].id),
      createExerciseSet(exerciseSeeds[6].id),
      createExerciseSet(exerciseSeeds[6].id),
      createExerciseSet(exerciseSeeds[7].id),
      createExerciseSet(exerciseSeeds[7].id),
      createExerciseSet(exerciseSeeds[7].id),
    ],
  }),
];
