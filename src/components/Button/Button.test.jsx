import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    const button = renderer
      .create(<Button onClick={Function} title="Title" />)
      .toJSON();

    expect(button).toMatchSnapshot();
  });
});
