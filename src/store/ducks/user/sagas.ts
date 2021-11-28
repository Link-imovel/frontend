import { toast } from 'react-toastify';
import { userService } from '@services/user.service';
import { AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as userActions from './actions';

import { Sagas } from '../ducks.interface';
import { Login, SetPassword, User, UserAuth } from './user.interface';
import * as types from './types';
import { saveToken } from '@helpers/auth';

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
      yield call(saveToken, response.data.access_token as string);
    }
  } catch (error) {
    yield put(userActions.loginUserFailure());
    yield call(toast.error, 'Ocorreu um erro ao efetuar login!');
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
      yield call(toast.success, 'Senha criada com sucesso!');
    }
  } catch (error) {
    yield put(userActions.setUserPasswordFailure());
    yield call(toast.error, 'Ocorreu um erro ao definir a senha!');
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
      yield call(toast.success, 'Usuário criado com sucesso!');
    }
  } catch (error) {
    yield put(userActions.createUserFailure());
    yield call(toast.error, 'Ocorreu um erro ao tentar criar o usuário!');
  }
}

export function* update({ id, payload }: Sagas<{ id: string; payload: User }>) {
  try {
    const response: AxiosResponse<User> = yield call(
      userService.update,
      id,
      payload
    );
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.updateUserSuccess(response.data));
      yield call(toast.success, 'Usuário atualizado com sucesso!');
    }
  } catch (error) {
    yield put(userActions.updateUserFailure());
    yield call(toast.error, 'Ocorreu um erro ao tentar atualizar o usuário!');
  }
}

export function* deleteUser({ id }: Sagas<{ id: string }>) {
  try {
    const response: AxiosResponse<User> = yield call(userService.delete, id);
    if (response.status >= 200 && response.status <= 299) {
      yield put(userActions.deleteUserSuccess());
      yield call(toast.success, ' Usuário deletado com sucesso!');
    }
  } catch (error) {
    yield put(userActions.deleteUserFailure());
    yield call(toast.error, 'Ocorreu um erro ao deletar o usuário!');
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
