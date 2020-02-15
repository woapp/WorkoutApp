import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

export const Button: FunctionComponent<ButtonProps> = ({ onPress, title }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity(props => ({
  width: '100%',
  backgroundColor: props.theme.colors.blue,
  borderRadius: 15,
  padding: props.theme.margin.x2,
}));

const Title = styled.Text(props => ({
  color: props.theme.colors.white,
  fontWeight: 'bold',
  fontSize: 24,
  textAlign: 'center',
}));
