import { useContext } from 'react';
import { RootStoreType } from '@woap/mobx_new/types';
import { StoreContext } from '@woap/mobx_new/provider';

export const useStore = (): RootStoreType => {
  const store = useContext(StoreContext);

  if (!store) {
    throw Error('Store is null or undefined');
  }

  return store;
};
