import { actions } from './ducks';
import { call, put, takeEvery } from 'redux-saga/effects';

export default (api) => {
  function* fetchIp(action) {
    const ip = yield call(api.get, '?format=json');
    yield put(actions.fetchIpSuccessful(ip.data.ip));
  }

  return {
    fetchIp,
  }
};