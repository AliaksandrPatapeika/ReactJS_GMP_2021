import React from 'react';
import renderer from 'react-test-renderer';

import OopsText from './OopsText';

describe('OopsText', () => {
  test('renders correctly', () => {
    const oopsText = renderer
      .create(<OopsText />)
      .toJSON();

    expect(oopsText).toMatchSnapshot();
  });
});
