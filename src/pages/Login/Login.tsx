import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { Routes } from '@woap/navigation/routes';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { RootNavigatorParamList } from '@woap/navigation';
import { FormField } from '@woap/components/FormField';
import images from '@woap/assets/images';
import { Link } from '@woap/components/Link';
import { Card } from '@woap/components/Card/Card';
import { colors } from '@woap/styles/colors';

import { useCardAnimation, useLogin } from './Login.hooks';

type LoginScreenNavigationProp = StackNavigationProp<RootNavigatorParamList, Routes.Login>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LOGO_SIZE = 100;

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
      <LogoContainer>
        <Logo source={images.logo} />
      </LogoContainer>
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
          <PrimaryButton title="Se connecter" onPress={onSubmitLogin} isLoading={isLoginLoading} />
          <Spacer height={2} />
          <Link onPress={() => {}} label="Nouveau compte" />
        </Card>
      )}
    </Container>
  );
});

const Container = styled.View(props => ({
  flex: 1,
  alignItems: 'center',
  backgroundColor: props.theme.colors.greyScale[70],
}));

const LogoContainer = styled.View(props => ({
  ...StyleSheet.absoluteFillObject,
  marginTop: props.theme.margin.x10,
  alignItems: 'center',
}));

const Logo = styled.Image({
  width: LOGO_SIZE,
  height: LOGO_SIZE,
});

const Title = styled.Text(props => ({
  ...props.theme.fonts.title.H1,
  textAlign: 'center',
  fontWeight: 'bold',
  color: props.theme.colors.white,
}));
