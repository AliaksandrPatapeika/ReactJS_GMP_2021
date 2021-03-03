import React from 'react';
import renderer from 'react-test-renderer';

import SearchInput from '../../../components/SearchInput';

describe('SearchInput', () => {
  test('renders correctly', () => {
    const searchInput = renderer
      .create(<SearchInput />)
      .toJSON();

    expect(searchInput).toMatchSnapshot();
  });
});
