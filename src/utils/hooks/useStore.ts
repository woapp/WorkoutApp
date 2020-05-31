import { useContext } from 'react';
import { RootStoreType } from '@woap/mobx/types';
import { StoreContext } from '@woap/mobx/provider';

export const useStore = (): RootStoreType => {
  const store = useContext(StoreContext);

  if (!store) {
    throw Error('Store is null or undefined');
  }

  return store as RootStoreType;
};
