import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';
import { WorkoutType } from '@woap/mobx/workout';
import firestore from '@react-native-firebase/firestore';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import styled from '@woap/utils/styled-components';

import { WorkoutCard } from './components/WorkoutCard/WorkoutCard';

export const Dashboard: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const { workouts, setOngoingWorkout, user, exercises, history } = useStore();

    const onSaveData = async () => {
      if (user) {
        try {
          const docRef = firestore().doc(`users/${user.id}`);
          await firestore().runTransaction(transaction =>
            transaction.set(docRef, { workouts, exercises, history })
          );
        } catch (err) {
          console.log('err', err);
        }
      }
    };

    const onSelectWorkout = (workout: WorkoutType) => () => {
      setOngoingWorkout(workout);
      navigation.navigate(Routes.OngoingWorkoutOverview);
    };

    const renderWorkoutCard = ({ item: workout }: { item: WorkoutType }) => (
      <WorkoutCard key={workout.id} onSelectWorkout={onSelectWorkout} workout={workout} />
    );

    return (
      <Container>
        <FlatList
          data={workouts.toJS()}
          renderItem={renderWorkoutCard}
          keyExtractor={item => item.id}
        />
        <PrimaryButton title="Sauvegarder mes données" onPress={onSaveData} />
      </Container>
    );
  }
);

const Container = styled.View(({ theme }) => ({
  padding: theme.margin.x1,
}));
