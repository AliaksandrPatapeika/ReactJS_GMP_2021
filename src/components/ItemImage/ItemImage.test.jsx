import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../mocks/mockData';
import ItemImage from './ItemImage';

describe('ItemImage', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const itemImage = renderer
      .create(<ItemImage url={mockMovie.url} />)
      .toJSON();

    expect(itemImage).toMatchSnapshot();
  });
});
