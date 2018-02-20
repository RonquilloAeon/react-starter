import { all, takeEvery } from 'redux-saga/effects';
import { api } from './services';
import { types as ipTypes, sagas as ipSagas } from './ducks/ip';

const _ipSagas = ipSagas(api);

export default function* rootSaga() {
  yield all([
    takeEvery(ipTypes.FETCH_IP, _ipSagas.fetchIp),
  ]);
};
