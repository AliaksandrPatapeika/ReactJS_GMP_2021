import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../tests/mocks/mockData';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
  test('renders correctly', () => {
    const movieCard = renderer
      .create(<MovieCard movie={head(MockMovies)} />)
      .toJSON();

    expect(movieCard).toMatchSnapshot();
  });
});
