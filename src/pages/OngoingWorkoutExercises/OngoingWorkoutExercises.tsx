import React, { FunctionComponent, useRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationActions, StackActions } from 'react-navigation';

import { Routes } from '../../navigation/routes';
import styled from '../../utils/styled-components';
import { ExerciseSetsType } from '../../modules/exerciseSets';
import { useStore } from '../../utils/hooks/useStore';
import { SetsEditor } from '../../components/SetsEditor';
import { ActionButton } from '../../components/ActionButton';

export const OngoingWorkoutExercises: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const listRef = useRef<FlatList<ExerciseSetsType>>(null);
    const { ongoingWorkout, finishWorkout } = useStore();

    const onNextWorkout = (index: number) => () =>
      listRef.current && listRef.current.scrollToIndex({ index: index + 1 });

    const onFinishWorkout = () => {
      ongoingWorkout && finishWorkout(ongoingWorkout);
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: Routes.TabNavigator,
              action: NavigationActions.navigate({ routeName: Routes.History }),
            }),
          ],
        })
      );
    };

    const renderWorkoutExercise = ({ item, index }: { item: ExerciseSetsType; index: number }) => {
      const isLastExercise =
        index === (ongoingWorkout && ongoingWorkout.exercises.length - 1) ? true : false;

      return (
        <WorkoutExercise>
          <Name>{item.exercise.name}</Name>
          <SetsEditor exerciseSets={item} />
          <ActionButton
            title={isLastExercise ? 'Finish!' : 'Suivant'}
            onPress={isLastExercise ? onFinishWorkout : onNextWorkout(index)}
          />
        </WorkoutExercise>
      );
    };

    return (
      <View>
        {ongoingWorkout && (
          <FlatList
            ref={listRef}
            keyExtractor={(exerciseSets: ExerciseSetsType) => exerciseSets.id}
            data={ongoingWorkout.exercises}
            renderItem={renderWorkoutExercise}
          />
        )}
      </View>
    );
  }
);

const WorkoutExercise = styled.View({
  flex: 1,
  height: Dimensions.get('window').height,
});

const Name = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 24,
  margin: props.theme.margin.x2,
}));
