import { createContext, useContext } from 'react';

import { RootStore } from './rootModel';

export const rootStore = RootStore.create({
  user: { name: 'toto' },
});

const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;

export type RootStoreType = typeof rootStore;

export const useStore = <T>(selector?: (store: RootStoreType) => T): T | RootStoreType => {
  const store = useContext(StoreContext);

  if (typeof selector !== 'undefined') {
    return selector(store);
  }

  return store;
};
