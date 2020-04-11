import React, { FunctionComponent } from 'react';
import { Checkbox } from 'react-native-paper';
import { Alert } from 'react-native';
import styled from '@woap/utils/styled-components';
import { MuscleGroupToggle } from '@woap/pages/Exercise/ExerciseMuscleGroups/components/MuscleGroupToggle';
import { useStore } from '@woap/utils/hooks/useStore';
import { TextTitle } from '@woap/components/Texts';
import { ExerciseType } from '@woap/mobx/exercise';

interface Props {
  checked: 'checked' | 'unchecked' | 'indeterminate';
  onPress: () => void;
  exercise: ExerciseType;
}

export const ExerciseItem: FunctionComponent<Props> = ({ checked, onPress, exercise }) => {
  const { removeExercise } = useStore();

  const showDeleteExerciseAlert = () => {
    Alert.alert(
      'Supprimer cet exercice ?',
      'Attention il sera supprimé de tous vos workouts en cours',
      [
        { text: 'Annuler', onPress: () => {} },
        {
          text: 'Supprimer',
          onPress: () => removeExercise(exercise),
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <Container onPress={onPress} onLongPress={showDeleteExerciseAlert}>
      <Row>
        <Checkbox color="#000000" uncheckedColor="#000000" status={checked} />
        <TextTitle>{exercise.name}</TextTitle>
      </Row>
      {exercise.mainMuscleGroup && (
        <MuscleGroupToggle
          muscleGroup={exercise.mainMuscleGroup}
          isSelected={checked === 'checked'}
          disabled
          iconSize={60}
        />
      )}
    </Container>
  );
};

const Container = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'space-between',
}));

const Row = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-start',
});