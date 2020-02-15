import { View, Text } from 'react-native';
import React, { FunctionComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';

export const HistoryDetails: FunctionComponent<NavigationStackScreenProps> = ({ navigation }) => {
  const workout = navigation.getParam('workout');

  return (
    <View>
      <Text>{workout.name}</Text>
    </View>
  );
};
