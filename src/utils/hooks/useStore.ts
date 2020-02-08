import { useContext } from 'react';

import { SelectorFunction, RootStoreType } from '../../modules/types';
import { StoreContext } from '../../modules/provider';

export const useStore = <T>(selector?: SelectorFunction<T>): T | RootStoreType => {
  const store = useContext(StoreContext);

  if (selector) return selector(store);

  return store;
};
