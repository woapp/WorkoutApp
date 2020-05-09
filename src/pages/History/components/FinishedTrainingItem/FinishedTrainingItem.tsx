import React, { FunctionComponent } from 'react';
import { FinishedTrainingType } from '@woap/mobx/finishedTraining';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { Tag } from '@woap/components/Tag';

interface Props {
  training: FinishedTrainingType;
}

export const FinishedTrainingItem: FunctionComponent<Props> = ({ training }) => {
  return (
    <Container>
      <Header>
        <TrainingName>{training.name}</TrainingName>
        <Date>{training.date.toLocaleDateString()}</Date>
      </Header>
      <Spacer height={1} />
      <TagRow>
        {training.tags.map(tag => (
          <Tag tag={tag} key={tag.id} />
        ))}
      </TagRow>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.background.grey,
  padding: theme.margin.x1 + 4,
  borderRadius: theme.border.radius.m,
  marginBottom: theme.margin.x2,
}));

const Header = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const Date = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  fontWeight: 'bold',
  color: theme.colors.white,
}));

const TrainingName = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
  color: theme.colors.white,
  flex: 1,
}));

const TagRow = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflow: 'visible',
});
