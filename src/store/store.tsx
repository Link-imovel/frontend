import {
  createStore,
  applyMiddleware,
  Middleware,
  Store,
  AnyAction,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Context, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { combinedReducer, RootState } from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { RootStore } from './store.interface';

export interface SagaStore extends Store<RootState, AnyAction> {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(combinedReducer, bindMiddleware([sagaMiddleware]));
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<SagaStore>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
