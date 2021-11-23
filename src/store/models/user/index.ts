import HttpClient from '@services/http.client';
import { createModel } from '@rematch/core';

import {
  User,
  UserAuth,
  UserState,
  Login,
  SetPassword,
} from './user.interface';
import { RootModel } from '@store/models';

const user = createModel<RootModel>()({
  state: {
    user: {},
    access_token: '',
    users: [{}],
  } as UserState,
  reducers: {
    SET_USER: <T extends UserAuth>(state: UserState, user: T) => {
      if (user.access_token) {
        window.sessionStorage.setItem('access_token', user.access_token);
      }

      return {
        ...state,
        access_token: user?.access_token || state.access_token,
        user: user?.user || user,
      };
    },
    SET_USERS: (state: UserState, users: User[]) => {
      return {
        ...state,
        users,
      };
    },
    clear: (): UserState => {
      return {
        user: {},
        access_token: '',
        users: [{}],
      } as UserState;
    },
    hydrate: (state: UserState, data: UserState): UserState => {
      return { ...state, ...data };
    },
  },
  effects: (dispatch) => {
    const { user } = dispatch;
    let accessToken = '';
    if (typeof window !== 'undefined') {
      accessToken = window.sessionStorage.getItem('access_token') || '';
    }
    return {
      async get(id: string): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath(`/user/${id}`)
            .setMethod('GET')
            .setBearer(accessToken)
            .send()),
        });
      },
      async getAll(): Promise<void> {
        user.SET_USERS({
          ...(await HttpClient.setPath('/user')
            .setMethod('GET')
            .setBearer(accessToken)
            .send()),
        });
      },
      async login(data: Login): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath('/user/login')
            .setMethod('POST')
            .setData(data)
            .send()),
        });
      },
      async refreshLogin(oldToken: string): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath('/token/refresh')
            .setMethod('PUT')
            .setData({ oldToken })
            .send()),
        });
      },
      async create(data: User): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath('/user')
            .setMethod('POST')
            .setBearer(accessToken)
            .setData(data)
            .send()),
        });
      },
      async setPassword(data: SetPassword): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath('/user/password/' + data.token)
            .setMethod('PATCH')
            .setData(data)
            .send()),
        });
      },
      async update(payload: { id: string; data: User }): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath(`/user/${payload.id}`)
            .setMethod('PATCH')
            .setData(payload.data)
            .setBearer(accessToken)
            .send()),
        });
      },
      async delete(id: string): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath(`/user/${id}`)
            .setMethod('DELETE')
            .setBearer(accessToken)
            .send()),
        });
      },
    };
  },
});

export { user };
