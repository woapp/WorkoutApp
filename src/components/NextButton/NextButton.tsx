import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

import { RightArrowIcon } from '../Icons/RightArrowIcon';

interface Props {
  onPress: () => void;
  disabled: boolean;
}

export const NextButton: FunctionComponent<Props> = ({ disabled, onPress }) => {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <RightArrowIcon />
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ disabled: boolean }>(({ theme, disabled }) => ({
  opacity: disabled ? 0.5 : 1,
  position: 'absolute',
  alignSelf: 'flex-end',
  top: '50%',
  bottom: '50%',
  right: 0,
  width: theme.iconSize,
  height: theme.iconSize,
  borderRadius: theme.iconSize / 2,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.black,
}));
