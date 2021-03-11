import React from 'react';
import renderer from 'react-test-renderer';

import Select from './Select';

describe('Select', () => {
  test('renders correctly', () => {
    const select = renderer
      .create(<Select onChange={Function} options={[]} />)
      .toJSON();

    expect(select).toMatchSnapshot();
  });
});
