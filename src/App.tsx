import React, { FunctionComponent } from 'react';

import { ThemeProvider } from './lib/styled-components';
import { theme } from './styles/theme';
import { AppContainer } from './navigation';
import { rootStore } from './modules/rootStore';
import { StoreProvider } from './modules/provider';
import { StatusBar } from 'react-native';

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <StoreProvider value={rootStore}>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </StoreProvider>
  </ThemeProvider>
);
