import { Action } from '../ducks.interface';

import * as types from './types';
import * as actions from './actions';
import { sagas } from './sagas';

const INITIAL_STATE = {
  error: false,
  created: false,
  publication: {},
  publications: [{}],
};

export const publication = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.PUBLICATION_REQUEST:
      return {
        ...state,
      };
    case types.PUBLICATION_SUCCESS:
      return {
        ...state,
        publication: action.payload,
      };
    case types.PUBLICATION_FAILURE:
      return {
        ...state,
      };
    case types.PUBLICATIONS_REQUEST:
      return {
        ...state,
      };
    case types.PUBLICATIONS_SUCCESS:
      return {
        ...state,
        publications: action.payload,
      };
    case types.PUBLICATIONS_FAILURE:
      return {
        ...state,
      };
    case types.PUBLICATION_CREATE_REQUEST:
      return {
        ...state,
      };
    case types.PUBLICATION_CREATE_SUCCESS:
      return {
        ...state,
        publication: action.payload,
      };
    case types.PUBLICATION_CREATE_FAILURE:
      return {
        ...state,
      };
    case types.PUBLICATION_UPDATE_REQUEST:
      return {
        ...state,
      };
    case types.PUBLICATION_UPDATE_SUCCESS:
      return {
        ...state,
        publication: action.payload,
      };
    case types.PUBLICATION_UPDATE_FAILURE:
      return {
        ...state,
      };
    case types.PUBLICATION_ACTIVATE_REQUEST:
      return {
        ...state,
      };
    case types.PUBLICATION_ACTIVATE_SUCCESS:
      return {
        ...state,
        publication: action.payload,
      };
    case types.PUBLICATION_ACTIVATE_FAILURE:
      return {
        ...state,
      };
    case types.PUBLICATION_DEACTIVATE_REQUEST:
      return {
        ...state,
      };
    case types.PUBLICATION_DEACTIVATE_SUCCESS:
      return {
        ...state,
        publications: action.payload,
      };
    case types.PUBLICATION_DEACTIVATE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { sagas, actions };
