import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { Routes } from '@woap/navigation/routes';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import styled from '@woap/utils/styled-components';
import { AnimatedMenu } from '@woap/pages/Home/Dashboard/components/AnimatedMenu';
import { RootNavigatorParamList } from '@woap/navigation';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { WhistleIcon } from '@woap/components/Icons/WhistleIcon';
import { DumbbellIcon } from '@woap/components/Icons/DumbbellIcon';
import { useTranslation } from 'react-i18next';
import { useStore } from '@woap/utils/hooks/useStore';
import { TextBody } from '@woap/components/Texts';
import { ArrowForwardIcon } from '@woap/components/Icons/ArrowForwardIcon';
import { Spacer } from '@woap/components/Spacer';

import { NoTraining } from './components/NoTraining';

type DashboardScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TabNavigator>,
  CompositeNavigationProp<
    MaterialTopTabNavigationProp<TabNavigatorParamList, Routes.ProfileNavigator>,
    StackNavigationProp<HomeNavigatorParamList, Routes.Dashboard>
  >
>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

export const Dashboard: FunctionComponent<Props> = observer(({ navigation }) => {
  const { initializeNewFreeWorkout, trainings } = useStore();
  const { t } = useTranslation('home');

  const goToTrainingNavigator = () => {
    initializeNewFreeWorkout();
    navigation.navigate(Routes.TrainingNavigator);
  };

  const goToExerciceNavigator = () => navigation.navigate(Routes.ExerciseNavigator);

  return (
    <Container>
      {trainings.length === 0 ? (
        <NoTraining />
      ) : (
        <>
          <AllTrainings>ALL TRAININGS</AllTrainings>
          <Spacer height={2} />
          {trainings.map(training => (
            <TrainingContainer key={training.id}>
              <TrainingName>{training.name}</TrainingName>
              <ArrowForwardIcon />
            </TrainingContainer>
          ))}
        </>
      )}

      <MenuContainer>
        <AnimatedMenu
          items={[
            {
              title: t('dashboard.newTraining'),
              Icon: WhistleIcon,
              onPress: goToTrainingNavigator,
            },
            {
              title: t('dashboard.newExercise'),
              Icon: DumbbellIcon,
              onPress: goToExerciceNavigator,
            },
          ]}
        />
      </MenuContainer>
    </Container>
  );
});

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background.black,
  padding: theme.margin.x2,
}));

const MenuContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.margin.x2,
  right: theme.margin.x2,
}));

const AllTrainings = styled(TextBody)(({ theme }) => ({
  color: theme.colors.white,
}));

const TrainingName = styled.Text(({ theme }) => ({
  color: theme.colors.white,
  fontSize: 16,
}));

const TrainingContainer = styled.View(({ theme }) => ({
  backgroundColor: '#3D3D55',
  padding: theme.margin.x2,
  borderRadius: theme.border.radius.s + 2,
  marginBottom: theme.margin.x2,
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
