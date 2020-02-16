import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@woap/utils/styled-components';
import { AppContainer } from '@woap/navigation';

import { theme } from './styles/theme';
import { rootStore } from './mobx/rootStore';
import { StoreProvider } from './mobx/provider';

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
