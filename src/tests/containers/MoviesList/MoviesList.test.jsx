import React from 'react';
import renderer from 'react-test-renderer';

import MoviesList from '../../../containers/MoviesList';

describe('MoviesList', () => {
  test('renders correctly', () => {
    const moviesList = renderer
      .create(<MoviesList />)
      .toJSON();

    expect(moviesList).toMatchSnapshot();
  });
});
