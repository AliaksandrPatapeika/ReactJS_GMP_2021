import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../mocks/mockData';
import MovieReleaseDate from './MovieReleaseDate';

describe('MovieReleaseDate', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const movieReleaseDate = renderer
      .create(<MovieReleaseDate year={new Date(mockMovie.release_date).getFullYear()} />)
      .toJSON();

    expect(movieReleaseDate).toMatchSnapshot();
  });
});
