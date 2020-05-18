import React, { FunctionComponent, useState, useRef } from 'react';
import { TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import styled from '@woap/utils/styled-components';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';
import { colors } from '@woap/styles/colors';
import { Spacer } from '@woap/components/Spacer';
import { Button } from '@woap/components/Button';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';

interface Props {
  isVisible: boolean;
  onPressClose: () => void;
  exerciseSet: ExerciseSetType;
}

export const UpdateSetModal: FunctionComponent<Props> = observer(
  ({ isVisible, onPressClose, exerciseSet }) => {
    const { t } = useTranslation('trainingCreation');
    const [repetitionsValue, setRepetitionsValue] = useState('10');
    const [weightValue, setWeightValue] = useState('80');
    const weightInput = useRef<TextInput>(null);

    const onSubmitEditingRepetitionInput = () => {
      weightInput.current && weightInput.current.focus();
    };

    const updateSet = () => {
      exerciseSet.setReps(Number.parseInt(repetitionsValue, 10));
      exerciseSet.setWeight(Number.parseInt(weightValue, 10));
      onPressClose();
    };

    return (
      <Modal isVisible={isVisible} onBackdropPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>{exerciseSet.exercise.name}</Title>
            <TouchableOpacity onPress={onPressClose}>
              <CrossIcon />
            </TouchableOpacity>
          </Header>
          <Row>
            <ItemTitle>{t('trainingSets.repetitions')}</ItemTitle>
            <NumberInput
              value={repetitionsValue}
              onChangeText={setRepetitionsValue}
              keyboardType="number-pad"
              maxLength={3}
              returnKeyType="next"
              onSubmitEditing={onSubmitEditingRepetitionInput}
              blurOnSubmit={false}
            />
          </Row>
          <Separator />
          <Row>
            <ItemTitle>{t('trainingSets.kilograms')}</ItemTitle>
            <NumberInput
              ref={weightInput}
              value={weightValue}
              onChangeText={setWeightValue}
              keyboardType="numeric"
              maxLength={8}
              returnKeyType="next"
              onSubmitEditing={updateSet}
              blurOnSubmit={false}
            />
          </Row>
          <Separator />
        </Container>
        <Spacer height={2} />
        <Button onPress={updateSet} title={t('trainingSets.update')} />
      </Modal>
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

const NumberInput = styled.TextInput(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
  color: theme.colors.black,
  flex: 1,
  textAlign: 'right',
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
