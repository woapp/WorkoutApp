import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OngoingWorkout } from '@woap/pages/Home/OngoingWorkout';
import { WorkoutType } from '@woap/mobx/workout';
import { colors } from '@woap/styles/colors';

import { Routes } from './routes';
import { TabNavigator } from './TabNavigator';
import { ExerciseNavigator } from './ExerciseNavigator';
import { TrainingNavigator } from './TrainingNavigator';
import { ExercisesNavigator } from './ExercisesNavigator';

export type RootNavigatorParamList = {
  [Routes.TabNavigator]: {
    screen: Routes;
    params?: { screen: Routes };
  };
  [Routes.ExercisesNavigator]: {
    screen: Routes;
    params: {
      workout: WorkoutType;
    };
  };
  [Routes.OngoingWorkout]: undefined;
  [Routes.TrainingNavigator]: undefined;
  [Routes.ExerciseNavigator]: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => (
  <Stack.Navigator
    mode="modal"
    headerMode="none"
    initialRouteName={Routes.TabNavigator}
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background.black,
      },
    }}
  >
    <Stack.Screen
      name={Routes.TabNavigator}
      component={TabNavigator}
      options={{ gestureEnabled: false }}
    />
    <Stack.Screen name={Routes.ExercisesNavigator} component={ExercisesNavigator} />
    <Stack.Screen
      name={Routes.OngoingWorkout}
      component={OngoingWorkout}
      options={{
        title: 'Exercices',
        gestureEnabled: false,
      }}
    />

    <Stack.Screen
      name={Routes.TrainingNavigator}
      component={TrainingNavigator}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name={Routes.ExerciseNavigator}
      component={ExerciseNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export const AppContainer = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
