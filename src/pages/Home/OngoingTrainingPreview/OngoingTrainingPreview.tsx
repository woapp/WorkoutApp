import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { RootNavigatorParamList } from '@woap/navigation';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import { HeartIcon } from '@woap/components/Icons/HeartIcon';

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

  return (
    <Container>
      <Row>
        <TrainingTitle>{training.name}</TrainingTitle>
        {/* eslint-disable-next-line @typescript-eslint/unbound-method */}
        <TouchableOpacity onPress={training.toggleFavorite}>
          <HeartIcon selected={training.isFavorite} size={35} />
        </TouchableOpacity>
      </Row>
    </Container>
  );
});

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background.black,
}));

const Row = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  margin: theme.margin.x2,
}));

const TrainingTitle = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  color: theme.colors.white,
  fontWeight: 'bold',
  flex: 1,
}));
