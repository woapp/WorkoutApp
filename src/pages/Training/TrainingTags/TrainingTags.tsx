import React, { FunctionComponent, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { Background } from '@woap/components/Background';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { NextButton } from '@woap/components/NextButton';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { RootNavigatorParamList } from '@woap/navigation';
import { Routes } from '@woap/navigation/routes';

import { Header } from '../components/Header';

import { Tag } from './components/Tag';

type TrainingTagsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TrainingNavigator>,
  StackNavigationProp<TrainingNavigatorParamList, Routes.TrainingTags>
>;

type Props = {
  navigation: TrainingTagsScreenNavigationProp;
};
const defaultTags = [
  { id: 1, selected: false, name: 'Morning routine' },
  { id: 2, selected: false, name: 'outside' },
  { id: 3, selected: false, name: 'Inside' },
  { id: 4, selected: false, name: 'Equipment' },
  { id: 5, selected: false, name: 'Yoga' },
  { id: 6, selected: false, name: 'Athlete' },
  { id: 7, selected: false, name: 'Quick' },
  { id: 8, selected: false, name: 'Refine' },
  { id: 9, selected: false, name: 'Mobility' },
  { id: 10, selected: false, name: 'Warming-Up' },
  { id: 11, selected: false, name: 'Cladding' },
  { id: 12, selected: false, name: 'Endurance' },
  { id: 13, selected: false, name: 'Muscle Building' },
];
export const TrainingTags: FunctionComponent<Props> = ({ navigation }) => {
  const goToDashBoardScreen = () => navigation.navigate(Routes.TabNavigator);

  const [tags, setTags] = useState(defaultTags);
  const onTagPressed = id => () => {
    setTags(previousTags =>
      previousTags.map(tag => ({ ...tag, selected: tag.id === id ? !tag.selected : tag.selected }))
    );
  };

  return (
    <Background>
      <Container>
        <Header title="New Training" />
        <Spacer height={3} />
        <Title>Choose at least one tag</Title>
        <Spacer height={2} />
        <TagsContainer>
          {tags.map(tag => (
            <Tag {...tag} key={tag.id} onPress={onTagPressed(tag.id)} />
          ))}
        </TagsContainer>
        <NextButton
          onPress={goToDashBoardScreen}
          disabled={tags.filter(tag => tag.selected).length === 0}
        />
      </Container>
    </Background>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
}));

const TagsContainer = styled.View({ flexWrap: 'wrap', flexDirection: 'row' });
