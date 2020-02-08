import React from 'react';

import styled from '../../utils/styled-components';

const BUTTON_DIAMETER = 50;

interface RoundedButtonProps {
  onPress: () => void;
}

export const RoundButton: React.FC<RoundedButtonProps> = ({ onPress }) => (
  <Container onPress={onPress}>
    <Plus>+</Plus>
  </Container>
);

const Container = styled.TouchableOpacity(props => ({
  height: BUTTON_DIAMETER,
  width: BUTTON_DIAMETER,
  borderRadius: BUTTON_DIAMETER / 2,
  backgroundColor: props.theme.colors.green,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Plus = styled.Text(props => ({
  color: props.theme.colors.white,
  fontWeight: 'bold',
  fontSize: 24,
  textAlign: 'center',
}));
