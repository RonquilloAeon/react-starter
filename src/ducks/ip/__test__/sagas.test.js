import { actions } from '../ducks';
import { api } from '../../test-helpers';
import { call, put } from 'redux-saga/effects';
import sagas from '../sagas';
import sagaHelper from 'redux-saga-testing';

describe('fetchIp', () => {
  const data = {
    ip: '127.0.0.1',
  };
  const it = sagaHelper(sagas(api).fetchIp(actions.fetchIp()));

  it('should fetch IP', (result) => {
    expect(result)
      .toEqual(call(api.get, '?format=json'));

    return { data };
  });

  it('should dispatch action with results', (result) => {
    expect(result)
      .toEqual(put(actions.fetchIpSuccessful('127.0.0.1')));
  });
});