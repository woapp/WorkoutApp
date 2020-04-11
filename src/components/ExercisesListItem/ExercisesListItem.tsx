import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@woap/utils/styled-components';
import { ExerciseSetsType } from '@woap/mobx/exerciseSets';

import { MuscleGroupToggle } from '../../pages/Exercise/ExerciseMuscleGroups/components/MuscleGroupToggle';
import { FormSets } from '../FormSets';
import { TextTitle } from '../Texts';

interface ExerciseListItemProps {
  exerciseSets: ExerciseSetsType;
  onDrag: () => void;
}

export const ExercisesListItem: FunctionComponent<ExerciseListItemProps> = observer(
  ({ exerciseSets, onDrag }) => {
    const { exercise, sets } = exerciseSets;
    const [isExtended, setIsExtended] = useState(false);
    const toggleItem = () => setIsExtended(!isExtended);

    return (
      <Container onLongPress={onDrag} onPress={toggleItem}>
        <Row>
          <NameContainer>
            <TextTitle>{exercise.name}</TextTitle>
          </NameContainer>
          {exercise.mainMuscleGroup && (
            <MuscleGroupToggle
              muscleGroup={exercise.mainMuscleGroup}
              isSelected
              disabled
              iconSize={60}
            />
          )}
        </Row>

        {!isExtended ? (
          <Sets>{`${sets.length} séries`}</Sets>
        ) : (
          <FormSets exerciseSets={exerciseSets} />
        )}
      </Container>
    );
  }
);

const Container = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.greyScale[20],
  borderBottomWidth: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const NameContainer = styled.View({
  flex: 1,
});

const Sets = styled.Text({
  fontSize: 18,
});

const Row = styled.View({
  flexDirection: 'row',
});
