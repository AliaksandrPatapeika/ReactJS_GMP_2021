import React from 'react';
import renderer from 'react-test-renderer';

import NoMoviesFound from './NoMoviesFound';

describe('NoMoviesFound', () => {
  test('renders correctly', () => {
    const noMoviesFound = renderer
      .create(<NoMoviesFound />)
      .toJSON();

    expect(noMoviesFound).toMatchSnapshot();
  });
});
