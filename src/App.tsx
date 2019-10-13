import React, { FunctionComponent } from 'react';

import { ThemeProvider } from './lib/styled-components';
import { theme } from './styles/theme';
import { AppContainer } from './navigation';

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>
);
