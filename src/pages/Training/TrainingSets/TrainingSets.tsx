import React, { FunctionComponent, useState, useEffect } from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from '@woap/utils/styled-components';
import { theme } from '@woap/styles/theme';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { Routes } from '@woap/navigation/routes';
import { Background } from '@woap/components/Background';
import { Header } from '@woap/components/Header';
import { useStore } from '@woap/utils/hooks/useStore';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';
import { PlusIcon } from '@woap/components/Icons/PlusIcon';
import { FinalButton } from '@woap/components/FinalButton';
import { EditExerciseSetModal } from '@woap/components/EditExerciseModal';

import { SetListItem } from './components/SetListItem';

type TrainingSetsScreenNavigationProp = StackNavigationProp<
  TrainingNavigatorParamList,
  Routes.TrainingSets
>;

type Props = {
  navigation: TrainingSetsScreenNavigationProp;
};

export const TrainingSets: FunctionComponent<Props> = observer(({ navigation }) => {
  const { newFreeWorkout } = useStore();
  const { t } = useTranslation('trainingCreation');

  const [selectedSet, setSelectedSet] = useState<ExerciseSetType | null>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const exerciseSets = newFreeWorkout ? newFreeWorkout.exerciseSets : null;
    if (exerciseSets && exerciseSets.length > 0) {
      const lastExerciseSet = exerciseSets[exerciseSets.length - 1];
      setSelectedSet(lastExerciseSet);
    }
  }, [newFreeWorkout]);

  if (!newFreeWorkout) return null;

  const goToTrainingPageScreen = () => navigation.navigate(Routes.TrainingName);
  const onReorderSets = ({ data }) => {
    newFreeWorkout.replaceExerciseSets(data);
  };
  const renderExercise = ({ item, drag }) => (
    <SetListItem
      onDrag={drag}
      set={item}
      selected={!!selectedSet && selectedSet.id === item.id}
      onPress={() => {
        setSelectedSet(previousSelectedSet =>
          previousSelectedSet && previousSelectedSet.id === item.id ? null : item
        );
      }}
      onRemove={() => {
        setSelectedSet(null);
        newFreeWorkout.removeExerciseSet(item);
      }}
      onDuplicate={() => {
        newFreeWorkout.duplicateExerciseSet(item);
      }}
      onUpdate={() => {
        setIsModalVisible(true);
      }}
    />
  );

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <Header title={t('trainingSets.title')} />
        </HeaderContainer>
        <DraggableFlatList
          showsVerticalScrollIndicator={false}
          data={newFreeWorkout.exerciseSets.toJS()}
          renderItem={renderExercise}
          keyExtractor={item => item.id}
          onDragEnd={onReorderSets}
          contentContainerStyle={{
            paddingTop: theme.margin.x2,
            paddingBottom: 250,
          }} // TODO: remove and find find a way for scrollview to be aware of keyboard
        />
        <IconContainer onPress={() => navigation.push(Routes.TrainingCreation)}>
          <PlusIcon />
        </IconContainer>
      </Container>
      <FinalButton onPress={goToTrainingPageScreen} title={t('trainingSets.finalize')} />
      {selectedSet && (
        <EditExerciseSetModal
          isVisible={isModalVisible}
          onPressClose={() => setIsModalVisible(false)}
          exerciseSet={selectedSet}
        />
      )}
    </Background>
  );
});

const Container = styled.SafeAreaView({
  marginTop: theme.margin.x2,
  marginHorizontal: theme.margin.x2,
  flex: 1,
});

const HeaderContainer = styled.View({
  paddingHorizontal: theme.margin.x2,
});

const IconContainer = styled.TouchableOpacity({
  position: 'absolute',
  bottom: theme.margin.x2,
  right: theme.margin.x2,
  backgroundColor: theme.colors.black,
  width: theme.iconSize,
  height: theme.iconSize,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.iconSize / 2,
});
