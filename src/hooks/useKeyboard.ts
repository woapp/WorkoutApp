import { useState, useEffect } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export const useKeyboard = () => {
  const [maxKeyboardHeight, setMaxKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',

      (e: KeyboardEvent) => {
        setKeyboardVisible(true);
        if (e.endCoordinates.height > maxKeyboardHeight)
          setMaxKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',

      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardWillHideListener.remove();

      keyboardWillShowListener.remove();
    };
  }, []);

  return { isKeyboardVisible, maxKeyboardHeight };
};
