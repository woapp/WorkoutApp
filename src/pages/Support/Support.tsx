import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

export const Support: FunctionComponent = () => {
  return <Container />;
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  justifyContent: 'space-between',
  backgroundColor: theme.colors.background.black,
}));
