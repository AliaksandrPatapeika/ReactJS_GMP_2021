import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../mocks/mockData';
import ItemTitle from './ItemTitle';

describe('ItemTitle', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const itemTitle = renderer
      .create(<ItemTitle description={mockMovie.description} />)
      .toJSON();

    expect(itemTitle).toMatchSnapshot();
  });
});
