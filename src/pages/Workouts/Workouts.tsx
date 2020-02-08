import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';
import { Routes } from '../..//navigation/routes';
import { MuscleGroup } from '../../modules/types';
import { WorkoutItem } from '../../components/WorkoutItem';

export const Workouts: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  const DATA = [
    { name: 'My awesome workout', muscleGroups: [MuscleGroup.Biceps], id: 123, exercises: [] },
    {
      name: 'Leg Day',
      muscleGroups: [MuscleGroup.Legs, MuscleGroup.Calves],
      id: 124,
      exercises: [],
    },
  ];

  return (
    <Container>
      <FlatList data={DATA} renderItem={({ item }) => <WorkoutItem {...item} />} />
      <RoundButtonContainer>
        <RoundButton
          onPress={() => {
            console.log(navigation);
            navigation.navigate(Routes.WorkoutEditor);
          }}
        />
      </RoundButtonContainer>
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const RoundButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
