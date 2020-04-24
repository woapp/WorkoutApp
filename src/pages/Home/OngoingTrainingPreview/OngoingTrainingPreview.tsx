import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { CompositeNavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { RootNavigatorParamList } from '@woap/navigation';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import { HeartIcon } from '@woap/components/Icons/HeartIcon';
import { LinearButton } from '@woap/components/LinearButton';
import { Spacer } from '@woap/components/Spacer';
import { ArrowBackwardIcon } from '@woap/components/Icons/ArrowBackwardIcon';
import { theme } from '@woap/styles/theme';

import { ExerciseSet } from './components/ExerciseSet';

type OngoingTrainingPreviewScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TabNavigator>,
  CompositeNavigationProp<
    MaterialTopTabNavigationProp<TabNavigatorParamList, Routes.ProfileNavigator>,
    StackNavigationProp<HomeNavigatorParamList, Routes.OngoingTrainingPreview>
  >
>;

type OngoingTrainingPreviewScreenRouteProp = RouteProp<
  HomeNavigatorParamList,
  Routes.OngoingTrainingPreview
>;

interface Props {
  navigation: OngoingTrainingPreviewScreenNavigationProp;
  route: OngoingTrainingPreviewScreenRouteProp;
}

export const OngoingTrainingPreview: FunctionComponent<Props> = observer(({ route }) => {
  const { training } = route.params;
  const navigation = useNavigation();

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
          <HeartIcon selected={training.isFavorite} size={35} />
        </TouchableOpacity>
      </Row>
      <Spacer height={2} />
      <SetsContainer>
        {training.exerciseSets.map((exerciseSet, index) => (
          <ExerciseSet
            isFirst={index === 0}
            isLast={index === training.exerciseSets.length - 1}
            key={exerciseSet.id}
            exerciseSet={exerciseSet}
          />
        ))}
        <Spacer height={10} />
      </SetsContainer>
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <LinearButton onPress={() => {}} title="GO" />
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

const SetsContainer = styled.ScrollView({ padding: theme.margin.x2 });
