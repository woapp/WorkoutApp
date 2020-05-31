import React, { FunctionComponent } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import styled from '@woap/utils/styled-components';

import { RightArrowIcon } from '../Icons/RightArrowIcon';

interface Props {
  onPress: () => void;
  disabled: boolean;
}

export const NextButton: FunctionComponent<Props> = ({ disabled, onPress }) => {
  return (
    <StyledKeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container disabled={disabled} onPress={onPress}>
        <RightArrowIcon />
      </Container>
    </StyledKeyboardAvoidingView>
  );
};

const Container = styled.TouchableOpacity<{ disabled: boolean }>(({ theme, disabled }) => ({
  opacity: disabled ? 0.5 : 1,
  width: theme.iconSize,
  height: theme.iconSize,
  borderRadius: theme.iconSize / 2,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.black,
  marginBottom: theme.margin.x3,
}));

const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)({
  position: 'absolute',
  alignItems: 'flex-end',
  right: 0,
  bottom: 0,
});
