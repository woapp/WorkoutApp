import { useContext } from 'react';

import { RootStoreType } from '../../modules/types';
import { StoreContext } from '../../modules/provider';

export const useStore = (): RootStoreType => {
  const store = useContext(StoreContext);

  if (!store) {
    throw Error('Store is null or undefined');
  }

  return store;
};
