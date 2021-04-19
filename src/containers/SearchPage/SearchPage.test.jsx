import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import SearchPage from './SearchPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path'
  })
}));

describe('SearchPage', () => {
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
    const searchPage = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SearchPage />
          </Router>
        </Provider>
      )
      .toJSON();

    expect(searchPage).toMatchSnapshot();
  });
});
