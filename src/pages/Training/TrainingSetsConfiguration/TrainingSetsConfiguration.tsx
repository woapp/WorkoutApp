import React, { FunctionComponent, useState } from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from '@woap/utils/styled-components';
import { theme } from '@woap/styles/theme';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { Routes } from '@woap/navigation/routes';
import { Background } from '@woap/components/Background';

import { Header } from '../components/Header';

import { SetListItem } from './components/SetListItem';

type TrainingSetsConfigurationScreenNavigationProp = StackNavigationProp<
  TrainingNavigatorParamList,
  Routes.TrainingSetsConfiguration
>;

type Props = {
  navigation: TrainingSetsConfigurationScreenNavigationProp;
};

const SETS = [
  { title: 'CRUNCH', weight: 25, reps: 10, id: '1', selected: false },
  { title: 'SQUAT', weight: 25, reps: 10, id: '2', selected: false },
  { title: 'BENCH', weight: 25, reps: 10, id: '3', selected: false },
];

export const TrainingSetsConfiguration: FunctionComponent<Props> = ({ navigation }) => {
  const goToTrainingPageScreen = () => navigation.navigate(Routes.TrainingName);
  const [sets, setSets] = useState(SETS);
  const onReorderSets = ({ data }) => {
    setSets(data);
  };
  const renderExercise = ({ item, drag }) => (
    <SetListItem
      onDrag={drag}
      set={item}
      onPress={() => {
        console.log('ON PRESS');
        setSets(prevSets =>
          prevSets.map(set => ({ ...set, selected: item.id === set.id ? !set.selected : false }))
        );
      }}
    />
  );

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <Header title="Training" />
        </HeaderContainer>
        <DraggableFlatList
          data={sets}
          renderItem={renderExercise}
          keyExtractor={item => item.id}
          onDragEnd={onReorderSets}
          contentContainerStyle={{
            paddingTop: theme.margin.x2,
            paddingHorizontal: theme.margin.x2,
            paddingBottom: 250,
          }} // TODO: remove and find find a way for scrollview to be aware of keyboard
        />
      </Container>
      <FinalizeButton onPress={goToTrainingPageScreen}>
        <FinalizeTitle>Finalize</FinalizeTitle>
      </FinalizeButton>
    </Background>
  );
};

const Container = styled.SafeAreaView({
  marginVertical: theme.margin.x2,
  flex: 1,
});

const HeaderContainer = styled.View({
  paddingHorizontal: theme.margin.x2,
});

const FinalizeButton = styled.TouchableOpacity({
  paddingTop: theme.margin.x2,
  paddingBottom: getBottomSpace() + theme.margin.x2,
  backgroundColor: theme.colors.black,
});

const FinalizeTitle = styled.Text({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
  textAlign: 'center',
});
