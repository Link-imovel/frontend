import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { combinedReducer, RootState } from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import {
  createStore,
  applyMiddleware,
  Middleware,
  Store,
  AnyAction,
} from 'redux';

export interface SagaStore extends Store<RootState, AnyAction> {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const localStorageMiddleware = (store: any) => {
  return (next: any) => (action: any) => {
    const result = next(action);
    if (typeof window !== 'undefined')
      sessionStorage?.setItem('applicationState', JSON.stringify(store.getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (typeof window !== 'undefined' && localStorage?.getItem('applicationState') !== null) {
    return JSON.parse(sessionStorage?.getItem('applicationState') || '{}');
  }
};

export const makeStore: MakeStore<SagaStore> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combinedReducer,
    reHydrateStore(),
    bindMiddleware([sagaMiddleware, logger, localStorageMiddleware])
  );
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<SagaStore>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
