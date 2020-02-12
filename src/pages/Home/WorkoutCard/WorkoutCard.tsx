import { Card } from 'react-native-paper';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

import { WorkoutType } from '../../../modules/workout';
import styled from '../../../utils/styled-components';
import { MuscleGroupSelectableItem } from '../../../components/MuscleGroupSelectableItem';

interface Props {
  workout: WorkoutType;
  onSelectWorkout: (workout: WorkoutType) => () => void;
}

export const WorkoutCard: FunctionComponent<Props> = ({ workout, onSelectWorkout }) => {
  return (
    <Container key={workout.id}>
      <TouchableOpacity onPress={onSelectWorkout(workout)}>
        <Name>{workout.name}</Name>
        <Exercises>{workout.nbExercises} exercices</Exercises>
        <Row>
          {workout.mainMuscleGroups.map((muscleGroup, index) => (
            <MuscleGroupContainer key={index}>
              <MuscleGroupSelectableItem
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                muscleGroup={muscleGroup}
                isSelected
                disabled
                iconSize={60}
              />
            </MuscleGroupContainer>
          ))}
        </Row>
      </TouchableOpacity>
    </Container>
  );
};

const Name = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 24,
  marginBottom: props.theme.margin.x2,
}));

const Exercises = styled.Text(props => ({
  marginBottom: props.theme.margin.x2,
  fontSize: 18,
}));

const Container = styled(Card)(({ theme }) => ({
  padding: theme.margin.x2,
  margin: theme.margin.x2,
  borderRadius: 7,
}));

const Row = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const MuscleGroupContainer = styled.View(props => ({
  marginRight: props.theme.margin.x2,
  marginBottom: props.theme.margin.x1,
}));
