import React, { FunctionComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { observer } from 'mobx-react-lite';

import { InputTitle } from '../../components/InputTitle';
import styled from '../../utils/styled-components';
import { MuscleGroup } from '../../modules/types';
import { MuscleGroupToggle } from '../../components/MuscleGroupToggle';
import { ActionButton } from '../../components/ActionButton';

export const CreateExercise: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const exercise = navigation.getParam('exercise');
    const validateExerciseCreation = navigation.getParam('validateExerciseCreation');
    const addMuscleGroup = (muscleGroup: MuscleGroup) => () => exercise.addMuscleGroup(muscleGroup);
    const removeMuscleGroup = (muscleGroup: MuscleGroup) => () =>
      exercise.removeMuscleGroup(muscleGroup);

    const onCreateExercise = () => {
      validateExerciseCreation(exercise);
      navigation.goBack();
    };

    return (
      <Container>
        <InputTitle value={exercise.name} placeholder="Exercice" onChangeText={exercise.setName} />
        <MuscleGroupsRow>
          {Object.values(MuscleGroup).map((muscleGroup, index) => {
            const isSelected = exercise.muscleGroups.includes(muscleGroup);
            const onSelectMuscleGroup = isSelected
              ? removeMuscleGroup(muscleGroup)
              : addMuscleGroup(muscleGroup);

            return (
              <MuscleGroupToggle
                key={index}
                muscleGroup={muscleGroup}
                title={muscleGroup}
                onPress={onSelectMuscleGroup}
                isSelected={isSelected}
              />
            );
          })}
        </MuscleGroupsRow>
        <ActionButtonContainer>
          <ActionButton title="Créer" onPress={onCreateExercise} />
        </ActionButtonContainer>
      </Container>
    );
  }
);

const Container = styled.View({
  flex: 1,
});

const MuscleGroupsRow = styled.View(props => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  paddingVertical: props.theme.margin.x4,
  paddingHorizontal: props.theme.margin.x4,
}));

const ActionButtonContainer = styled.View(props => ({
  width: '100%',
  alignItems: 'center',
  position: 'absolute',
  bottom: props.theme.margin.x4,
}));
