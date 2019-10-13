import React, { FunctionComponent } from 'react';

import { ThemeProvider } from './lib/styled-components';
import { theme } from './styles/theme';
import { AppContainer } from './navigation';
import { StoreProvider, rootStore } from './modules/types';

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <StoreProvider value={rootStore}>
      <AppContainer />
    </StoreProvider>
  </ThemeProvider>
);
