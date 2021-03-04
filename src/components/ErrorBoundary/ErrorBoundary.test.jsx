import React from 'react';
import renderer from 'react-test-renderer';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  test('renders correctly', () => {
    const errorBoundary = renderer
      .create(<ErrorBoundary>Test</ErrorBoundary>)
      .toJSON();

    expect(errorBoundary).toMatchSnapshot();
  });
});
