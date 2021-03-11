import React from 'react';
import renderer from 'react-test-renderer';

import AddMovie from './AddMovie';

describe('AddMovie', () => {
  test('renders correctly', () => {
    const addMovie = renderer
      .create(<AddMovie title="title" />)
      .toJSON();

    expect(addMovie).toMatchSnapshot();
  });
});
