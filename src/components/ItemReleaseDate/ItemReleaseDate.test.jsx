import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../mocks/mockData';
import ItemReleaseDate from './ItemReleaseDate';

describe('ItemReleaseDate', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const itemReleaseDate = renderer
      .create(<ItemReleaseDate releaseDate={mockMovie.releaseDate.slice(0, 4)} />)
      .toJSON();

    expect(itemReleaseDate).toMatchSnapshot();
  });
});
