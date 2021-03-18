import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieContext from '../../context';
import {MockMovies} from '../../tests/mocks/mockData';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const movieDetails = renderer
      .create(
        <MovieContext.Provider value={{
          activeMovieDetails: true,
          activeMovieDetailsMovie: mockMovie
        }}
        >
          <MovieDetails title="title" />
        </MovieContext.Provider>
      )
      .toJSON();

    expect(movieDetails).toMatchSnapshot();
  });
});
