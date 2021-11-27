import {
  createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { store } from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

declare module 'redux' {
  export interface Store {
    sagaTask: any;
  }
}

const combinedReducer = combineReducers({
  store,
});

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<any> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combinedReducer,
    composeWithDevTools(bindMiddleware([sagaMiddleware]))
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<any>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
