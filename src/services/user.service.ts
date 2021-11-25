import { Login, SetPassword, User } from '@store/ducks/user/user.interface';
import { httpClient } from './http/http.client';

const userService = {
  get: (id: string) =>
    httpClient({
      title: 'UserService - get',
      endpoint: '/user/' + id,
      method: 'GET',
    }),
  getAll: () =>
    httpClient({
      title: 'UserService - getAll',
      endpoint: '/user/',
      method: 'GET',
    }),
  login: (data: Login) =>
    httpClient({
      title: 'UserService - login',
      endpoint: '/user/',
      data,
      method: 'POST',
    }),
  refreshLogin: () =>
    httpClient({
      title: 'UserService - refreshLogin',
      endpoint: '/token/refresh',
      method: 'PUT',
    }),
  create: (data: User) =>
    httpClient({
      title: 'UserService - create',
      endpoint: '/user/',
      data,
      method: 'POST',
    }),
  setPassword: (data: SetPassword) =>
    httpClient({
      title: 'UserService - setPassword',
      endpoint: '/user/password/' + data.token,
      data,
      method: 'PATCH',
    }),
  update: (data: { id: string; data: User }) =>
    httpClient({
      title: 'UserService - update',
      endpoint: '/user/' + data.id,
      data,
      method: 'PATCH',
    }),
  delete: (id: string) =>
    httpClient({
      title: 'UserService - delete',
      endpoint: '/user/' + id,
      method: 'DELETE',
    }),
};

export { userService };
