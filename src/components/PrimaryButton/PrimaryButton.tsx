import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  style?: TouchableOpacityProps;
};

export const PrimaryButton: FunctionComponent<ButtonProps> = ({ onPress, title, style }) => {
  return (
    <Container onPress={onPress} style={style}>
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
