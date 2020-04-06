import React, { FunctionComponent } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '@woap/navigation/routes';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { RootNavigatorParamList } from '@woap/navigation';
import { FormField } from '@woap/components/FormField';
import { Link } from '@woap/components/Link';
import { Card } from '@woap/components/Card/Card';
import { colors } from '@woap/styles/colors';
import { Button } from '@woap/components/Button';

import { useCardAnimation, useLogin } from './Login.hooks';

type LoginScreenNavigationProp = StackNavigationProp<RootNavigatorParamList, Routes.Login>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const Login: FunctionComponent<Props> = observer(({ navigation }) => {
  const navigateToTabNavigator = () => navigation.navigate(Routes.TabNavigator);
  const {
    onSubmitLogin,
    isLoginLoading,
    setPassword,
    password,
    setEmail,
    email,
    isLoading,
  } = useLogin(navigateToTabNavigator);
  const { cardTranslationY } = useCardAnimation();

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Card style={{ transform: [{ translateY: cardTranslationY }] }}>
          <Title>Connexion</Title>
          <Spacer height={4} />
          <FormField
            label="Email"
            labelStyle={{ color: colors.white }}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={{ color: colors.white }}
            selectionColor={colors.white}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Spacer height={2} />
          <FormField
            label="Mot de passe"
            labelStyle={{ color: colors.white }}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ color: colors.white }}
            selectionColor={colors.white}
          />
          <Spacer height={2} />
          <Button title="Se connecter" onPress={onSubmitLogin} isLoading={isLoginLoading} />
          <Spacer height={2} />
          <Link onPress={() => {}} label="Nouveau compte" />
        </Card>
      )}
    </Container>
  );
});

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: theme.colors.background.black,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.colors.white,
}));
