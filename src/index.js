
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import routes from './routes';
import React from 'react';

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById('root')
);
