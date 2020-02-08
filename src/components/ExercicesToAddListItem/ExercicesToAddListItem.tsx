import React, { FunctionComponent } from 'react';
import { Checkbox } from 'react-native-paper';

import styled from '../../utils/styled-components';

interface ExercicesToAddListItemProps {
  name: string;
  checked: 'checked' | 'unchecked' | 'indeterminate';
  onPress: () => void;
}

export const ExercicesToAddListItem: FunctionComponent<ExercicesToAddListItemProps> = ({
  checked,
  onPress,
  name,
}) => (
  <Container onPress={onPress}>
    <Checkbox color="#000000" uncheckedColor="#000000" status={checked} />
    <Name>{name}</Name>
  </Container>
);

const Container = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  flexDirection: 'row',
}));

const Name = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});
