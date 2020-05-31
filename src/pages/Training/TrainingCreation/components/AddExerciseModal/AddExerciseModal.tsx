import React, { FunctionComponent, useState, useRef } from 'react';
import { Keyboard, TextInput } from 'react-native';
import styled from '@woap/utils/styled-components';
import { ExerciseSnapshotIn } from '@woap/mobx/exercise';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import { createExerciseSet } from '@woap/mobx/exerciseSet/constructor';
import { useTranslation } from 'react-i18next';
import { Modal } from '@woap/components/Modal';

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
      <Modal
        isVisible={isVisible}
        title={exercise.name || ''}
        validateLabel={t('trainingCreation.add')}
        onPressValidate={addSetsToNewFreeWorkout}
        onPressClose={onPressClose}
      >
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
      </Modal>
    );
  }
);

const NumberInput = styled.TextInput(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
  color: theme.colors.black,
  flex: 1,
  textAlign: 'right',
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
