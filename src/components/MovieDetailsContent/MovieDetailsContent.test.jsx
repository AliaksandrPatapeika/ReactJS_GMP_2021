import {head} from 'lodash';
import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import MockMovies from '../../tests/mocks/mockData';
import MovieDetailsContent from './MovieDetailsContent';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({id: '123'})
}));

describe('MovieDetailsContent', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const mockStore = configureMockStore();
    const initialState = {
      movie: {
        activeMovieDetailsMovie: mockMovie
      }
    };
    const store = mockStore(initialState);
    const movieDetailsContent = renderer
      .create(
        <Provider store={store}>
          <MovieDetailsContent title="title" />
        </Provider>
      )
      .toJSON();

    expect(movieDetailsContent).toMatchSnapshot();
  });
});
