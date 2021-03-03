import React from 'react';
import renderer from 'react-test-renderer';

import HeaderMain from '../../../containers/HeaderMain';

describe('HeaderMain', () => {
  test('renders correctly', () => {
    const headerMain = renderer
      .create(<HeaderMain />)
      .toJSON();

    expect(headerMain).toMatchSnapshot();
  });
});
