import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import ItemImage from '../../../components/ItemImage';
import {MockMovies} from '../../../mocks/mockData';

describe('ItemImage', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const itemImage = renderer
      .create(<ItemImage url={mockMovie.url} />)
      .toJSON();

    expect(itemImage).toMatchSnapshot();
  });
});
