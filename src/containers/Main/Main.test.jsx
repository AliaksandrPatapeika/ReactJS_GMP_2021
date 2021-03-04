import React from 'react';
import renderer from 'react-test-renderer';

import Main from './Main';

describe('Main', () => {
  test('renders correctly', () => {
    const main = renderer
      .create(<Main />)
      .toJSON();

    expect(main).toMatchSnapshot();
  });
});
