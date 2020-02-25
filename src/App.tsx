import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import codePush from 'react-native-code-push';
import { ThemeProvider } from '@woap/utils/styled-components';
import { AppContainer } from '@woap/navigation';
import { rootStore } from '@woap/mobx/rootStore';
import { StoreProvider } from '@woap/mobx/provider';
import { theme } from '@woap/styles/theme';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };

const WorkoutApp: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider value={rootStore}>
        <StatusBar barStyle="light-content" />
        <AppContainer />
      </StoreProvider>
    </ThemeProvider>
  );
};

export const App = codePush(codePushOptions)(WorkoutApp);
