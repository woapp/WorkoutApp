import React, { FunctionComponent } from 'react';
import { Checkbox } from 'react-native-paper';

import { MuscleGroup } from '../../modules/types';
import styled from '../../utils/styled-components';
import { MuscleGroupSelectableItem } from '../MuscleGroupSelectableItem';

interface ExercicesToAddListItemProps {
  name: string;
  checked: 'checked' | 'unchecked' | 'indeterminate';
  onPress: () => void;
  mainMuscleGroup?: MuscleGroup;
}

export const ExercicesToAddListItem: FunctionComponent<ExercicesToAddListItemProps> = ({
  checked,
  onPress,
  name,
  mainMuscleGroup,
}) => (
  <Container onPress={onPress}>
    <Row>
      <Checkbox color="#000000" uncheckedColor="#000000" status={checked} />
      <Name>{name}</Name>
    </Row>
    {mainMuscleGroup && (
      <MuscleGroupSelectableItem
        muscleGroup={mainMuscleGroup}
        isSelected={checked === 'checked'}
        disabled
        iconSize={60}
      />
    )}
  </Container>
);

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
