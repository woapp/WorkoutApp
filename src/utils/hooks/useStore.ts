import { useContext } from 'react';

import { SelectorFunction } from '../../modules/types';
import { StoreContext } from '../../modules/provider';

export const useStore = <T>(selector: SelectorFunction<T>): T => {
  const store = useContext(StoreContext);

  return selector(store);
};
