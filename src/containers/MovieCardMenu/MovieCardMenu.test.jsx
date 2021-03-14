import React from 'react';
import renderer from 'react-test-renderer';

import MovieCardMenu from './MovieCardMenu';

describe('MovieCardMenu', () => {
  test('renders correctly', () => {
    const movieCardMenu = renderer
      .create(<MovieCardMenu
        showSubMenu
        closeSubMenu={Function}
        showEditMovieWindow={Function}
        showDeleteMovieWindow={Function}
      />)
      .toJSON();

    expect(movieCardMenu).toMatchSnapshot();
  });
});
