import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from './utils/styled-components';
import { theme } from './styles/theme';
import { AppContainer } from './navigation';
import { rootStore } from './modules/rootStore';
import { StoreProvider } from './modules/provider';

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
