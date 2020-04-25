import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

import { FrontBodyVisualisation } from './components/FrontBodyVisualisation';
import { BackBodyVisualisation } from './components/BackBodyVisualisation';

import { Ratios, OnPressMuscles } from '.';

interface Props {
  ratios?: Ratios;
  onPressMuscles?: OnPressMuscles;
}

export const BodyVisualisation: FunctionComponent<Props> = ({ ratios, onPressMuscles }) => {
  return (
    <Row>
      <FrontBodyVisualisation ratios={ratios} onPressMuscles={onPressMuscles} />
      <BackBodyVisualisation ratios={ratios} onPressMuscles={onPressMuscles} />
    </Row>
  );
};

const Row = styled.View({ flexDirection: 'row', alignItems: 'flex-end' });
