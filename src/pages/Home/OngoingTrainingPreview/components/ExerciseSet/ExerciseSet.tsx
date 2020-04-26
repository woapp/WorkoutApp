import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';
import styled from '@woap/utils/styled-components';
import { MuscleGroupIcon } from '@woap/components/Icons/MuscleGroupIcon';
import { useTimingTransition, bInterpolate, useSpringTransition } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import { Spacer } from '@woap/components/Spacer';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

type ExerciseItemProps = {
  isOngoing: boolean;
  isDone: boolean;
  exerciseSet: ExerciseSetType;
  index: number;
  currentIndex: number;
};

export const ExerciseSet: FunctionComponent<ExerciseItemProps> = observer(
  ({ exerciseSet, index, currentIndex }) => {
    const { t } = useTranslation('common');
    const isOngoing = index === currentIndex;
    const isDone = index < currentIndex;

    // Animate Exercise container to make it bigger
    const isOngoingTransition = useSpringTransition(isOngoing, {
      damping: 0.88,
      overshootClamping: 0.9,
      restSpeedThreshold: 0.7,
    });
    const isOngoingScale = bInterpolate(isOngoingTransition, 1, 1.3);
    const isOngoingTranslateX = bInterpolate(isOngoingTransition, 0, 45);

    // Animate exercise information to make it fade out when exercise set is done
    const isDoneTransition = useTimingTransition(isDone, { duration: 300 });
    const isDoneOpacity = bInterpolate(isDoneTransition, 1, 0);
    const isDoneTranslateY = bInterpolate(isDoneTransition, 0, 8);

    return (
      <>
        {isOngoing && <Spacer height={2} />}
        <Container
          style={{ transform: [{ scale: isOngoingScale, translateX: isOngoingTranslateX }] }}
        >
          <IconContainer isOngoing={isOngoing} isDone={isDone}>
            <MuscleGroupIcon
              muscleGroup={exerciseSet.exercise.mainMuscleGroup}
              width={40}
              height={40}
            />
          </IconContainer>
          <View>
            <Title style={{ transform: [{ translateY: isDoneTranslateY }] }} isDone={isDone}>
              {exerciseSet.exercise.name}
            </Title>
            <ExerciseSetInformation style={{ opacity: isDoneOpacity }}>
              {exerciseSet.reps} {t('reps')} / {exerciseSet.weight} {t('kg')}
            </ExerciseSetInformation>
          </View>
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

const Title = styled(Animated.Text)<{ isDone: boolean }>(({ theme, isDone }) => ({
  fontSize: 18,
  opacity: isDone ? 0.7 : 1,
  color: isDone ? theme.colors.green : theme.colors.white,
  fontWeight: 'bold',
}));

const ExerciseSetInformation = styled(Animated.Text)(({ theme }) => ({
  color: 'white',
  fontSize: 14,
  marginTop: theme.margin.d2,
}));
