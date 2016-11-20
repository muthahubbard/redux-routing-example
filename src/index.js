import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';

import App from './components/App';

const routeLocationDidUpdate = (location) => (
  {
    type: 'do_location_change',
    payload: location
  }
);

const Root = () => {
  
  browserHistory.listen(location => store.dispatch(routeLocationDidUpdate(location)));
  return (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:seoname)' component={App} />
    </Router>
  </Provider>
  )
};

render(<Root />, document.getElementById('app'));
