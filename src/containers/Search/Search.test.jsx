import React from 'react';
import renderer from 'react-test-renderer';

import Search from './Search';

describe('Search', () => {
  test('renders correctly', () => {
    const search = renderer
      .create(<Search />)
      .toJSON();

    expect(search).toMatchSnapshot();
  });
});
