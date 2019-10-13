import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

import styled from '../../lib/styled-components';

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <AppTitle>Workout app</AppTitle>
    </Container>
  );
};

const AppTitle = styled(Text)`
  font-size: 24;
  text-align: center;
  margin: ${({ theme }): number => theme.margin.x3}px;
`;

const Container = styled(View)`
  flex-grow: 1;
`;
