import { createModel } from '@rematch/core';

import {
  CreateAddress,
  CreateClient,
  CreateHomeDetail,
  CreateUser,
  Store,
} from './store.interface';
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
    createAddress: {
      address: {
        street: '',
        street2: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        zipcode: '',
        ibge: '',
      },
      valid: {
        street: false,
        street2: false,
        number: false,
        neighbourhood: false,
        city: false,
        state: false,
        zipcode: false,
        ibge: false,
      },
    },
    createClient: {
      client: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        mobile: '',
        registry: '',
      },
      valid: {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        mobile: false,
        registry: false,
      },
    },
    createHomeDetail: {
      homedetail: {
        totalArea: '',
        constructionYear: '',
        ref: '',
        value: '',
      },
      valid: {
        totalArea: false,
        constructionYear: false,
        ref: false,
        value: false,
      },
    },
  },
  reducers: {
    createUser: (state: Store, data: Partial<CreateUser>): Store => {
      return { ...state, createUser: { ...state.createUser, ...data } };
    },
    createAddress: (state: Store, data: Partial<CreateAddress>): Store => {
      return { ...state, createAddress: { ...state.createAddress, ...data } };
    },
    createClient: (state: Store, data: Partial<CreateClient>): Store => {
      return { ...state, createClient: { ...state.createClient, ...data } };
    },
    createHomeDetail: (
      state: Store,
      data: Partial<CreateHomeDetail>
    ): Store => {
      return {
        ...state,
        createHomeDetail: { ...state.createHomeDetail, ...data },
      };
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
