import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, ActivityIndicator } from 'react-native-paper';
import { observer } from 'mobx-react-lite';
import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { TextTitle, TextBody } from '@woap/components/Texts';
import { Routes } from '@woap/navigation/routes';
import { useStore } from '@woap/utils/hooks/useStore';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { RootNavigatorParamList } from '@woap/navigation';

type LoginScreenNavigationProp = StackNavigationProp<RootNavigatorParamList, Routes.Login>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const Login: FunctionComponent<Props> = observer(({ navigation }) => {
  const { login, user } = useStore();
  const [email, setEmail] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      navigation.navigate(Routes.TabNavigator);
    } else {
      setIsLoading(false);
    }
  }, [navigation, user]);

  const onSubmitLogin = async () => {
    setIsLoginLoading(true);
    try {
      const {
        user: { uid: id },
      } = await auth().signInWithEmailAndPassword(email, password);
      login({ id, email });
      navigation.navigate(Routes.TabNavigator);
    } catch (e) {
      Alert.alert('Erreur', e.message);
    }
    setIsLoginLoading(false);
  };

  const onSubmitSignup = async () => {
    setIsSignupLoading(true);
    try {
      const {
        user: { uid: id },
      } = await auth().createUserWithEmailAndPassword(email, password);
      login({ id, email });
      navigation.navigate(Routes.TabNavigator);
    } catch (e) {
      Alert.alert('Erreur', e.message);
    }
    setIsSignupLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: 50, justifyContent: 'center' }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <TextTitle>Connexion</TextTitle>
          <Spacer height={4} />
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Spacer height={2} />
          <TextInput
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Spacer height={2} />
          <PrimaryButton title="S'inscrire" onPress={onSubmitSignup} isLoading={isSignupLoading} />
          <Spacer height={2} />
          <OrText>ou</OrText>
          <Spacer height={2} />
          <PrimaryButton title="Se connecter" onPress={onSubmitLogin} isLoading={isLoginLoading} />
        </>
      )}
    </View>
  );
});

const OrText = styled(TextBody)({
  textAlign: 'center',
});
