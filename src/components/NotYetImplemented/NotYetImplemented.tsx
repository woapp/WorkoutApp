import React, { FunctionComponent } from 'react';
import { View, Text, Image } from 'react-native';
import styled from '@woap/utils/styled-components';

import images from '../../assets/images';

type INotYetImplemented = {
  pageTitle: string;
};

const ILLUSTRATION_WIDTH = '70%';
const ILLUSTRATION_HEIGHT = '50%';

export const NotYetImplemented: FunctionComponent<INotYetImplemented> = ({ pageTitle }) => {
  return (
    <Container>
      <Illustration source={images.workInProgress} resizeMode="contain" />
      <Text>We are currently working on the page {pageTitle}</Text>
    </Container>
  );
};

const Container = styled(View)`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Illustration = styled(Image)`
  align-self: center;
  height: ${ILLUSTRATION_HEIGHT};
  width: ${ILLUSTRATION_WIDTH};
`;
