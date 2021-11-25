import { fork, all } from 'redux-saga/effects';
import { sagas as userSagas } from './user';

const allSagas: any[] = [...userSagas];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
