import './App.less';

import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import store from '../../store';
import ErrorBoundary from '../ErrorBoundary';
import HomePage from '../HomePage';
import MovieDetailsPage from '../MovieDetailsPage';
import PageNotFound from '../PageNotFound';
import SearchPage from '../SearchPage';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/film/:id" component={MovieDetailsPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default App;
