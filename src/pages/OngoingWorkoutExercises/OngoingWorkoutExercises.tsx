import React, { FunctionComponent, useState } from 'react';
import { Dimensions, SafeAreaView, View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationActions, StackActions } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import PaginationDot from 'react-native-animated-pagination-dot';

import { Routes } from '../../navigation/routes';
import styled from '../../utils/styled-components';
import { ExerciseSetsType } from '../../modules/exerciseSets';
import { useStore } from '../../utils/hooks/useStore';
import { SetsEditor } from '../../components/SetsEditor';
import { ActionButton } from '../../components/ActionButton';
import { colors } from '../../styles/colors';

export const OngoingWorkoutExercises: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const { ongoingWorkout, finishWorkout } = useStore();
    const [activeExerciseIndex, setActiveExercicseIndex] = useState(0);

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

    const renderWorkoutExercise = ({ item }: { item: ExerciseSetsType }) => {
      return (
        <WorkoutExercise>
          <Name>{item.exercise.name}</Name>
          <SetsEditor exerciseSets={item} />
        </WorkoutExercise>
      );
    };

    if (!ongoingWorkout) return <View />;

    return (
      <Container>
        <Carousel
          containerCustomStyle={{ flex: 1 }}
          slideStyle={{ flex: 1 }}
          data={ongoingWorkout.exercises.toJS()}
          renderItem={renderWorkoutExercise}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width * 0.95}
          onSnapToItem={index => {
            setActiveExercicseIndex(index);
          }}
        />
        <PaginationDot
          activeDotColor={colors.blue}
          curPage={activeExerciseIndex}
          maxPage={ongoingWorkout.exercises.length}
        />
        <ButtonContainer>
          <ActionButton title={'Finish!'} onPress={onFinishWorkout} />
        </ButtonContainer>
      </Container>
    );
  }
);

const Container = styled.SafeAreaView({
  alignItems: 'center',
  flex: 1,
});

const WorkoutExercise = styled.View({
  flex: 1,
});

const Name = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 24,
  margin: props.theme.margin.x2,
}));

const ButtonContainer = styled.View(props => ({
  paddingVertical: props.theme.margin.x2,
}));
