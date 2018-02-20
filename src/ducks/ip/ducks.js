export const types = {
  FETCH_IP: 'IP/FETCH_IP',
  FETCH_IP_SUCCESSFUL: 'IP/FETCH_IP_SUCCESSFUL',
};

export const actions = {
  fetchIp: () => ({ type: types.FETCH_IP }),
  fetchIpSuccessful: (ipAddress) => ({ type: types.FETCH_IP_SUCCESSFUL, ipAddress }),
};

export const initialState = { ...{
  isLoading: false,
  ipAddress: null,
} };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_IP:
      return { ...state, isLoading: true };
    case types.FETCH_IP_SUCCESSFUL:
      return { ...state, isLoading: false, ipAddress: action.ipAddress };

    default:
      return state;
  }
};