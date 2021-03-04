import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../mocks/mockData';
import ItemReleaseDate from './ItemReleaseDate';

describe('ItemReleaseDate', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const itemReleaseDate = renderer
      .create(<ItemReleaseDate year={mockMovie.year} />)
      .toJSON();

    expect(itemReleaseDate).toMatchSnapshot();
  });
});
