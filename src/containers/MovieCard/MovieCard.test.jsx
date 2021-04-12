import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {};
    const store = mockStore(initialState);
    const movieCard = renderer
      .create(
        <Provider store={store}>
          <Router>
            <MovieCard movie={head(MockMovies)} />
          </Router>
        </Provider>
      )
      .toJSON();

    expect(movieCard).toMatchSnapshot();
  });
});
