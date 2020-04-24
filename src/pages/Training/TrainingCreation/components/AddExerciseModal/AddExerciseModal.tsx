import React, { FunctionComponent, useState, useRef } from 'react';
import { TouchableOpacity, Keyboard, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import styled from '@woap/utils/styled-components';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';
import { colors } from '@woap/styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Spacer } from '@woap/components/Spacer';
import { Button } from '@woap/components/Button';
import { ExerciseSnapshotIn } from '@woap/mobx/exercise';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import { createExerciseSet } from '@woap/mobx/exerciseSet/constructor';
import { useTranslation } from 'react-i18next';

interface Props {
  isVisible: boolean;
  onPressClose: () => void;
  onPressAdd: () => void;
  exercise: ExerciseSnapshotIn;
}

export const AddExerciseModal: FunctionComponent<Props> = observer(
  ({ isVisible, onPressClose, onPressAdd, exercise }) => {
    const { newFreeWorkout } = useStore();
    const { t } = useTranslation('trainingCreation');
    if (!newFreeWorkout) return null;
    const [repetitionsValue, setRepetitionsValue] = useState('10');
    const [weightValue, setWeightValue] = useState('80');
    const weightInput = useRef<TextInput>(null);
    const [setsValue, setSetsValue] = useState('4');
    const setsInput = useRef<TextInput>(null);
    const addSetsToNewFreeWorkout = () => {
      for (let i = 0; i < Number.parseInt(setsValue, 10); i++) {
        const set = createExerciseSet(exercise.id);
        set.setReps(Number.parseInt(repetitionsValue, 10));
        set.setWeight(Number.parseFloat(weightValue));
        newFreeWorkout.addExerciseSet(set);
      }
      onPressAdd();
    };

    const onSubmitEditingRepetitionInput = () => {
      weightInput.current && weightInput.current.focus();
    };

    const onSubmitEditingWeightInput = () => {
      setsInput.current && setsInput.current.focus();
    };

    return (
      <Modal isVisible={isVisible} onBackdropPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>{exercise.name}</Title>
            <TouchableOpacity onPress={onPressClose}>
              <CrossIcon />
            </TouchableOpacity>
          </Header>
          <Row>
            <ItemTitle>{t('trainingCreation.repetitions')}</ItemTitle>
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
            <ItemTitle>{t('trainingCreation.kilograms')}</ItemTitle>
            <NumberInput
              ref={weightInput}
              value={weightValue}
              onChangeText={setWeightValue}
              keyboardType="numeric"
              maxLength={8}
              returnKeyType="next"
              onSubmitEditing={onSubmitEditingWeightInput}
              blurOnSubmit={false}
            />
          </Row>
          <Separator />
          <Row>
            <ItemTitle>{t('trainingCreation.nbSets')}</ItemTitle>
            <NumberInput
              ref={setsInput}
              value={setsValue}
              onChangeText={setSetsValue}
              keyboardType="number-pad"
              maxLength={2}
              returnKeyType="go"
              onSubmitEditing={Keyboard.dismiss}
            />
          </Row>
        </Container>
        <Spacer height={2} />
        <Button onPress={addSetsToNewFreeWorkout} title={t('trainingCreation.add')} />
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
