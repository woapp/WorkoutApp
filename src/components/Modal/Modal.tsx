import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { observer } from 'mobx-react-lite';
import LinearGradient from 'react-native-linear-gradient';
import RNModal from 'react-native-modal';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { Button } from '@woap/components/Button';
import { colors } from '@woap/styles/colors';

interface Props {
  isVisible: boolean;
  title: string;
  validateLabel: string;
  onPressClose: () => void;
  onPressValidate: () => void;
}

export const Modal: FunctionComponent<Props> = observer(
  ({ isVisible, onPressClose, onPressValidate, title, children, validateLabel }) => {
    return (
      <RNModal isVisible={isVisible} onBackdropPress={Keyboard.dismiss} backdropOpacity={0.8}>
        <Container>
          <Header>
            <Title>{title}</Title>
            <TouchableOpacity onPress={onPressClose}>
              <CrossIcon />
            </TouchableOpacity>
          </Header>
          {children}
        </Container>
        <Spacer height={2} />
        <Button onPress={onPressValidate} title={validateLabel} />
      </RNModal>
    );
  }
);

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: theme.border.radius.m,
}));

const Header = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
})(({ theme }) => ({
  flexDirection: 'row',
  padding: theme.margin.x2,
  borderTopLeftRadius: theme.border.radius.m,
  borderTopRightRadius: theme.border.radius.m,
  alignItems: 'center',
}));

const Title = styled.Text(({ theme }) => ({
  flex: 1,
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
