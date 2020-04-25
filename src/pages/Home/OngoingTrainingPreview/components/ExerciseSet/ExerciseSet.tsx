import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';
import styled from '@woap/utils/styled-components';
import { MuscleGroupIcon } from '@woap/components/Icons/MuscleGroupIcon';
import { useTimingTransition, bInterpolate } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import { Spacer } from '@woap/components/Spacer';

type ExerciseItemProps = {
  isOngoing: boolean;
  isDone: boolean;
  exerciseSet: ExerciseSetType;
  index: number;
  currentIndex: number;
};

export const ExerciseSet: FunctionComponent<ExerciseItemProps> = observer(
  ({ exerciseSet, index, currentIndex }) => {
    const isOngoing = index === currentIndex;
    const scaleTo = 1.3;
    const scaleFrom = 1;
    const translateTo = 45;
    const translateFrom = 0;

    const transition = useTimingTransition(isOngoing, { duration: 300 });
    const scale = bInterpolate(transition, scaleFrom, scaleTo);
    const translateX = bInterpolate(transition, translateFrom, translateTo);

    return (
      <>
        {isOngoing && <Spacer height={2} />}
        <Container style={{ transform: [{ scale, translateX }] }}>
          <IconContainer isOngoing={isOngoing} isDone={index < currentIndex}>
            <MuscleGroupIcon
              muscleGroup={exerciseSet.exercise.mainMuscleGroup}
              width={40}
              height={40}
            />
          </IconContainer>

          <Title isDone={index < currentIndex}>{exerciseSet.exercise.name}</Title>
        </Container>
        {isOngoing && <Spacer height={2} />}
      </>
    );
  }
);

const Container = styled(Animated.View)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginVertical: theme.margin.x1,
}));

const IconContainer = styled.View<{ isOngoing: boolean; isDone: boolean }>(
  ({ theme, isOngoing, isDone }) => {
    let borderColor = theme.colors.greyScale[80];
    if (isOngoing) {
      borderColor = theme.colors.green;
    } else if (isDone) {
      borderColor = theme.colors.green;
    }

    return {
      borderColor,
      borderWidth: 2,
      backgroundColor: theme.colors.greyScale[80],
      borderRadius: 10,
      marginRight: theme.margin.x2,
    };
  }
);

const Title = styled.Text<{ isDone: boolean }>(({ theme, isDone }) => ({
  fontSize: 18,
  color: isDone ? theme.colors.green : theme.colors.white,
  fontWeight: 'bold',
}));
