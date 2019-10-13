import React, { FunctionComponent } from 'react';
import { SafeAreaView, Text } from 'react-native';

import styled, { ThemeProvider } from './lib/styled-components';
import { theme } from './styles/theme';

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <AppTitle>WorkoutApp</AppTitle>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const AppTitle = styled(Text)`
  font-size: 24;
  text-align: center;
  margin: ${({ theme }): number => theme.margin.x3}px;
`;
