import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as ipReducer } from './ducks/ip';

const rootReducer = combineReducers({
  ip: ipReducer,
  form: formReducer,
});

export default rootReducer;
