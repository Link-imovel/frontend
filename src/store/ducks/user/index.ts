import { Action } from '../ducks.interface';

import * as types from './types';
import * as actions from './actions';
import { sagas } from './sagas';

const INITIAL_STATE = {
  user: {},
  access_token: '',
  users: [{}],
};

export const user = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.USERS_REQUEST:
      return {
        ...state,
      };
    case types.USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case types.USERS_FAILURE:
      return {
        ...state,
      };
    case types.USER_REQUEST:
      return {
        ...state,
      };
    case types.USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.USER_FAILURE:
      return {
        ...state,
      };
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        access_token: action.payload?.access_token,
        user: action.payload?.user,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
      };
    case types.USER_REFRESH_PASSWORD_REQUEST:
      return {
        ...state,
      };
    case types.USER_REFRESH_PASSWORD_SUCCESS:
      return {
        ...state,
        access_token: action.payload?.access_token,
        user: action.payload?.user,
      };
    case types.USER_REFRESH_PASSWORD_FAILURE:
      return {
        ...state,
      };
    case types.USER_SET_PASSWORD_REQUEST:
      return {
        ...state,
      };
    case types.USER_SET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.USER_SET_PASSWORD_FAILURE:
      return {
        ...state,
      };
    case types.USER_CREATE_REQUEST:
      return {
        ...state,
      };
    case types.USER_CREATE_SUCCESS:
      return {
        ...state,
      };
    case types.USER_CREATE_FAILURE:
      return {
        ...state,
      };
    case types.USER_UPDATE_REQUEST:
      return {
        ...state,
      };
    case types.USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.USER_UPDATE_FAILURE:
      return {
        ...state,
      };
    case types.USER_DELETE_REQUEST:
      return {
        ...state,
      };
    case types.USER_DELETE_SUCCESS:
      return {
        ...state,
        user: {},
      };
    case types.USER_DELETE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { actions, sagas };
