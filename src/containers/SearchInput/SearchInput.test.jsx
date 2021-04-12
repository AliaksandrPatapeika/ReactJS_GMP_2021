import React from 'react';
import renderer from 'react-test-renderer';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  test('renders correctly', () => {
    const searchInput = renderer
      .create(<SearchInput value="value" onChange={Function} />)
      .toJSON();

    expect(searchInput).toMatchSnapshot();
  });
});
