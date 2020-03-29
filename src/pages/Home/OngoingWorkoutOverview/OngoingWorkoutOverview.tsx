import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import styled from '@woap/utils/styled-components';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';
import { WorkoutOverview } from '@woap/components/WorkoutOverview';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { RootNavigatorParamList } from '@woap/navigation';

type OngoingWorkoutOverviewScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TabNavigator>,
  CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamList, Routes.HomeNavigator>,
    StackNavigationProp<HomeNavigatorParamList, Routes.OngoingWorkoutOverview>
  >
>;

type Props = {
  navigation: OngoingWorkoutOverviewScreenNavigationProp;
};

export const OngoingWorkoutOverview: FunctionComponent<Props> = observer(({ navigation }) => {
  const { ongoingWorkout } = useStore();

  const onStartWorkout = () => navigation.navigate(Routes.OngoingWorkout);

  return (
    <Container>
      {ongoingWorkout && (
        <>
          <WorkoutOverview workout={ongoingWorkout} />

          <ButtonContainer>
            <PrimaryButton onPress={onStartWorkout} title="Démarrer" />
          </ButtonContainer>
        </>
      )}
    </Container>
  );
});

const Container = styled.View(props => ({
  padding: props.theme.margin.x2,
  flex: 1,
  backgroundColor: props.theme.colors.greyScale[90],
}));

const ButtonContainer = styled.View(props => ({
  justifyContent: 'flex-end',
  marginBottom: props.theme.margin.x2,
}));
