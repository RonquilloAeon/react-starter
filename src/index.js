import 'babel-polyfill';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import rootSaga from './sagas';
import store from './store';
import 'url-search-params-polyfill';

import dependencies from './styles/dependencies.styl';
import styles from './styles/main.styl';

// components
import App from './app';

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
