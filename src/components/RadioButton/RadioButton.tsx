import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

interface Props {
  selected?: boolean;
  onSelect: () => void;
  label: string;
}

const SIZE = 24;

export const RadioButton: FunctionComponent<Props> = ({ selected = false, onSelect, label }) => {
  return (
    <Row onPress={onSelect}>
      <OuterCircle selected={selected}>{selected && <InnerCircle />}</OuterCircle>
      <Label>{label}</Label>
    </Row>
  );
};

const Row = styled.TouchableOpacity(({ theme }) => ({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: theme.margin.x1,
  backgroundColor: '#00000000',
}));

const OuterCircle = styled.View<{ selected: boolean }>(({ theme, selected }) => ({
  height: SIZE,
  width: SIZE,
  borderRadius: SIZE / 2,
  borderWidth: 3,
  borderColor: selected ? theme.colors.green : theme.colors.greyScale[40],
  backgroundColor: '#00000000',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InnerCircle = styled.View(({ theme }) => ({
  height: SIZE / 2,
  width: SIZE / 2,
  borderRadius: SIZE / 4,
  backgroundColor: theme.colors.green,
  alignItems: 'center',
  justifyContent: 'center',
}));

const Label = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  marginLeft: theme.margin.x1,
  fontWeight: 'bold',
}));
