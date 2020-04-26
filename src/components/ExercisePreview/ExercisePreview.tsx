import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { ExerciseType } from '@woap/mobx/exercise';

interface Props {
  exercise: ExerciseType;
}

export const ExercisePreview: FunctionComponent<Props> = () => {
  return (
    <View>
      <Text>ExercisePreview</Text>
    </View>
  );
};
