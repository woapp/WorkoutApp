import React, { FunctionComponent, useState, useRef } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { RootNavigatorParamList } from '@woap/navigation';
import { HeartIcon } from '@woap/components/Icons/HeartIcon';
import { LinearButton } from '@woap/components/LinearButton';
import { Spacer } from '@woap/components/Spacer';
import { ArrowBackwardIcon } from '@woap/components/Icons/ArrowBackwardIcon';
import { theme } from '@woap/styles/theme';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';
import { useTranslation } from 'react-i18next';
import { useStore } from '@woap/utils/hooks/useStore';

import { ExerciseSet } from './components/ExerciseSet';

type OngoingTrainingScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  Routes.OngoingTraining
>;

type OngoingTrainingScreenRouteProp = RouteProp<RootNavigatorParamList, Routes.OngoingTraining>;

interface Props {
  navigation: OngoingTrainingScreenNavigationProp;
  route: OngoingTrainingScreenRouteProp;
}

export const OngoingTraining: FunctionComponent<Props> = observer(({ route, navigation }) => {
  const { t } = useTranslation('home');
  const { finishTraining } = useStore();
  const { training } = route.params.params;
  const listRef = useRef<FlatList<ExerciseSetType>>(null);
  const [currentExerciseSetIndex, setCurrentExerciseSetIndex] = useState<number>(-1);

  const onActionPress = () => {
    setCurrentExerciseSetIndex(prev => prev + 1);
    if (currentExerciseSetIndex >= 0) {
      listRef.current &&
        listRef.current.scrollToIndex({
          index: currentExerciseSetIndex,
          viewPosition: 0.5,
        });
    }
    if (currentExerciseSetIndex === training.exerciseSets.length - 1) {
      navigation.navigate(Routes.TabNavigator, { screen: Routes.HistoryNavigator });
      finishTraining(training);
    }
  };

  const getButtonTitle = () => {
    if (currentExerciseSetIndex < 0) {
      return t('ongoingTrainingPreview.go');
    } else if (currentExerciseSetIndex < training.exerciseSets.length - 1) {
      return t('ongoingTrainingPreview.next');
    } else {
      return t('ongoingTrainingPreview.finish');
    }
  };

  return (
    <Container>
      <Row>
        {/* eslint-disable-next-line @typescript-eslint/unbound-method */}
        <TouchableOpacity onPress={navigation.goBack} hitSlop={theme.hitSlop}>
          <ArrowBackwardIcon />
        </TouchableOpacity>
        <Spacer width={2} />
        <TrainingTitle>{training.name}</TrainingTitle>
        {/* eslint-disable-next-line @typescript-eslint/unbound-method */}
        <TouchableOpacity onPress={training.toggleFavorite}>
          <HeartIcon selected={training.isFavorite} size={27} />
        </TouchableOpacity>
      </Row>
      <Spacer height={2} />

      <SetsContainer
        data={training.exerciseSets.toJS()}
        ListFooterComponent={<Spacer height={4} />}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        ref={listRef}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        renderItem={({ item: exerciseSet, index }: { item: ExerciseSetType; index: number }) => (
          <ExerciseSet
            key={exerciseSet.id}
            exerciseSet={exerciseSet}
            isOngoing={index === currentExerciseSetIndex}
            isDone={index < currentExerciseSetIndex}
            index={index}
            currentIndex={currentExerciseSetIndex}
          />
        )}
      />

      <LinearButton onPress={onActionPress} title={getButtonTitle()} />
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
  backgroundColor: theme.colors.background.black,
  padding: theme.margin.x2,
});

const Row = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const TrainingTitle = styled.Text({
  ...theme.fonts.h1,
  color: theme.colors.white,
  fontWeight: 'bold',
  flex: 1,
});

const SetsContainer = styled(FlatList)({
  padding: theme.margin.x2,
});
