import { createStackNavigator } from 'react-navigation-stack';

import { OngoingWorkoutExercises } from '../pages/OngoingWorkoutExercises';
import { OngoingWorkout } from '../pages/OngoingWorkout';
import { Home } from '../pages/Home';

import { Routes } from './routes';

export const HomeNavigator = createStackNavigator({
  [Routes.Home]: {
    screen: Home,
    navigationOptions: {
      title: 'Accueil',
    },
  },
  [Routes.OngoingWorkout]: {
    screen: OngoingWorkout,
    navigationOptions: {
      title: "Let's go!",
    },
  },
  [Routes.OngoingWorkoutExercises]: {
    screen: OngoingWorkoutExercises,
    navigationOptions: {
      title: 'Exercices',
    },
  },
});
