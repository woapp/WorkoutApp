import React, { FunctionComponent, useState } from 'react';

import { NameInput } from '../../components/NameInput';
import styled from '../../utils/styled-components';
import { MuscleGroup } from '../../modules/types';
import { MuscleGroupSelectableItem } from '../../components/MuscleGroupSelectableItem';

type CreateExerciseProps = {};

export const CreateExercise: FunctionComponent<CreateExerciseProps> = () => {
  const [name, setName] = useState('');
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleMuscleGroup = (muscleGroupIndex: number) => () => {
    setSelectedMuscleGroups(
      selectedMuscleGroups.map((isMuscleGroupSelected, index) => {
        if (index === muscleGroupIndex) {
          return !isMuscleGroupSelected;
        } else {
          return isMuscleGroupSelected;
        }
      })
    );
  };

  return (
    <Container>
      <NameInput value={name} placeholder="Exercice" onChangeText={setName} />
      <MuscleGroupsContainer>
        <MuscleGroupsRow>
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Abs}
            title="Abdos"
            onPress={toggleMuscleGroup(0)}
            isSelected={selectedMuscleGroups[0]}
          />
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Back}
            title="Dos"
            onPress={toggleMuscleGroup(1)}
            isSelected={selectedMuscleGroups[1]}
          />
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Biceps}
            title="Biceps"
            onPress={toggleMuscleGroup(2)}
            isSelected={selectedMuscleGroups[2]}
          />
        </MuscleGroupsRow>
        <MuscleGroupsRow>
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Calves}
            title="Mollets"
            onPress={toggleMuscleGroup(3)}
            isSelected={selectedMuscleGroups[3]}
          />
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Chest}
            title="Pecs"
            onPress={toggleMuscleGroup(4)}
            isSelected={selectedMuscleGroups[4]}
          />
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Forearms}
            title="Avant-bras"
            onPress={toggleMuscleGroup(5)}
            isSelected={selectedMuscleGroups[5]}
          />
        </MuscleGroupsRow>
        <MuscleGroupsRow>
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Legs}
            title="Jambes"
            onPress={toggleMuscleGroup(6)}
            isSelected={selectedMuscleGroups[6]}
          />
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Shoulders}
            title="Epaules"
            onPress={toggleMuscleGroup(7)}
            isSelected={selectedMuscleGroups[7]}
          />
          <MuscleGroupSelectableItem
            muscleGroup={MuscleGroup.Triceps}
            title="Triceps"
            onPress={toggleMuscleGroup(8)}
            isSelected={selectedMuscleGroups[8]}
          />
        </MuscleGroupsRow>
      </MuscleGroupsContainer>
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const MuscleGroupsContainer = styled.View({});
const MuscleGroupsRow = styled.View(props => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: props.theme.margin.x2,
}));
