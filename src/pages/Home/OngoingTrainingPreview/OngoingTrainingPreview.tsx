import React, { FunctionComponent } from 'react';
import { TextTitle } from '@woap/components/Texts';
import styled from '@woap/utils/styled-components';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { Routes } from '@woap/navigation/routes';
import { RootNavigatorParamList } from '@woap/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { observer } from 'mobx-react-lite';

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
      <TextTitle>{training.name}</TextTitle>
      <PrimaryButton
        title={training.isFavorite ? 'Delete from favorite' : 'Add to favorite'}
        // eslint-disable-next-line @typescript-eslint/unbound-method
        onPress={training.toggleFavorite}
      />
    </Container>
  );
});

const Container = styled.View(() => ({
  flex: 1,
}));
