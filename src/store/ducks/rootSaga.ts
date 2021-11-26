import { fork, all } from 'redux-saga/effects';
import { sagas as userSagas } from './user';
import { sagas as publicationSagas } from './publications';

const allSagas: any[] = [...userSagas, ...publicationSagas];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
