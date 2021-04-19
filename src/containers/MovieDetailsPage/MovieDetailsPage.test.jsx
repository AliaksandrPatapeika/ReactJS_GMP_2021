import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import MovieDetailsPage from './MovieDetailsPage';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({id: '123'}),
  useHistory: () => ({
    push: jest.fn()
  }),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path'
  })
}));

describe('MovieDetailsPage', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        isLoading: true,
        movies: MockMovies,
        totalAmount: 6,
        activeModalWindow: 'addMovie',
        activeModalMovie: mockMovie,
        activeMovieDetailsMovie: mockMovie
      },
      query: {
        filter: '',
        sortBy: 'release_date',
        sortOrder: 'desc'
      }
    };
    const store = mockStore(initialState);
    const movieDetailsPage = renderer
      .create(
        <Provider store={store}>
          <MovieDetailsPage />
        </Provider>
      )
      .toJSON();

    expect(movieDetailsPage).toMatchSnapshot();
  });
});
