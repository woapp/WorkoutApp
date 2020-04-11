import { types } from 'mobx-state-tree';

import { RootModel } from './rootModel';
import { rootActions } from './actions';

export const RootStore = types.model(RootModel).actions(rootActions);
