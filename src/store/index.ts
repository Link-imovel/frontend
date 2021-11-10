import createPersistPlugin from '@rematch/persist';
import { models, RootModel } from './models';

import sessionStorage from 'redux-persist/lib/storage/session';
import { init, RematchDispatch, RematchRootState } from '@rematch/core';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const persistPlugin = createPersistPlugin<RootModel, RootModel>({
  key: 'root',
  storage: sessionStorage,
});

export const store = init({
  models,
  plugins: typeof window === 'undefined' ? [persistPlugin] : undefined,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
