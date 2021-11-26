import * as types from './types';
import { User, Login, UserAuth, SetPassword } from './user.interface';

export const getUserRequest = (id: string) => ({
  type: types.USER_REQUEST,
  id,
});

export const getUserSuccess = (payload: User) => ({
  type: types.USER_SUCCESS,
  payload,
});

export const getUserFailure = () => ({
  type: types.USER_FAILURE,
});

export const getAllUsersRequest = () => ({
  type: types.USERS_REQUEST,
});

export const getAllUsersSuccess = (payload: User[]) => ({
  type: types.USERS_SUCCESS,
  payload,
});

export const getAllUsersFailure = () => ({
  type: types.USERS_FAILURE,
});

export const loginUserRequest = (payload: Login) => ({
  type: types.USER_LOGIN_REQUEST,
  payload,
});

export const loginUserSuccess = (payload: UserAuth) => ({
  type: types.USER_LOGIN_SUCCESS,
  payload,
});

export const loginUserFailure = () => ({
  type: types.USER_LOGIN_FAILURE,
});

export const refreshUserLoginRequest = () => ({
  type: types.USER_REFRESH_PASSWORD_REQUEST,
});

export const refreshUserLoginSuccess = (payload: UserAuth) => ({
  type: types.USER_REFRESH_PASSWORD_SUCCESS,
  payload,
});

export const refreshUserLoginFailure = () => ({
  type: types.USER_REFRESH_PASSWORD_FAILURE,
});

export const createUserRequest = (payload: User) => ({
  type: types.USER_CREATE_REQUEST,
  payload,
});

export const createUserSuccess = (payload: User) => ({
  type: types.USER_CREATE_SUCCESS,
  payload,
});

export const createUserFailure = () => ({
  type: types.USER_CREATE_FAILURE,
});

export const setUserPasswordRequest = (payload: SetPassword) => ({
  type: types.USER_SET_PASSWORD_REQUEST,
  payload,
});

export const setUserPasswordSuccess = (payload: User) => ({
  type: types.USER_SET_PASSWORD_SUCCESS,
  payload,
});

export const setUserPasswordFailure = () => ({
  type: types.USER_SET_PASSWORD_FAILURE,
});

export const updateUserRequest = (id: string, payload: User) => ({
  type: types.USER_UPDATE_REQUEST,
  payload,
  id,
});

export const updateUserSuccess = (payload: User) => ({
  type: types.USER_UPDATE_SUCCESS,
  payload,
});

export const updateUserFailure = () => ({
  type: types.USER_UPDATE_FAILURE,
});

export const deleteUserRequest = (id: string) => ({
  type: types.USER_DELETE_REQUEST,
  id,
});

export const deleteUserSuccess = () => ({
  type: types.USER_DELETE_SUCCESS,
});

export const deleteUserFailure = () => ({
  type: types.USER_DELETE_FAILURE,
});
