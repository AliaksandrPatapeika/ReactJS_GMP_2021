import {head} from 'lodash';
import React from 'react';
import renderer from 'react-test-renderer';

import {MockMovies} from '../../../../mocks/mockData';
import DeleteMovie from './DeleteMovie';

describe('DeleteMovie', () => {
  test('renders correctly', () => {
    const mockMovie = head(MockMovies);
    const deleteMovie = renderer
      .create(<DeleteMovie title="title" movie={mockMovie} />)
      .toJSON();

    expect(deleteMovie).toMatchSnapshot();
  });
});
