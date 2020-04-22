import React, { FunctionComponent, useState } from 'react';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import styled from '@woap/utils/styled-components';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';
import { Button } from '@woap/components/Button';
import { FormField } from '@woap/components/FormField';
import { Spacer } from '@woap/components/Spacer';
import { colors } from '@woap/styles/colors';

interface Props {
  isVisible: boolean;
  onPressClose: () => void;
  onPressAdd: (newTag: string) => void;
}

export const NewTagModal: FunctionComponent<Props> = ({ isVisible, onPressClose, onPressAdd }) => {
  const [newTag, setNewTag] = useState('');
  const { t } = useTranslation('trainingCreation');

  return (
    <Modal isVisible={isVisible} onBackdropPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>{t('trainingTags.newTag')}</Title>
          <TouchableOpacity onPress={onPressClose}>
            <CrossIcon />
          </TouchableOpacity>
        </Header>
        <Spacer height={2} />
        <FormField
          placeholder="PPL, tabata, street workout..."
          value={newTag}
          onChangeText={setNewTag}
        />
        <Spacer height={2} />
      </Container>
      <Spacer height={2} />
      <Button
        onPress={() => {
          onPressAdd(newTag);
          setNewTag('');
          onPressClose();
        }}
        title={t('trainingTags.create')}
      />
    </Modal>
  );
};

const Container = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: theme.border.radius.m,
}));

const Header = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
})(({ theme }) => ({
  flexDirection: 'row',
  padding: theme.margin.x2,
  borderTopLeftRadius: theme.border.radius.m,
  borderTopRightRadius: theme.border.radius.m,
  alignItems: 'center',
}));

const Title = styled.Text(({ theme }) => ({
  flex: 1,
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
