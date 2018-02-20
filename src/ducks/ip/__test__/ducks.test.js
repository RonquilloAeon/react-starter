import reducer, { actions, initialState } from '../ducks';

describe('FETCH_IP', () => {
  it('should fetch IP address', () => {
    expect(reducer(initialState, actions.fetchIp()))
      .toEqual({ ...initialState, isLoading: true });
  });
});

describe('FETCH_IP_SUCCESSFUL', () => {
  it('should save IP address', () => {
    expect(reducer(initialState, actions.fetchIpSuccessful('127.0.0.1')))
      .toEqual({ ...initialState, isLoading: false, ipAddress: '127.0.0.1' });
  });
});