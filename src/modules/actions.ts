import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { RootModel } from './rootModel';
import { ExerciseType } from './exercise';
import { WorkoutType } from './workout';
import { WorkoutDoneType } from './workoutDone';

export const rootActions = (self: ModelInstanceTypeProps<typeof RootModel>) => ({
  addExercise(exercise: ExerciseType): void {
    self.exercises.push(exercise);
  },
  removeExercise(exercise: ExerciseType): void {
    self.exercises.remove(exercise);
  },
  addWorkout(workout: WorkoutType): void {
    self.workouts.push(workout);
  },
  removeWorkout(workout: WorkoutType): void {
    self.workouts.remove(workout);
  },
  addWorkoutDone(workoutDone: WorkoutDoneType): void {
    self.history.push(workoutDone);
  },
});
