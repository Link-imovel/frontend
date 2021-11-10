import { createModel } from '@rematch/core';

import { CreateUser, Store } from './store.interface';
import { RootModel } from '@store/models';

const store = createModel<RootModel>()({
  state: {
    createUser: {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        mobile: '',
        registry: '',
        creci: '',
        birthday: '',
      },
      valid: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        phone: false,
        mobile: false,
        registry: false,
        creci: false,
        birthday: false,
      },
    },
  },
  reducers: {
    createUser: (state: Store, data: Partial<CreateUser>): Store => {
      return { ...state, createUser: { ...state.createUser, ...data } };
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
