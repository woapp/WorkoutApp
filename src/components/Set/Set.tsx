import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

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
  const useOnChangeWithString = (onChange: (value: number) => void) => (value: string) => {
    const number = Number(value);
    if (!isNaN(number)) {
      onChange(number);
    }
  };

  return (
    <Container pointerEvents="auto">
      <RankContainer>
        <Text>{rank}</Text>
      </RankContainer>
      <NumberInput
        value={`${nbReps}`}
        onChangeText={useOnChangeWithString(onChangeReps)}
        keyboardType="number-pad"
        maxLength={3}
      />
      <Label>reps</Label>
      <Separator>/</Separator>
      <NumberInput
        value={`${weight}`}
        onChangeText={useOnChangeWithString(onChangeWeight)}
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
  padding: props.theme.margin.x1,
  borderBottomColor: props.theme.colors.lightGrey,
  borderBottomWidth: 1,
}));

const RankContainer = styled.View(props => ({
  marginHorizontal: props.theme.margin.x1,
  width: 30,
  height: 30,
  borderRadius: 15,
  borderWidth: 2,
  borderColor: props.theme.colors.black,
  justifyContent: 'center',
  alignItems: 'center',
}));

const NumberInput = styled.TextInput({
  width: 50,
  fontSize: 20,
  textAlign: 'center',
});

const Label = styled.Text({
  fontSize: 20,
});

const Separator = styled.Text({
  fontSize: 30,
  textAlign: 'center',
  flex: 1,
});
