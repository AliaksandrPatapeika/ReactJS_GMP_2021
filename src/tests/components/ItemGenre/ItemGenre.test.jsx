import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import ItemGenre from '../../../components/ItemGenre';
import {MockMovies} from '../../../mocks/mockData';

describe('ItemGenre', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const itemGenre = renderer
      .create(<ItemGenre genre={mockMovie.genre} />)
      .toJSON();

    expect(itemGenre).toMatchSnapshot();
  });
});
