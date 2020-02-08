import { ModelInstanceTypeProps } from 'mobx-state-tree';

import { generateId } from '../utils/services/generateId';

import { RootModel } from './rootModel';
import { ExerciseType } from './exercise';
import { WorkoutType } from './workout';
import { WorkoutDone } from './workoutDone';

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
  finishWorkout(workout: WorkoutType): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const workoutObject = workout.toJSON();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...workoutData } = workoutObject;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const finishedWorkout = WorkoutDone.create({
      ...workoutData,
      date: Date.now(),
      id: generateId(),
    });
    self.history.push(finishedWorkout);
  },
});
