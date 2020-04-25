import { MuscleGroup } from '../types';

import { createExercise } from './constructor';

export const exerciseSeeds = [
  createExercise('Crunch', [MuscleGroup.Abs]),
  createExercise('Squat', [MuscleGroup.Ischios]),
  createExercise('Push up', [MuscleGroup.Chest, MuscleGroup.Triceps]),
  createExercise('Pull up', [MuscleGroup.Back]),
  createExercise('Curl', [MuscleGroup.Biceps]),
  createExercise('Curl biceps', [MuscleGroup.Ischios]),
  createExercise('Bucheron', [MuscleGroup.Back]),
  createExercise('Développé couché', [MuscleGroup.Chest]),
  createExercise('Pompe prisonnier', [MuscleGroup.Triceps]),
  createExercise('Extension lombaire', [MuscleGroup.Back]),
  createExercise('Développé militaire', [MuscleGroup.Shoulders]),
  createExercise('Fentes', [MuscleGroup.Ischios]),
  createExercise('Extension mollet', [MuscleGroup.Calves]),
];
