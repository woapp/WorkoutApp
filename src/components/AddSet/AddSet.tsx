import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';

interface AddSetProps {
  onPress: () => void;
}

export const AddSet: FunctionComponent<AddSetProps> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <Icon>+</Icon>
      </IconContainer>
      <Label>Ajouter une nouvelle série</Label>
    </Container>
  );
};

const Container = styled.TouchableOpacity(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  padding: props.theme.margin.x1,
}));

const IconContainer = styled.View(props => ({
  marginHorizontal: props.theme.margin.x1,
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: props.theme.colors.mediumGrey,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Label = styled.Text(props => ({
  fontSize: 15,
  color: props.theme.colors.mediumGrey,
}));

const Icon = styled.Text(props => ({
  color: props.theme.colors.mediumGrey,
}));
