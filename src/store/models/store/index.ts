import { createModel } from '@rematch/core';

import { Store } from './store.interface';
import { RootModel } from '@store/models';

const store = createModel<RootModel>()({
  state: {} as Store,
  reducers: {
    update: (state: Store, data: Partial<Store>): Store => {
      return { ...state, ...data };
    },
    clear: (): Store => {
      return {} as Store;
    },
    hydrate: (state: Store, data: Store): Store => {
      return { ...state, ...data };
    },
  },
});

export { store };
