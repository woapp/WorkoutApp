import React, { FunctionComponent } from 'react';

import { ThemeProvider } from './lib/styled-components';
import { theme } from './styles/theme';
import { AppContainer } from './navigation';
import { rootStore } from './modules/rootStore';
import { StoreProvider } from './modules/provider';

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <StoreProvider value={rootStore}>
      <AppContainer />
    </StoreProvider>
  </ThemeProvider>
);
