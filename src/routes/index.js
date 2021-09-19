import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from '../components/app';
import Photos from '../components/Photos';
import store from '../store';

import { onPhotosEnter } from './RouteCallback';

export default  (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="photos" component={Photos} onEnter={onPhotosEnter} />
      </Route>
    </Router>
  </Provider>
);