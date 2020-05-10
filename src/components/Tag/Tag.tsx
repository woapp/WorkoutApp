import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { TagType } from '@woap/mobx/tag';

interface Props {
  tag: TagType;
  onPress?: () => void;
}

export const Tag: FunctionComponent<Props> = ({ tag, onPress }) => (
  <Container onPress={onPress}>{tag.name}</Container>
);

const Container = styled.Text(({ theme }) => ({
  paddingVertical: theme.margin.x1,
  paddingHorizontal: theme.margin.x2,
  marginRight: theme.margin.x2,
  marginVertical: theme.margin.x1,
  borderColor: theme.colors.greyScale[10],
  borderWidth: theme.border.width.s,
  borderRadius: theme.border.radius.m,
  color: theme.colors.greyScale[10],
}));
