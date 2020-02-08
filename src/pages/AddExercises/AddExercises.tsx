import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import { useNavigation } from 'react-navigation-hooks';

import { ExercicesToAddListItem } from '../../components/ExercicesToAddListItem';
import { exercisesSelector } from '../../modules/selectors';
import { useStore } from '../../utils/hooks/useStore';
import styled from '../../utils/styled-components';
import { colors } from '../../styles/colors';

export const AddExercises: FunctionComponent = observer(() => {
  const exercises = useStore(exercisesSelector);
  const navigation = useNavigation();

  const closeModal = () => navigation.goBack();

  const renderItem = ({ item }) => (
    <ExercicesToAddListItem name={item.name} checked="checked" onPress={() => {}} />
  );

  return (
    <Container>
      <Header>
        <ButtonContainer />
        <Title>Exercices</Title>
        <ButtonContainer onPress={closeModal}>
          <CloseButton>X</CloseButton>
        </ButtonContainer>
      </Header>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        style={{ backgroundColor: colors.white }}
      />
      <ValidateButton onPress={closeModal}>
        <ValidateButtonTitle>Valider</ValidateButtonTitle>
      </ValidateButton>
    </Container>
  );
});

const Container = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: props.theme.colors.black,
}));

const Header = styled.View(props => ({
  flexDirection: 'row',
  backgroundColor: props.theme.colors.black,
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Title = styled.Text(props => ({
  fontSize: 24,
  fontWeight: 'bold',
  color: props.theme.colors.white,
  textAlign: 'center',
  padding: props.theme.margin.x2,
}));

const CloseButton = styled.Text(props => ({
  fontSize: 24,
  fontWeight: 'bold',
  color: props.theme.colors.white,
}));

const ButtonContainer = styled.TouchableOpacity(props => ({
  margin: props.theme.margin.x2,
}));

const ValidateButton = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  backgroundColor: props.theme.colors.black,
}));

const ValidateButtonTitle = styled.Text(props => ({
  fontSize: 24,
  fontWeight: 'bold',
  color: props.theme.colors.white,
  textAlign: 'center',
}));
