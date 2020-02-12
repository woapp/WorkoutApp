import React, { FunctionComponent } from 'react';
import { Checkbox } from 'react-native-paper';
import { Alert } from 'react-native';

import styled from '../../utils/styled-components';
import { MuscleGroupSelectableItem } from '../MuscleGroupSelectableItem';
import { useStore } from '../../utils/hooks/useStore';
import { ExerciseType } from '../../modules/exercise';

interface ExercicesToAddListItemProps {
  checked: 'checked' | 'unchecked' | 'indeterminate';
  onPress: () => void;
  exercise: ExerciseType;
}

export const ExercicesToAddListItem: FunctionComponent<ExercicesToAddListItemProps> = ({
  checked,
  onPress,
  exercise,
}) => {
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
        <Name>{exercise.name}</Name>
      </Row>
      {exercise.mainMuscleGroup && (
        <MuscleGroupSelectableItem
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

const Name = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});
