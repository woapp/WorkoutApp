import React from 'react';

import styled from '../../utils/styled-components';

interface ActionButtonProps {
  onPress: () => void;
  title: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onPress, title }) => (
  <Container onPress={onPress}>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.TouchableOpacity(props => ({
  borderRadius: 25,
  backgroundColor: props.theme.colors.green,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: props.theme.margin.x2,
  paddingVertical: props.theme.margin.x1,
}));

const Title = styled.Text(props => ({
  color: props.theme.colors.white,
  fontWeight: 'bold',
  fontSize: 24,
  textAlign: 'center',
}));
