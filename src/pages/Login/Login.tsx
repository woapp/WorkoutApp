import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { TextInput, ActivityIndicator } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { TextTitle } from '@woap/components/Texts';
import { Routes } from '@woap/navigation/routes';
import { useStore } from '@woap/utils/hooks/useStore';
import { observer } from 'mobx-react-lite';

export const Login: FunctionComponent<NavigationStackScreenProps> = observer(({ navigation }) => {
  const { login, user } = useStore();
  const [email, setEmail] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      navigation.navigate(Routes.Dashboard);
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
      navigation.navigate(Routes.Dashboard);
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
      navigation.navigate(Routes.Dashboard);
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
          <TextTitle>Login</TextTitle>
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <PrimaryButton title="Signup" onPress={onSubmitSignup} isLoading={isSignupLoading} />
          <PrimaryButton title="Login" onPress={onSubmitLogin} isLoading={isLoginLoading} />
        </>
      )}
    </View>
  );
});
