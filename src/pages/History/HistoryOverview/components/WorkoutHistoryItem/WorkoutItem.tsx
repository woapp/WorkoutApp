import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { TextTitle } from '@woap/components/Texts';
import styled from '@woap/utils/styled-components';
import { Alert } from 'react-native';
interface Props {
  // workout: WorkoutDoneType;
}

export const WorkoutItem: FunctionComponent<Props> = observer(() => {
  const onWorkoutPress = () => Alert.alert('item pressed');

  return (
    <Container onPress={onWorkoutPress}>
      <TextTitle>TODO</TextTitle>
      {/* <Row> */}
      {/* <TextTitle>{workout.name}</TextTitle>
        <TextTitle>
          {workout.date.getDate()}/{workout.date.getMonth() + 1}
        </TextTitle>
      </Row>
      <Exercises>{workout.exercises.length} exercices</Exercises> */}
    </Container>
  );
});

const Container = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.greyScale[20],
  borderBottomWidth: 1,
  flex: 1,
}));
