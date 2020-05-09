import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { Routes } from '@woap/navigation/routes';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import styled from '@woap/utils/styled-components';
import { AnimatedMenu } from '@woap/pages/Home/Dashboard/components/AnimatedMenu';
import { RootNavigatorParamList } from '@woap/navigation';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { WhistleIcon } from '@woap/components/Icons/WhistleIcon';
import { DumbbellIcon } from '@woap/components/Icons/DumbbellIcon';
import { useTranslation } from 'react-i18next';
import { useStore } from '@woap/utils/hooks/useStore';
import { TextBody } from '@woap/components/Texts';
import { ArrowForwardIcon } from '@woap/components/Icons/ArrowForwardIcon';
import { Spacer } from '@woap/components/Spacer';
import { Alert, View } from 'react-native';
import { TrainingType } from '@woap/mobx/training';
import { FlatList } from 'react-native-gesture-handler';
import { useSearch } from '@woap/hooks/useSearch';
import { SearchBar } from '@woap/components/SearchBar';
import { Tag } from '@woap/components/Tag';

import { NoTraining } from './components/NoTraining';
import { FavoriteTrainingCard } from './components/FavoriteTrainingCard';

type DashboardScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TabNavigator>,
  CompositeNavigationProp<
    MaterialTopTabNavigationProp<TabNavigatorParamList, Routes.ProfileNavigator>,
    StackNavigationProp<HomeNavigatorParamList, Routes.Dashboard>
  >
>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

export const Dashboard: FunctionComponent<Props> = observer(({ navigation }) => {
  const store = useStore();
  const { t } = useTranslation('home');
  const { matchSearch, filter, setFilter } = useSearch();

  const filterTrainingByTagOrName = (training: TrainingType) =>
    matchSearch(training.name) ||
    (training.tags && training.tags.some(tag => matchSearch(tag.name)));

  const onTagPress = (tagName: string) => () => setFilter(tagName);

  const onCreateNewTraining = () => {
    store.initializeNewFreeWorkout();
    navigation.navigate(Routes.TrainingNavigator);
  };

  const onCreateNewExercise = () => {
    store.initializeNewExercise();
    navigation.navigate(Routes.ExerciseNavigator);
  };

  const onPressTraining = (training: TrainingType) => () => {
    navigation.navigate(Routes.OngoingTraining, {
      screen: Routes.OngoingTraining,
      params: { training },
    });
  };

  const onDeleteTraining = (training: TrainingType) => () => {
    Alert.alert(t('ongoingTraining.deleteAlert.title'), t('ongoingTraining.deleteAlert.content'), [
      { text: t('ongoingTraining.deleteAlert.cancel'), style: 'cancel' },
      {
        text: t('ongoingTraining.deleteAlert.delete'),
        style: 'destructive',
        onPress: () => {
          store.deleteTraining(training);
        },
      },
    ]);
  };

  const renderSearchedTags = () => {
    if (filter.length > 0) {
      return (
        <SearchedTagsRow>
          {store.tags
            .filter(tag => matchSearch(tag.name))
            .map(tag => (
              <Tag key={tag.id} onPress={onTagPress(tag.name)} tag={tag} />
            ))}
        </SearchedTagsRow>
      );
    }

    return null;
  };

  const renderFavoriteTrainingCard = ({ item: training }: { item: TrainingType }) => (
    <FavoriteTrainingCard
      training={training}
      onDeleteTraining={onDeleteTraining(training)}
      onPressTraining={onPressTraining(training)}
    />
  );

  const renderClassicTrainingCard = ({ item: training }: { item: TrainingType }) => (
    <TrainingContainer
      key={training.id}
      onPress={onPressTraining(training)}
      onLongPress={onDeleteTraining(training)}
    >
      <TrainingName>{training.name}</TrainingName>
      <ArrowForwardIcon />
    </TrainingContainer>
  );

  return (
    <Container>
      {store.trainings.length === 0 ? (
        <NoTraining />
      ) : (
        <>
          <Spacer height={1} />
          <SearchBar
            value={filter}
            onChangeText={setFilter}
            placeholder={t('dashboard.searchPlaceholder')}
          />
          {renderSearchedTags()}
          {store.favoriteTrainings.filter(filterTrainingByTagOrName).length > 0 && (
            <CategoryTitle>{t('dashboard.favoriteTrainings')}</CategoryTitle>
          )}
          <View>
            <FlatList
              horizontal
              style={{ flex: 0 }}
              data={store.favoriteTrainings.filter(filterTrainingByTagOrName)}
              renderItem={renderFavoriteTrainingCard}
            />
          </View>
          <CategoryTitle>{t('dashboard.allTrainings')}</CategoryTitle>
          <FlatList
            style={{ flex: 1 }}
            data={store.trainings.toJS().filter(filterTrainingByTagOrName)}
            renderItem={renderClassicTrainingCard}
          />
        </>
      )}

      <MenuContainer>
        <AnimatedMenu
          items={[
            {
              title: t('dashboard.newTraining'),
              Icon: WhistleIcon,
              onPress: onCreateNewTraining,
            },
            {
              title: t('dashboard.newExercise'),
              Icon: DumbbellIcon,
              onPress: onCreateNewExercise,
            },
          ]}
        />
      </MenuContainer>
    </Container>
  );
});

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background.black,
  padding: theme.margin.x2,
}));

const MenuContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.margin.x2,
  right: theme.margin.x2,
}));

const CategoryTitle = styled(TextBody)(({ theme }) => ({
  color: theme.colors.white,
  marginTop: theme.margin.x3,
  marginBottom: theme.margin.x2,
}));

const TrainingName = styled.Text(({ theme }) => ({
  color: theme.colors.white,
  fontSize: 16,
}));

const TrainingContainer = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: '#3D3D55',
  padding: theme.margin.x2,
  borderRadius: theme.border.radius.s + 2,
  marginBottom: theme.margin.x2,
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

const SearchedTagsRow = styled.View(({ theme }) => ({
  flexDirection: 'row',
  marginTop: theme.margin.x1,
}));
