import { useSpringTransition, bInterpolate } from 'react-native-redash';
import { Dimensions, Keyboard, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { CARD_HEIGHT } from '@woap/components/Card/Card';
import { useKeyboard } from '@woap/hooks/useKeyboard';
import { useStore } from '@woap/utils/hooks/useStore';
import { useState, useEffect } from 'react';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const DEFAULT_CARD_MARGIN_BOTTOM = (SCREEN_HEIGHT - CARD_HEIGHT) / 2;
const CARD_MARGIN_BOTTOM_FROM_KEYBOARD = 30;
export const useCardAnimation = () => {
  const { isKeyboardVisible, maxKeyboardHeight } = useKeyboard();
  const transition = useSpringTransition(isKeyboardVisible);
  const cardTranslationY = bInterpolate(
    transition,
    SCREEN_HEIGHT - CARD_HEIGHT - DEFAULT_CARD_MARGIN_BOTTOM,
    SCREEN_HEIGHT - CARD_HEIGHT - maxKeyboardHeight - CARD_MARGIN_BOTTOM_FROM_KEYBOARD
  );

  return { cardTranslationY };
};

export const useLogin = (navigateToTabNavigator: () => void) => {
  const { login, user } = useStore();
  const [email, setEmail] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (user) {
      navigateToTabNavigator();
    } else {
      setIsLoading(false);
    }
  }, [navigateToTabNavigator, user]);

  const onSubmitLogin = async () => {
    setIsLoginLoading(true);
    try {
      const {
        user: { uid: id },
      } = await auth().signInWithEmailAndPassword(email, password);
      login({ id, email });
      Keyboard.dismiss();
      navigateToTabNavigator();
    } catch (e) {
      Alert.alert('Erreur', e.message);
    }
    setIsLoginLoading(false);
  };

  return { onSubmitLogin, isLoginLoading, setPassword, password, setEmail, email, isLoading };
};
