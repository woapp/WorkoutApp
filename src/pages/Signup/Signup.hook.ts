import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export const useSignup = (onSignupSuccess: () => void) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const onSubmitSignup = async () => {
    setIsSignupLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      onSignupSuccess();
    } catch (e) {
      Alert.alert('Erreur', e.message);
    }
    setIsSignupLoading(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isSignupLoading,
    onSubmitSignup,
  };
};
