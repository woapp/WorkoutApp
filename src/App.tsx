import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@woap/utils/styled-components';
import { AppContainer } from '@woap/navigation';
import { rootStore } from '@woap/mobx/rootStore';
import { StoreProvider } from '@woap/mobx/provider';
import { theme } from '@woap/styles/theme';

// test2

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider value={rootStore}>
        <StatusBar barStyle="light-content" />
        <AppContainer />
      </StoreProvider>
    </ThemeProvider>
  );
};
