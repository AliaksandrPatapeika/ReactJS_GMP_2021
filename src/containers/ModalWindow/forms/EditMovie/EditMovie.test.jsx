import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../../../mocks/mockData';
import EditMovie from './EditMovie';

describe('EditMovie', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const editMovie = renderer
      .create(<EditMovie title="title" movie={mockMovie} />)
      .toJSON();

    expect(editMovie).toMatchSnapshot();
  });
});
