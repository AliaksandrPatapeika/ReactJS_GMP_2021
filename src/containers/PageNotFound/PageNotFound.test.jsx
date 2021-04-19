import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        isLoading: true,
        movies: MockMovies,
        totalAmount: 6,
        activeModalWindow: 'addMovie',
        activeModalMovie: mockMovie
      },
      query: {
        filter: '',
        sortBy: 'release_date',
        sortOrder: 'desc'
      }
    };
    const store = mockStore(initialState);
    const pageNotFound = renderer
      .create(
        <Provider store={store}>
          <Router>
            <PageNotFound />
          </Router>
        </Provider>
      )
      .toJSON();

    expect(pageNotFound).toMatchSnapshot();
  });
});
