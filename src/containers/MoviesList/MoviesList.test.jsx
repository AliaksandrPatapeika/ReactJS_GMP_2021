import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import MoviesList from './MoviesList';

describe('MoviesList', () => {
  test('renders correctly', () => {
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        movies: MockMovies
      }
    };
    const store = mockStore(initialState);
    const moviesList = renderer
      .create(
        <Provider store={store}>
          <Router>
            <MoviesList />
          </Router>
        </Provider>
      )
      .toJSON();

    expect(moviesList).toMatchSnapshot();
  });
});
