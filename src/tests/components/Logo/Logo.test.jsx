import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../../../components/Logo';

describe('Logo', () => {
  test('renders correctly', () => {
    const logo = renderer
      .create(<Logo />)
      .toJSON();

    expect(logo).toMatchSnapshot();
  });
});
