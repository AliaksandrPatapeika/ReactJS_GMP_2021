import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieContext from '../../context';
import {MockMovies} from '../../mocks/mockData';
import MovieDetailsContent from './MovieDetailsContent';

describe('MovieDetailsContent', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const movieDetailsContent = renderer
      .create(
        <MovieContext.Provider value={{
          activeMovieDetailsMovie: mockMovie
        }}
        >
          <MovieDetailsContent title="title" />
        </MovieContext.Provider>
      )
      .toJSON();

    expect(movieDetailsContent).toMatchSnapshot();
  });
});
