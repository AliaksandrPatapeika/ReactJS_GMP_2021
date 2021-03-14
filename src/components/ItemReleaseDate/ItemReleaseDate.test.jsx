import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../mocks/mockData';
import ItemReleaseDate from './ItemReleaseDate';

describe('ItemReleaseDate', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const itemReleaseDate = renderer
      .create(<ItemReleaseDate year={new Date(mockMovie.releaseDate).getFullYear()} />)
      .toJSON();

    expect(itemReleaseDate).toMatchSnapshot();
  });
});
