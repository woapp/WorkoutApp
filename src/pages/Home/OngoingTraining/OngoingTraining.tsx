import React, { FunctionComponent, useState, useRef } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { RootNavigatorParamList } from '@woap/navigation';
import { HeartIcon } from '@woap/components/Icons/HeartIcon';
import { LinearButton } from '@woap/components/LinearButton';
import { Spacer } from '@woap/components/Spacer';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';
import { useTranslation } from 'react-i18next';
import { useStore } from '@woap/utils/hooks/useStore';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';

import { ExerciseSet } from './components/ExerciseSet';
import { TrainingCompleteAnimation } from './components/TrainingCompleteAnimation';

type OngoingTrainingScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  Routes.OngoingTraining
>;

type OngoingTrainingScreenRouteProp = RouteProp<RootNavigatorParamList, Routes.OngoingTraining>;

interface Props {
  navigation: OngoingTrainingScreenNavigationProp;
  route: OngoingTrainingScreenRouteProp;
}

const CROSS_BUTTON_SIZE = 35;

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
      setTimeout(
        () => navigation.navigate(Routes.TabNavigator, { screen: Routes.HistoryNavigator }),
        2700
      );
      finishTraining(training);
    }
  };

  const getButtonTitle = () => {
    if (currentExerciseSetIndex < 0) {
      return t('ongoingTraining.go');
    } else if (currentExerciseSetIndex < training.exerciseSets.length - 1) {
      return t('ongoingTraining.next');
    } else {
      return t('ongoingTraining.finish');
    }
  };

  const renderSet = ({ item: exerciseSet, index }: { item: ExerciseSetType; index: number }) => (
    <ExerciseSet
      key={exerciseSet.id}
      exerciseSet={exerciseSet}
      isOngoing={index === currentExerciseSetIndex}
      isDone={index < currentExerciseSetIndex}
      index={index}
      currentIndex={currentExerciseSetIndex}
    />
  );

  return (
    <SafeAreaWapper>
      <Container>
        <CrossButtonRow>
          {/* eslint-disable-next-line @typescript-eslint/unbound-method */}
          <IconButton onPress={navigation.goBack}>
            <CrossIcon height={CROSS_BUTTON_SIZE} width={CROSS_BUTTON_SIZE} />
          </IconButton>
        </CrossButtonRow>
        <Row>
          <Spacer width={1} />
          <TrainingTitle>{training.name}</TrainingTitle>
          {/* eslint-disable-next-line @typescript-eslint/unbound-method */}
          <IconButton onPress={training.toggleFavorite}>
            <HeartIcon selected={training.isFavorite} size={27} />
          </IconButton>
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
          renderItem={renderSet}
        />

        <LinearButton onPress={onActionPress} title={getButtonTitle()} />
      </Container>

      {currentExerciseSetIndex === training.exerciseSets.length && <TrainingCompleteAnimation />}
    </SafeAreaWapper>
  );
});

const CrossButtonRow = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  paddingRight: theme.margin.x1,
  paddingBottom: theme.margin.x2,
}));

const SafeAreaWapper = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background.black,
}));

const Container = styled.View(({ theme }) => ({
  padding: theme.margin.x2,
  flex: 1,
}));

const IconButton = styled.TouchableOpacity.attrs(({ theme }) => ({
  hitSlop: theme.hitSlop,
}))({});

const Row = styled.View({
  flexDirection: 'row',
});

const TrainingTitle = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  color: theme.colors.white,
  fontWeight: 'bold',
  paddingRight: theme.margin.x2,
}));

const SetsContainer = styled(FlatList)(({ theme }) => ({
  padding: theme.margin.x2,
}));
