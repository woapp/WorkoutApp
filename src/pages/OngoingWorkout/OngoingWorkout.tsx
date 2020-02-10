import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { Routes } from '../../navigation/routes';
import { ActionButton } from '../../components/ActionButton';
import styled from '../../utils/styled-components';
import { useStore } from '../../utils/hooks/useStore';

export const OngoingWorkout: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const { ongoingWorkout } = useStore();

    const onStartWorkout = () => navigation.navigate(Routes.OngoingWorkoutExercises);

    return (
      <View>
        {ongoingWorkout && (
          <View>
            <Name>{ongoingWorkout.name}</Name>
            <Text>EXERCICES</Text>
            {ongoingWorkout.exercises.map(exerciseSet => (
              <Text key={exerciseSet.id}>{exerciseSet.exercise.name}</Text>
            ))}
            <ActionButton onPress={onStartWorkout} title="Démarrer" />
          </View>
        )}
      </View>
    );
  }
);

const Name = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 24,
  marginBottom: props.theme.margin.x2,
}));
