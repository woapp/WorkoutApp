import React, { FunctionComponent, useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Modal } from '@woap/components/Modal';
import styled from '@woap/utils/styled-components';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';

interface Props {
  isVisible: boolean;
  onPressClose: () => void;
  exerciseSet: ExerciseSetType;
}

export const UpdateSetModal: FunctionComponent<Props> = observer(
  ({ onPressClose, exerciseSet, isVisible }) => {
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
      <Modal
        isVisible={isVisible}
        title={exerciseSet.exercise.name}
        onPressClose={onPressClose}
        onPressValidate={updateSet}
        validateLabel={t('trainingSets.update')}
      >
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
