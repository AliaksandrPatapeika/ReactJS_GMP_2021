import React from 'react';
import renderer from 'react-test-renderer';

import FilterItem from './FilterItem';

describe('FilterItem', () => {
  test('renders correctly', () => {
    const filterItem = renderer
      .create(<FilterItem label="ALL" isActive setFilter={Function} />)
      .toJSON();

    expect(filterItem).toMatchSnapshot();
  });
});
