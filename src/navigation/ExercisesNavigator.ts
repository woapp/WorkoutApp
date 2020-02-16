import { createStackNavigator } from 'react-navigation-stack';
import { ExercisesChoice } from '@woap/pages/Configurator/ExercisesChoice';
import { NewExercise } from '@woap/pages/Configurator/NewExercise';
import { colors } from '@woap/styles/colors';

import { Routes } from './routes';

export const ExercisesNavigator = createStackNavigator(
  {
    [Routes.ExercisesChoice]: {
      screen: ExercisesChoice,
      navigationOptions: { title: 'Exercices' },
    },
    [Routes.NewExercise]: {
      screen: NewExercise,
      navigationOptions: { title: 'Nouvel exercice' },
    },
  },
  {
    initialRouteName: Routes.ExercisesChoice,
    defaultNavigationOptions: {
      headerTitleStyle: { color: colors.white },
      headerStyle: { backgroundColor: colors.black },
    },
  }
);
