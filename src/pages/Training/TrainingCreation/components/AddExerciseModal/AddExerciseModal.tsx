import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styled from '@woap/utils/styled-components';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';
import { colors } from '@woap/styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Spacer } from '@woap/components/Spacer';
import { Button } from '@woap/components/Button';

interface Props {
  title: string;
  repetitionsValue: string;
  onRepetitionsChange: (text: string) => void;
  kilogramsValue: string;
  onKilogramsChange: (text: string) => void;
  howManyValue: string;
  onHowManyChange: (text: string) => void;
  onPressClose: () => void;
  onPressAdd: () => void;
}

export const AddExerciseModal: FunctionComponent<Props> = ({
  title,
  onPressClose,
  onPressAdd,
  repetitionsValue,
  onRepetitionsChange,
  kilogramsValue,
  onKilogramsChange,
  howManyValue,
  onHowManyChange,
}) => {
  return (
    <Modal isVisible>
      <Container>
        <Header>
          <Title>{title}</Title>
          <TouchableOpacity onPress={onPressClose}>
            <CrossIcon />
          </TouchableOpacity>
        </Header>
        <Row>
          <ItemTitle>Repetitions</ItemTitle>
          <NumberInput value={repetitionsValue} onChangeText={onRepetitionsChange} />
        </Row>
        <Separator />
        <Row>
          <ItemTitle>Kilograms</ItemTitle>
          <NumberInput value={kilogramsValue} onChangeText={onKilogramsChange} />
        </Row>
        <Separator />
        <Row>
          <ItemTitle>How many ?</ItemTitle>
          <NumberInput value={howManyValue} onChangeText={onHowManyChange} />
        </Row>
      </Container>
      <Spacer height={2} />
      <Button onPress={onPressAdd} title="Add" />
    </Modal>
  );
};

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

const NumberInput = styled.TextInput.attrs({ keyboardType: 'numeric' })(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
}));

const Title = styled.Text(({ theme }) => ({
  flex: 1,
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));

const ItemTitle = styled.Text(({ theme }) => ({
  flex: 1,
  ...theme.fonts.h2,
}));

const Row = styled.View(({ theme }) => ({ flexDirection: 'row', padding: theme.margin.x2 }));

const Separator = styled.View(({ theme }) => ({
  height: 1,
  marginHorizontal: theme.margin.x2,
  backgroundColor: theme.colors.transparentBlackScale[20],
}));
