import createPersistPlugin from '@rematch/persist';
import { models, RootModel } from './models';

import sessionStorage from 'redux-persist/lib/storage/session';
import { init, RematchDispatch, RematchRootState } from '@rematch/core';

const persistPlugin = createPersistPlugin<RootModel, RootModel>({
  key: 'root',
  storage: sessionStorage,
});

export const store = init({
  models,
  plugins: [persistPlugin],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
