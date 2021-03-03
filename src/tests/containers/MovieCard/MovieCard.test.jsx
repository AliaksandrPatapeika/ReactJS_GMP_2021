import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from '../../../containers/MovieCard';
import {MockMovies} from '../../../mocks/mockData';

describe('MovieCard', () => {
  test('renders correctly', () => {
    const movieCard = renderer
      .create(<MovieCard movie={head(MockMovies)} />)
      .toJSON();

    expect(movieCard).toMatchSnapshot();
  });
});
