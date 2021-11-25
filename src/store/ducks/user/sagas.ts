import { userService } from '@services/user.service';
import { AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import { Sagas } from '../ducks.interface';

import * as userActions from './actions';
import * as types from './types';
import { Login, SetPassword, User, UserAuth } from './user.interface';

export function* getUsers() {
  try {
    const response: AxiosResponse<User[]> = yield call(userService.getAll);
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.getAllUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(userActions.getAllUsersFailure());
  }
}

export function* getUser({ id }: Sagas<{ id: string }>) {
  try {
    const response: AxiosResponse<User> = yield call(userService.get, id);
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.getUserSuccess(response.data));
    }
  } catch (error) {
    yield put(userActions.getUserFailure());
  }
}

export function* login({ payload }: Sagas<{ payload: Login }>) {
  try {
    const response: AxiosResponse<UserAuth> = yield call(
      userService.login,
      payload
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.loginUserSuccess(response.data));
    }
  } catch (error) {
    yield put(userActions.loginUserFailure());
  }
}

export function* refreshLogin() {
  try {
    const response: AxiosResponse<UserAuth> = yield call(
      userService.refreshLogin
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.refreshUserLoginSuccess(response.data));
    }
  } catch (error) {
    yield put(userActions.refreshUserLoginFailure());
  }
}

export function* setPassword({ payload }: Sagas<{ payload: SetPassword }>) {
  try {
    const response: AxiosResponse<User> = yield call(
      userService.setPassword,
      payload
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.setUserPasswordSuccess(response.data));
    }
  } catch (error) {
    yield put(userActions.setUserPasswordFailure());
  }
}

export function* create({ payload }: Sagas<{ payload: User }>) {
  try {
    const response: AxiosResponse<User> = yield call(
      userService.create,
      payload
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(userActions.createUserFailure());
  }
}

export function* update({
  payload,
}: Sagas<{ payload: { id: string; data: User } }>) {
  try {
    const response: AxiosResponse<User> = yield call(
      userService.update,
      payload
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.updateUserSuccess(response.data));
    }
  } catch (error) {
    yield put(userActions.updateUserFailure());
  }
}

export function* deleteUser({ id }: Sagas<{ id: string }>) {
  try {
    const response: AxiosResponse<User> = yield call(userService.delete, id);
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.deleteUserSuccess());
    }
  } catch (error) {
    yield put(userActions.deleteUserFailure());
  }
}

export function* watchProject() {
  yield takeEvery(types.USERS_REQUEST, getUsers);
  yield takeEvery(types.USER_REQUEST, getUser);
  yield takeEvery(types.USER_LOGIN_REQUEST, login);
  yield takeEvery(types.USER_REFRESH_PASSWORD_REQUEST, refreshLogin);
  yield takeEvery(types.USER_SET_PASSWORD_REQUEST, setPassword);
  yield takeEvery(types.USER_CREATE_REQUEST, create);
  yield takeEvery(types.USER_UPDATE_REQUEST, update);
  yield takeEvery(types.USER_DELETE_REQUEST, deleteUser);
}

export const sagas = [watchProject];
