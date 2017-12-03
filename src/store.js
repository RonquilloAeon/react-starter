import rootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

const configureStore = () => {
  // enhancers for redux dev tools and sagas
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancers = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );

  return {
    ...createStore(rootReducer, {}, enhancers),
    runSaga: sagaMiddleware.run
  }
}

let store = configureStore();

export default store;
