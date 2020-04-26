import React, { FunctionComponent } from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from '@woap/utils/styled-components';

interface Props {
  onPress: () => void;
  title: string;
}

export const FinalButton: FunctionComponent<Props> = ({ onPress, title }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity(({ theme }) => ({
  paddingTop: theme.margin.x2,
  paddingBottom: getBottomSpace() + theme.margin.x2,
  backgroundColor: theme.colors.black,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
  textAlign: 'center',
}));
