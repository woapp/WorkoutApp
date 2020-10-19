import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TrainingType } from '@woap/mobx/training';
import { CheatCodes } from '@woap/pages/CheatCodes/CheatCodes.page';
import { OngoingTraining } from '@woap/pages/Home/OngoingTraining';
import { colors } from '@woap/styles/colors';
import React from 'react';

import { ExerciseNavigator } from './ExerciseNavigator';
import { Routes } from './routes';
import { TabNavigator } from './TabNavigator';
import { TrainingNavigator } from './TrainingNavigator';

export type RootNavigatorParamList = {
  [Routes.TabNavigator]: {
    screen: Routes;
    params?: { screen: Routes };
  };
  [Routes.ExercisesNavigator]: {
    screen: Routes;
    params: {
      // workout: WorkoutType;
    };
  };
  [Routes.OngoingTraining]: { screen: Routes; params: { training: TrainingType } };
  [Routes.TrainingNavigator]: undefined;
  [Routes.ExerciseNavigator]: undefined;
  [Routes.CheatCodes]: undefined;
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
    <Stack.Screen name={Routes.OngoingTraining} component={OngoingTraining} />

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
    <Stack.Screen
      name={Routes.CheatCodes}
      component={CheatCodes}
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
