import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardMenu from './MovieCardMenu';

describe('MovieCardMenu', () => {
  test('renders correctly', () => {
    const movieCardMenu = renderer
      .create(<MovieCardMenu toggleMenu={Function} />)
      .toJSON();

    expect(movieCardMenu).toMatchSnapshot();
  });
});
