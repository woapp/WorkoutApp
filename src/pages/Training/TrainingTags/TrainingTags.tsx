import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { Background } from '@woap/components/Background';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { NextButton } from '@woap/components/NextButton';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { RootNavigatorParamList } from '@woap/navigation';
import { Routes } from '@woap/navigation/routes';
import { Header } from '@woap/components/Header';
import { useStore } from '@woap/utils/hooks/useStore';
import { createTag } from '@woap/mobx/tag/constructor';
import { Tag } from '@woap/components/Tag';

import { NewTagModal } from './components/NewTagModal';

type TrainingTagsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TrainingNavigator>,
  StackNavigationProp<TrainingNavigatorParamList, Routes.TrainingTags>
>;

type Props = {
  navigation: TrainingTagsScreenNavigationProp;
};

export const TrainingTags: FunctionComponent<Props> = observer(({ navigation }) => {
  const { tags, newFreeWorkout, saveNewFreeWorkout, addTag, addDefaultTags } = useStore();
  addDefaultTags();

  if (!newFreeWorkout) return null;
  const [isNewTagModalVisible, setIsNewTagModalVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const goToDashBoardScreen = () => {
    newFreeWorkout.setTags(tags.filter(tag => selectedTags.includes(tag.id)));
    saveNewFreeWorkout();
    navigation.navigate(Routes.TabNavigator);
  };

  const onTagPressed = (id: string) => () => {
    const index = selectedTags.indexOf(id);
    if (index >= 0) {
      setSelectedTags(previousSelectedTags => previousSelectedTags.filter(tag => tag !== id));
    } else {
      setSelectedTags(previousSelectedTags => [...previousSelectedTags, id]);
    }
  };

  const closeNewTagModal = () => setIsNewTagModalVisible(false);
  const openNewTagModal = () => setIsNewTagModalVisible(true);

  const addNewTag = (newTag: string) => {
    addTag(createTag(newTag));
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
            <Tag
              selected={selectedTags.includes(tag.id)}
              name={tag.name}
              key={tag.id}
              onPress={onTagPressed(tag.id)}
            />
          ))}
          <Tag dashed onPress={openNewTagModal} name="+ new tag" selected={false} />
        </TagsContainer>
        <NextButton onPress={goToDashBoardScreen} disabled={selectedTags.length === 0} />
      </Container>
      <NewTagModal
        isVisible={isNewTagModalVisible}
        onPressClose={closeNewTagModal}
        onPressAdd={addNewTag}
      />
    </Background>
  );
});

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
