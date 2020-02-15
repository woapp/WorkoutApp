import { useContext } from 'react';

import { RootStoreType } from '../../mobx/types';
import { StoreContext } from '../../mobx/provider';

export const useStore = (): RootStoreType => {
  const store = useContext(StoreContext);

  if (!store) {
    throw Error('Store is null or undefined');
  }

  return store;
};
