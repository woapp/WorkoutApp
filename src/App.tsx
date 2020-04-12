import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import codePush from 'react-native-code-push';
import styled, { ThemeProvider } from '@woap/utils/styled-components';
import { AppContainer } from '@woap/navigation';
import { rootStore } from '@woap/mobx/rootStore';
import { StoreProvider } from '@woap/mobx/provider';
import { theme } from '@woap/styles/theme';

import './i18n';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };

const WorkoutApp: FunctionComponent = () => {
  return (
    <KeyboardDismiss>
      <ThemeProvider theme={theme}>
        <StoreProvider value={rootStore}>
          <StatusBar barStyle="light-content" />
          <AppContainer />
        </StoreProvider>
      </ThemeProvider>
    </KeyboardDismiss>
  );
};

const KeyboardDismiss = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  scrollEnabled: false,
  keyboardShouldPersistTaps: 'handled',
  horizontal: true,
})``;

export const App = codePush(codePushOptions)(WorkoutApp);
