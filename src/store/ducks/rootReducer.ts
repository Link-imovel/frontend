import { combineReducers } from 'redux';

import { store } from './store';
import { user } from './user';
import { publication } from './publications';

export const combinedReducer = combineReducers({
  store,
  user,
  publication,
});

export type RootState = ReturnType<typeof combinedReducer>;
