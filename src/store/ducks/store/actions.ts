import * as types from './types';
import {
  CreateAddress,
  CreateClient,
  CreateHomeDetail,
  CreateSetPassword,
  CreateUser,
  ListAnnouncement,
  Login,
} from './store.interface';

export const createUser = (payload: Partial<CreateUser>) => ({
  type: types.CREATE_USER,
  payload,
});

export const createAddress = (payload: Partial<CreateAddress>) => ({
  type: types.CREATE_ADDRESS,
  payload,
});

export const createClient = (payload: Partial<CreateClient>) => ({
  type: types.CREATE_CLIENT,
  payload,
});

export const createHomeDetail = (payload: Partial<CreateHomeDetail>) => ({
  type: types.CREATE_HOME_DETAIL,
  payload,
});

export const createSetPassword = (payload: Partial<CreateSetPassword>) => ({
  type: types.CREATE_SET_PASSWORD,
  payload,
});

export const login = (payload: Partial<Login>) => ({
  type: types.LOGIN,
  payload,
});

export const listAnnouncement = (payload: Partial<ListAnnouncement>) => ({
  type: types.LIST_ANNOUNCEMENT,
  payload,
});
