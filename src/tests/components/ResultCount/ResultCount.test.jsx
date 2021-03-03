import React from 'react';
import renderer from 'react-test-renderer';

import ResultCount from '../../../components/ResultCount';

describe('ResultCount', () => {
  test('renders correctly', () => {
    const mockCount = 6;
    const resultCount = renderer
      .create(<ResultCount count={mockCount} />)
      .toJSON();

    expect(resultCount).toMatchSnapshot();
  });
});
