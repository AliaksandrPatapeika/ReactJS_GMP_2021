import React from 'react';
import renderer from 'react-test-renderer';

import ResultsFilter from '../../../containers/ResultsFilter';

describe('ResultsFilter', () => {
  test('renders correctly', () => {
    const resultsFilter = renderer
      .create(<ResultsFilter />)
      .toJSON();

    expect(resultsFilter).toMatchSnapshot();
  });
});
