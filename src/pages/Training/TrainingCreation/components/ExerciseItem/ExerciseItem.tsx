import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';
import { PlusIcon } from '@woap/components/Icons/PlusIcon';

interface Props {
  title: string;
  onPress: () => void;
  onLongPress: () => void;
  selected: boolean;
}

export const ExerciseItem: FunctionComponent<Props> = ({
  selected,
  title,
  onPress,
  onLongPress,
}) => {
  return (
    <Container selected={selected} onPress={onPress} onLongPress={onLongPress}>
      <Title>{title}</Title>
      <View style={{ transform: [{ rotate: selected ? '45deg' : '0deg' }] }}>
        <PlusIcon color={colors.black} />
      </View>
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ selected: boolean }>(({ selected, theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: theme.margin.x2,
  borderWidth: selected ? 2 : 0,
  padding: theme.margin.x3,
  backgroundColor: theme.colors.white,
  borderRadius: 8,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
}));
