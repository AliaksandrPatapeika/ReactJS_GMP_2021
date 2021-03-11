import React from 'react';
import renderer from 'react-test-renderer';

import SortIcon from './SortIcon';

describe('SortIcon', () => {
  test('renders correctly', () => {
    const sortIcon = renderer
      .create(<SortIcon sortOrderAsc />)
      .toJSON();

    expect(sortIcon).toMatchSnapshot();
  });
});
