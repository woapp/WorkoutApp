import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';

type SetProps = {
  rank: number;
  nbReps: number;
  onChangeReps: (value: number) => void;
  weight: number;
  onChangeWeight: (value: number) => void;
};

export const Set: FunctionComponent<SetProps> = ({
  rank,
  nbReps,
  onChangeReps,
  weight,
  onChangeWeight,
}) => {
  const onChangeWithString = (onChange: (value: number) => void) => (value: string) => {
    const number = Number(value);
    if (!isNaN(number)) {
      onChange(number);
    }
  };

  return (
    <Container pointerEvents="auto">
      <RankContainer>
        <Rank>{rank}</Rank>
      </RankContainer>
      <NumberInput
        value={nbReps.toString()}
        onChangeText={onChangeWithString(onChangeReps)}
        keyboardType="number-pad"
        maxLength={3}
      />
      <Label>reps</Label>
      <Separator>/</Separator>
      <NumberInput
        value={weight.toString()}
        onChangeText={onChangeWithString(onChangeWeight)}
        keyboardType="number-pad"
        maxLength={3}
      />
      <Label>kg</Label>
    </Container>
  );
};

const Container = styled.View(props => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: props.theme.margin.x1,
  paddingVertical: props.theme.margin.x3,
  borderBottomColor: props.theme.colors.greyScale[70],
  borderBottomWidth: 2,
}));

const RankContainer = styled.View(props => ({
  marginHorizontal: props.theme.margin.x1,
  width: 34,
  height: 34,
  borderRadius: 17,
  borderWidth: 2,
  borderColor: props.theme.colors.cyan,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Rank = styled.Text(props => ({
  fontSize: 24,
  color: props.theme.colors.greyScale[10],
  fontWeight: 'bold',
}));

const NumberInput = styled.TextInput(props => ({
  width: 50,
  fontSize: 24,
  textAlign: 'center',
  fontWeight: 'bold',
  color: props.theme.colors.greyScale[10],
}));

const Label = styled.Text(props => ({
  fontSize: 24,
  color: props.theme.colors.greyScale[10],
  fontWeight: 'bold',
}));

const Separator = styled.Text(props => ({
  fontSize: 30,
  textAlign: 'center',
  fontWeight: 'bold',
  flex: 1,
  color: props.theme.colors.greyScale[10],
}));
