import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';

interface AddSetProps {
  onPress: () => void;
}

export const NewSetButton: FunctionComponent<AddSetProps> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Label>
        <Icon>+</Icon> Ajouter une nouvelle série
      </Label>
    </Container>
  );
};

const Container = styled.TouchableOpacity(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: props.theme.margin.x3,
  paddingVertical: props.theme.margin.x2,
}));

const Label = styled.Text(props => ({
  fontSize: 18,
  fontWeight: 'bold',
  color: props.theme.colors.mediumGrey,
}));

const Icon = styled.Text({
  fontSize: 24,
});
