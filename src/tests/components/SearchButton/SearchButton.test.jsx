import React from 'react';
import renderer from 'react-test-renderer';

import SearchButton from '../../../components/SearchButton';

describe('SearchButton', () => {
  test('renders correctly', () => {
    const searchButton = renderer
      .create(<SearchButton />)
      .toJSON();

    expect(searchButton).toMatchSnapshot();
  });
});
