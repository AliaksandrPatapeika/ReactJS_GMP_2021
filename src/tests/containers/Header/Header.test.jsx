import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../../containers/Header';

describe('Header', () => {
  test('renders correctly', () => {
    const header = renderer
      .create(<Header />)
      .toJSON();

    expect(header).toMatchSnapshot();
  });
});
