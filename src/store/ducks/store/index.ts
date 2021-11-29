import * as types from './types';
import * as actions from './actions';

import { Action } from '../ducks.interface';

const INITIAL_STATE = {
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
      neighborhood: '',
      city: '',
      state: '',
      zip: '',
      ibge: '',
    },
    valid: {
      street: false,
      street2: true,
      number: false,
      neighborhood: false,
      city: false,
      state: false,
      zip: false,
      ibge: true,
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
      price: '',
      garage: '',
      serviceArea: '',
      bedroom: '',
      bathroom: '',
      locale: '',
      type: '',
    },
    valid: {
      price: false,
      garage: false,
      serviceArea: false,
      bedroom: false,
      bathroom: false,
      locale: false,
      type: false,
    },
  },
};

export const store = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return {
        ...state,
        createUser: { ...state.createUser, ...action.payload },
      };
    case types.CREATE_ADDRESS:
      return {
        ...state,
        createAddress: { ...state.createAddress, ...action.payload },
      };
    case types.CREATE_CLIENT:
      return {
        ...state,
        createClient: { ...state.createClient, ...action.payload },
      };
    case types.CREATE_HOME_DETAIL:
      return {
        ...state,
        createHomeDetail: { ...state.createHomeDetail, ...action.payload },
      };
    case types.CREATE_SET_PASSWORD:
      return {
        ...state,
        createSetPassword: { ...state.createSetPassword, ...action.payload },
      };
    case types.LOGIN:
      return {
        ...state,
        login: { ...state.login, ...action.payload },
      };
    case types.LIST_ANNOUNCEMENT:
      return {
        ...state,
        listannouncement: { ...state.listannouncement, ...action.payload },
      };
    default:
      return state;
  }
};

export { actions };
