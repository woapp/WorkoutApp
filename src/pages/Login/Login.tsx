import React, { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { PrimaryButton } from '../../components/PrimaryButton';
import { TextTitle } from '../../components/Texts';
import { Routes } from '../../navigation/routes';

export const Login: FunctionComponent<NavigationStackScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = async () => {
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log('res', res);
      navigation.navigate(Routes.Dashboard);
    } catch (e) {
      console.error(e.message);
    }
  };

  const onSubmitSignup = async () => {
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      console.log('res', res);
      navigation.navigate(Routes.Dashboard);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 50, justifyContent: 'center' }}>
      <TextTitle>Login</TextTitle>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <PrimaryButton title="Signup" onPress={onSubmitSignup} />
      <PrimaryButton title="Login" onPress={onSubmitLogin} />
    </View>
  );
};
