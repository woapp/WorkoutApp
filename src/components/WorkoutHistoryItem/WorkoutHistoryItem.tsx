import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';
import { WorkoutDoneType } from '../../modules/workoutDone';

interface Props {
  workout: WorkoutDoneType;
}

export const WorkoutHistoryItem: FunctionComponent<Props> = ({ workout }) => {
  return (
    <Container>
      <Row>
        <Name>{workout.name}</Name>
        <Name>
          {workout.date.getDate()}/{workout.date.getMonth() + 1}
        </Name>
      </Row>
      <Exercises>{workout.exercises.length} exercices</Exercises>
    </Container>
  );
};

const Container = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.lightGrey,
  borderBottomWidth: 1,
  flex: 1,
}));

const Row = styled.View({
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
});

const Name = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});

const Exercises = styled.Text({
  fontSize: 18,
});
