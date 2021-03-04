import React from 'react';
import renderer from 'react-test-renderer';

import HeaderTop from './HeaderTop';

describe('HeaderTop', () => {
  test('renders correctly', () => {
    const headerTop = renderer
      .create(<HeaderTop />)
      .toJSON();

    expect(headerTop).toMatchSnapshot();
  });
});
