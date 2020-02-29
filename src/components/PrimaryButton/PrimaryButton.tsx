import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { TouchableOpacityProps } from 'react-native';

import { Loader } from '../Loader/Loader';

type ButtonProps = {
  onPress: () => void;
  title: string;
  style?: TouchableOpacityProps;
  isLoading?: boolean;
};

export const PrimaryButton: FunctionComponent<ButtonProps> = ({
  onPress,
  title,
  style,
  isLoading,
}) => {
  return (
    <Container onPress={onPress} style={style}>
      {isLoading ? <Loader /> : <Title>{title}</Title>}
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
