import { ModelInstanceTypeProps, detach } from 'mobx-state-tree';
import { generateId } from '@woap/utils/services/generateId';

import { RootModel } from './rootModel';
import { ExerciseType } from './exercise';
import { WorkoutType } from './workout';
import { WorkoutDone } from './workoutDone';
import { UserType } from './user';

export const rootActions = (self: ModelInstanceTypeProps<typeof RootModel>) => ({
  addExercise(exercise: ExerciseType): void {
    self.exercises.push(exercise);
  },
  removeExercise(exercise: ExerciseType): void {
    for (const workout of self.workouts) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      self.exercises = self.exercises.filter(exerciseSet => exerciseSet.exercise !== exercise);
      for (const exerciseSet of workout.exercises) {
        exerciseSet.exercise;
      }
    }
    const exerciseDetached = detach(exercise);
    self.archivedExercises.push(exerciseDetached);
  },
  addWorkout(workout: WorkoutType): void {
    self.workouts.push(workout);
  },
  removeWorkout(workout: WorkoutType): void {
    self.workouts.remove(workout);
  },
  setOngoingWorkout(workout: WorkoutType): void {
    self.ongoingWorkout = workout;
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
    self.ongoingWorkout = undefined;
  },
  login(user: UserType): void {
    self.user = user;
  },
});
