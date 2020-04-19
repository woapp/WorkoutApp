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
import { Alert, Dimensions, View } from 'react-native';
import { TrainingType } from '@woap/mobx/training';
import { FlatList } from 'react-native-gesture-handler';
import { MuscleGroup } from '@woap/mobx/types';

import { NoTraining } from './components/NoTraining';
import { MuscleGroupIcon } from './components/MuscleGroupIcon';

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

const { width: screenWidth } = Dimensions.get('window');

export const Dashboard: FunctionComponent<Props> = observer(({ navigation }) => {
  const store = useStore();
  const { t } = useTranslation('home');

  const onCreateNewTraining = () => {
    store.initializeNewFreeWorkout();
    navigation.navigate(Routes.TrainingNavigator);
  };

  const onCreateNewExercise = () => navigation.navigate(Routes.ExerciseNavigator);

  const onPressTraining = (training: TrainingType) => () => {
    navigation.navigate(Routes.OngoingTrainingPreview, { training });
  };

  const onDeleteTraining = (training: TrainingType) => () => {
    Alert.alert(
      t('ongoingTrainingPreview.deleteAlert.title'),
      t('ongoingTrainingPreview.deleteAlert.content'),
      [
        { text: t('ongoingTrainingPreview.deleteAlert.cancel'), style: 'cancel' },
        {
          text: t('ongoingTrainingPreview.deleteAlert.delete'),
          style: 'destructive',
          onPress: () => {
            store.deleteTraining(training);
          },
        },
      ]
    );
  };

  return (
    <Container>
      {store.trainings.length === 0 ? (
        <NoTraining />
      ) : (
        <>
          <Spacer height={2} />
          <CategoryTitle>{t('dashboard.favoriteTrainings')}</CategoryTitle>
          <Spacer height={2} />
          <View>
            <FlatList
              horizontal
              style={{ flex: 0 }}
              data={store.favoriteTrainings}
              renderItem={({ item: training }: { item: TrainingType }) => (
                <FavoriteTrainingCard
                  key={training.id}
                  onPress={onPressTraining(training)}
                  onLongPress={onDeleteTraining(training)}
                >
                  <MuscleGroupsRow>
                    {training.mainMuscleGroups.map((muscleGroup: MuscleGroup) => (
                      <MuscleGroupIcon key={muscleGroup} muscleGroup={muscleGroup} />
                    ))}
                  </MuscleGroupsRow>
                  <FavoriteTrainingName>{training.name}</FavoriteTrainingName>
                  <TagRow>
                    {training.tags.map(tag => (
                      <Tag key={tag.id}>{tag.name}</Tag>
                    ))}
                  </TagRow>
                </FavoriteTrainingCard>
              )}
            />
          </View>

          <Spacer height={3} />
          <CategoryTitle>{t('dashboard.allTrainings')}</CategoryTitle>
          <Spacer height={2} />
          <FlatList
            style={{ flex: 1 }}
            data={store.trainings}
            renderItem={({ item: training }: { item: TrainingType }) => (
              <TrainingContainer
                key={training.id}
                onPress={onPressTraining(training)}
                onLongPress={onDeleteTraining(training)}
              >
                <TrainingName>{training.name}</TrainingName>
                <ArrowForwardIcon />
              </TrainingContainer>
            )}
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

const FavoriteTrainingCard = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: '#3D3D55',
  padding: theme.margin.x2,
  borderRadius: theme.border.radius.s + 2,
  marginRight: theme.margin.x2,
  width: screenWidth * 0.7,
  flex: 1,
  overflow: 'hidden',
}));

const TagRow = styled.View({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflow: 'visible',
});

const Tag = styled.Text(({ theme }) => ({
  paddingVertical: theme.margin.x1,
  paddingHorizontal: theme.margin.x2,
  marginRight: theme.margin.x2,
  marginVertical: theme.margin.x1,
  borderColor: theme.colors.greyScale[10],
  borderWidth: theme.border.width.s,
  borderRadius: theme.border.radius.m,
  color: theme.colors.greyScale[10],
}));

const FavoriteTrainingName = styled.Text(({ theme }) => ({
  color: theme.colors.white,
  fontSize: 20,
  fontWeight: 'bold',
}));

const MuscleGroupsRow = styled.View(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflow: 'visible',
  marginBottom: theme.margin.x2,
}));
