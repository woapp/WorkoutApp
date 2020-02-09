import React, { FunctionComponent, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ExerciseSetsType } from '../../modules/exerciseSets';
import styled from '../../utils/styled-components';
import { MuscleGroupSelectableItem } from '../MuscleGroupSelectableItem';
import { SetsEditor } from '../SetsEditor';

interface ExerciseListItemProps {
  exerciseSets: ExerciseSetsType;
}

export const ExercisesListItem: FunctionComponent<ExerciseListItemProps> = ({ exerciseSets }) => {
  const { exercise, sets } = exerciseSets;
  const [isExtended, setIsExtended] = useState(false);
  const toggleItem = () => setIsExtended(!isExtended);

  return (
    <Container>
      <Row>
        <NameContainer onPress={toggleItem}>
          <Name>{exercise.name}</Name>
        </NameContainer>
        {exercise.mainMuscleGroup && (
          <MuscleGroupSelectableItem
            muscleGroup={exercise.mainMuscleGroup}
            isSelected
            disabled
            iconSize={60}
          />
        )}
      </Row>

      {!isExtended ? (
        <TouchableOpacity onPress={toggleItem}>
          <Sets>{`${sets.length} séries`}</Sets>
        </TouchableOpacity>
      ) : (
        <SetsEditor exerciseSets={exerciseSets} />
      )}
    </Container>
  );
};

const Container = styled.View(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.lightGrey,
  borderBottomWidth: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const NameContainer = styled.TouchableOpacity({
  flex: 1,
});

const Name = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});

const Sets = styled.Text({
  fontSize: 18,
});

const Row = styled.View({
  flexDirection: 'row',
});
