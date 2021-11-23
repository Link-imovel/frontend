import { createModel } from '@rematch/core';

import {
  CreateAddress,
  CreateClient,
  CreateHomeDetail,
  CreateSetPassword,
  CreateUser,
  Store,
  Login,
  ListAnnouncement,
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
        zip: '',
        ibge: '',
      },
      valid: {
        street: false,
        street2: false,
        number: false,
        neighbourhood: false,
        city: false,
        state: false,
        zip: false,
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
        title: '',
        totalArea: '',
        buildAt: '',
        ref: '',
        value: '',
        room: '',
        bedroom: '',
        bathroom: '',
        kitchen: '',
        garage: '',
        serviceArea: '',
        description: '',
        type: '',
        images: [
          {
            image: '',
          },
        ],
      },
      valid: {
        title: false,
        totalArea: false,
        buildAt: false,
        ref: false,
        value: false,
        room: false,
        bedroom: false,
        bathroom: false,
        kitchen: false,
        garage: false,
        serviceArea: false,
        description: false,
        type: false,
        images: true,
      },
    },
    createSetPassword: {
      setpassword: {
        newPassword: '',
        samePassword: '',
      },
      valid: {
        newPassword: false,
        samePassword: false,
      },
    },
    login: {
      user: {
        email: '',
        password: '',
      },
      valid: {
        email: false,
        password: false,
      },
    },
    listannouncement: {
      listannouncement: {
        garage: '',
        serviceArea: '',
        bedroom: '',
        bathroom: '',
      },
      valid: {
        garage: false,
        serviceArea: false,
        bedroom: false,
        bathroom: false,
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
    createSetPassword: (
      state: Store,
      data: Partial<CreateSetPassword>
    ): Store => {
      return {
        ...state,
        createSetPassword: { ...state.createSetPassword, ...data },
      };
    },
    login: (state: Store, data: Partial<Login>): Store => {
      return {
        ...state,
        login: { ...state.login, ...data },
      };
    },
    listannouncement: (
      state: Store,
      data: Partial<ListAnnouncement>
    ): Store => {
      return {
        ...state,
        listannouncement: { ...state.listannouncement, ...data },
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
