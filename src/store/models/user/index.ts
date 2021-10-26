import HttpClient from '@services/http.client';
import { createModel } from '@rematch/core';

import { User, UserState } from './user.interface';
import { RootModel } from '@store/models';

const user = createModel<RootModel>()({
  state: {
    user: {},
    users: [{}],
  } as UserState,
  reducers: {
    SET_USER: (state: UserState, user: User) => {
      return {
        ...state,
        user,
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
        users: [{}],
      } as UserState;
    },
    hydrate: (state: UserState, data: UserState): UserState => {
      return { ...state, ...data };
    },
  },
  effects: (dispatch) => {
    const { user } = dispatch;
    return {
      async get(id: string): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath(`/user/${id}`).setMethod('GET').send()),
        });
      },
      async getAll(): Promise<void> {
        user.SET_USERS({
          ...(await HttpClient.setPath('/user').setMethod('GET').send()),
        });
      },
      async create(data: User): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath('/user')
            .setMethod('POST')
            .setData(data)
            .send()),
        });
      },
      async update(payload: { id: string; data: User }): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath(`/user/${payload.id}`)
            .setMethod('PATCH')
            .setData(payload.data)
            .send()),
        });
      },
      async delete(id: string): Promise<void> {
        user.SET_USER({
          ...(await HttpClient.setPath(`/user/${id}`)
            .setMethod('DELETE')
            .send()),
        });
      },
    };
  },
});

export { user };
