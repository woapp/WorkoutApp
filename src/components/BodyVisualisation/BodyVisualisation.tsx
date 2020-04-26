import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

import { FrontBodyVisualisation } from './components/FrontBodyVisualisation';
import { BackBodyVisualisation } from './components/BackBodyVisualisation';

import { Ratios, OnPressMuscles } from '.';

interface Props {
  ratios?: Ratios;
  onPressMuscles?: OnPressMuscles;
  width: number;
  musclesBackgroundColor?: string;
  selectedMusclesColor?: string;
}

export const BodyVisualisation: FunctionComponent<Props> = ({
  ratios,
  onPressMuscles,
  width,
  musclesBackgroundColor,
  selectedMusclesColor,
}) => {
  return (
    <Row width={width}>
      <FrontBodyVisualisation
        musclesBackgroundColor={musclesBackgroundColor}
        selectedMusclesColor={selectedMusclesColor}
        ratios={ratios}
        onPressMuscles={onPressMuscles}
        width={width * 0.45}
      />
      <BackBodyVisualisation
        musclesBackgroundColor={musclesBackgroundColor}
        selectedMusclesColor={selectedMusclesColor}
        ratios={ratios}
        onPressMuscles={onPressMuscles}
        width={width * 0.45}
      />
    </Row>
  );
};

const Row = styled.View<{ width: number }>(({ width }) => ({
  width,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
}));
