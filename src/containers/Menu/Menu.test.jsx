import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu';

describe('Menu', () => {
  test('renders correctly', () => {
    const menu = renderer
      .create(<Menu />)
      .toJSON();

    expect(menu).toMatchSnapshot();
  });
});
