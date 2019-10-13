import React, { FunctionComponent, useContext } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import styled from '../../lib/styled-components';
import { CounterStoreContext } from '../../modules/counterStore';
import { useStore } from '../../modules/types';

export const Home = observer(() => {
  const store = useContext(CounterStoreContext);
  console.log(store.count);
  const { user } = useStore(({ user }) => ({ user }));
  console.log(user);

  return (
    <Container>
      <AppTitle>Workout app</AppTitle>
      <AppTitle>{user.name}</AppTitle>
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
