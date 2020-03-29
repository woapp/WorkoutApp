import React, { FunctionComponent, useState } from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
import PaginationDot from 'react-native-animated-pagination-dot';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextTitle } from '@woap/components/Texts';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { FormSets } from '@woap/components/FormSets';
import styled from '@woap/utils/styled-components';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';
import { ExerciseSetsType } from '@woap/mobx/exerciseSets';
import { colors } from '@woap/styles/colors';
import { RootNavigatorParamList } from '@woap/navigation';

type OngoingWorkoutScreenNavigationProp = StackNavigationProp<
  RootNavigatorParamList,
  Routes.OngoingWorkout
>;

type Props = {
  navigation: OngoingWorkoutScreenNavigationProp;
};

export const OngoingWorkout: FunctionComponent<Props> = observer(({ navigation }) => {
  const { ongoingWorkout, finishWorkout } = useStore();
  const [activeExerciseIndex, setActiveExercicseIndex] = useState(0);

  const onFinishWorkout = () => {
    ongoingWorkout && finishWorkout(ongoingWorkout);
    navigation.replace(Routes.TabNavigator, {
      screen: Routes.HistoryNavigator,
      params: { screen: Routes.HistoryOverview },
    });
  };

  const renderWorkoutExercise = ({ item }: { item: ExerciseSetsType }) => {
    return (
      <WorkoutExercise>
        <Name>{item.exercise.name}</Name>
        {/* TODO: remove padding and find a way to handle keyboard */}
        <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
          <FormSets exerciseSets={item} />
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
        activeDotColor={colors.blue}
        curPage={activeExerciseIndex}
        maxPage={ongoingWorkout.exercises.length}
      />
      <ButtonContainer>
        <PrimaryButton title={"Terminer l'entrainement"} onPress={onFinishWorkout} />
      </ButtonContainer>
    </Container>
  );
});

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
