import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { TextInput } from 'react-native-gesture-handler';

import styled from '../../lib/styled-components';
import { useStore } from '../../modules/rootStore';
import { userSelector } from '../../modules/user/selectors';

export const Home = observer(() => {
  const user = useStore(userSelector);
  const [userName, setUserName] = useState();
  console.log(user);

  return (
    <Container>
      <AppTitle>Workout app</AppTitle>
      <TextInput onChangeText={setUserName} placeholder="userName" value={userName} />
      <AppTitle>{user.name}</AppTitle>
      <Button
        title="Valider"
        onPress={() => {
          user.setName(userName);
        }}
      />
    </Container>
  );
});

const AppTitle = styled(Text)`
  font-size: 24;
  text-align: center;
  margin: ${({ theme }): number => theme.margin.x3}px;
`;

const Container = styled(View)`
  flex-grow: 1;
`;
