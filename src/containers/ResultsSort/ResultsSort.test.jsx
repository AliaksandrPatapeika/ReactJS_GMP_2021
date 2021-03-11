import React from 'react';
import renderer from 'react-test-renderer';

import ResultsSort from './ResultsSort';

describe('ResultsSort', () => {
  test('renders correctly', () => {
    const resultsSort = renderer
      .create(<ResultsSort />)
      .toJSON();

    expect(resultsSort).toMatchSnapshot();
  });
});