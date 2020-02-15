import React, { FunctionComponent, useState } from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationActions, StackActions } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import PaginationDot from 'react-native-animated-pagination-dot';

import { TextTitle } from '../../../components/Texts';
import { Routes } from '../../../navigation/routes';
import styled from '../../../utils/styled-components';
import { ExerciseSetsType } from '../../../modules/exerciseSets';
import { useStore } from '../../../utils/hooks/useStore';
import { SetsEditor } from '../../../components/SetsEditor';
import { colors } from '../../../styles/colors';
import { Button } from '../../../components/Button';

export const OngoingWorkout: FunctionComponent<NavigationStackScreenProps> = observer(
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
          {/* TODO: remove padding and find a way to handle keyboard */}
          <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
            <SetsEditor exerciseSets={item} />
          </ScrollView>
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
          activeDotColor={colors.cyan}
          curPage={activeExerciseIndex}
          maxPage={ongoingWorkout.exercises.length}
        />
        <ButtonContainer>
          <Button title={`Terminer l'entrainement`} onPress={onFinishWorkout} />
        </ButtonContainer>
      </Container>
    );
  }
);

const Container = styled.SafeAreaView(props => ({
  alignItems: 'center',
  flex: 1,
  backgroundColor: props.theme.colors.greyScale[90],
}));

const WorkoutExercise = styled.View({
  flex: 1,
});

const Name = styled(TextTitle)(props => ({
  margin: props.theme.margin.x2,
  color: props.theme.colors.white,
}));

const ButtonContainer = styled.View(props => ({
  width: '100%',
  paddingVertical: props.theme.margin.x2,
  paddingHorizontal: props.theme.margin.x4,
}));
